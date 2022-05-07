import React from 'react';
// import ReactDOM from 'react-dom';
import { Navigate, HashRouter, Routes, Route } from 'react-router-dom'; // 引入路由
import './index.scss';    // 引入公共样式

import Home from './components/home/index.js';
import LuckDraw from './components/luckDraw/index.js';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
/**
 * 根据路由渲染页面
 */
 root.render(
  <HashRouter>
    <div>
      {/* 路由重定向到  /home页面  */}
      <Routes>
        {/* <Route exact path='/' element={() => <Navigate to="/home" />} />   */}
        <Route path='/' element={<LuckDraw />} />
        <Route path='/luckDraw' element={<LuckDraw />} />
      </Routes>
    </div>
  </HashRouter>
);
