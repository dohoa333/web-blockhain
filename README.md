### 工具

- 区块链钱包插件：`MetaMask` 浏览器插件市场 - MetaMask插件安装

- 智能合约工具：`Truffle Framework` 提供一套用于开发以太坊智能合约的工具

  开发环境，测试框架

  提供了智能合约管理、部署和迁移、网络管理、开发控制台等工具

- 以太坊测试链：`Ganache` 一个 个人区块链，一个本地开发区块链，用来模仿公共区块链的所以行为

- 编写智能合约语言：`Solidity`，一种用于实现智能合约的面向对象的高级语言

- 智能合约必须部署到链上进行测试，部署和测试时间较长，需要申请一些假的代币，对于开发者最好部署在私链上，`Ganache` 是以太坊开发的个人区块链

中心化app的数据存储在中心化服务器上，Dapp的数据库存储在区块链上

![dApp](C:\Users\Administrator\Desktop\Dapp.png)

```bash
# 下载安装Truffle Framework
npm install -g truffle

# 快速构建一个本地ETH网络
npm install ganache --global
# 启动本地ETH网络
ganache

# 选择一个测试私钥导入到MetaMask账号，设置/高级/显示测试网络 - 启用

# 项目文件夹创建区块链文件夹blockchain
mkdir blockchain
# 在区块链文件夹中再创建一个合约文件夹contracts
cd blockchain
mkdir contracts
cd contracts
# 创建一个truffle项目，开发智能合约
truffle init 		# truffle初始化
# 智能合约，文件夹结构
	blockchain/contracts/						# 区块链文件夹/智能合约
								contracts 			 # 编写智能合约
								migrations 			 # 将迁移新创建的智能合约
								test 						 # 测试智能合约
								truffle-config.js # truffle配置

# 编写智能合约
# blockchain/contracts/contracts中新建文件Contacts.sol写入
// SPDX-License-Identifier: MIT	# 指定solidity版本
pragma solidity >=0.4.22 <0.9.0;
# 编写第一个智能合约
contract Contacts {
  uint public count = 0; // 状态变量
}
// count是一个特殊变了，写入改变了的任何数据豆浆存储在区块链存储中，public修饰符允许智能合约外对齐访问


# 前端React
# 在blockchain文件夹执行create-react-app脚手架
npx create-react-app contacts
# 添加web3.js依赖
cd contacts
npm install web3
# create-react-app >= 5执行（create-react-app版本高于5不包含polyfill，报错）
npm install --dev react-app-rewired crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer

# react项目根目录 contacts创建react和智能合约配置文件，config-overrides.js
const webpack = require("webpack");
module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify"),
        url: require.resolve("url"),
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]);
    return config;
};

# 修改package.json启动方式
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}

# App.js测试账号状态
import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
    const [account, setAccount] = useState(); // 设置账号的状态变量

    useEffect(() => {
        async function load() {
            const web3 = new Web3(
                Web3.givenProvider || "http://localhost:7545"
            );
            const accounts = await web3.eth.requestAccounts();

            setAccount(accounts[0]);
        }

        load();
    }, []);

    return <div>当前账号： {account}</div>;
}

export default App;

# 为了能够在本地区块链运行，合同文件夹truffle-config.js文件中打开/添加测试网络，编译器
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,	// 与ganache端口相同
            network_id: "*",
        },
    },
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};

# migrations文件夹中创建新文件2_deploy_contracts.js
const Contacts = artifacts.require("./Contacts.sol");
module.exports = function (deployer) {
    deployer.deploy(Contacts);
};

# truffle编译和部署				
cd contracts
truffle compile
truffle migrate	# 迁移智能合约

# 启动react项目
cd contacts
npm start

# ganache和react服务都启动，MetaMask插件中切换网络为本地Localhost 8545
# 浏览器中显示，当前账号： 0x...即触发MetaMask与区块链网络进行交互，并检索了账户的ID

# 在智能合约Contacts.sol中创建一个新函数来获取联系人列表，并发送到前端试图呈现
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Contacts {
  uint public count = 0; // 状态变量
  struct Contact {
    uint id;
    string name;
    string phone;
  }
  constructor() public {
    createContact('ETHtest', '13800000000');
  }
  mapping(uint => Contact) public contacts;
  
  function createContact(string memory _name, string memory _phone) public {
    count++;
    contacts[count] = Contact(count, _name, _phone);
  }
}

# 再次迁移此合约，不能迁移重启ganache
truffle migrate

# React src新建配置文件config.js，配置合约地址，合约ABI
# 信息在blockchain/contracts/build/contracts/Contacts.json中能够找到
# 合约地址为Contacts.json - networks - address，与truffle migrate迁移合约contract address匹配
export const CONTRACT_ADDRESS = "0xD3329a764935C7AA9B32f162C196E28B4e3310A3"; // 合约地址
export const CONTRACT_ABI = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    ...
}]

# React中src/App.js导入智能合约地址和ABI
import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

function App() {
    const [account, setAccount] = useState();
    const [contactList, setContactList] = useState();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function load() {
            const web3 = new Web3(
                Web3.givenProvider || "http://localhost:8545"
            );
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            // 使用ABI和地址实例化智能合约。
            const contactListByContract = new web3.eth.Contract(
                CONTRACT_ABI,
                CONTRACT_ADDRESS
            );
            // 将联系人列表设置为状态变量。
            setContactList(contactListByContract);
            // 得到迭代的联系人总数
            const counter = await contactListByContract.methods.count().call();
            // 遍历计数器的时间量
            for (var i = 1; i <= counter; i++) {
                // 调用 contacts 方法从智能合约中获取特定的联系人
                const contact = await contactListByContract.methods
                    .contacts(i)
                    .call();
                // 添加最近获取的联系状态变量。
                setContacts((contacts) => [...contacts, contact]);
            }
        }

        load();
    }, []);

    return (
        <div>
            当前账号： {account}
            <h1>联系人列表</h1>
            <ul>
                {Object.keys(contacts).map((contact, index) => (
                    <li key={`${contacts[index].name}-${index}`}>
                        <h4>{contacts[index].name}</h4>
                        <span>
                            <b>手机号码： </b>
                            {contacts[index].phone}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

# 浏览器显示
当前账号： 0x...
联系人列表
ETHtest
手机号码： 13800000000
```