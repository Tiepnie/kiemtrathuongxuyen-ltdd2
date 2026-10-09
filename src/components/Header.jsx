import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

/**
 * 1. FunctionComponent & arrowFunction:
 * Header được định nghĩa dưới dạng một Function Component (Hàm thành phần) 
 * sử dụng cú pháp Arrow Function (() => {}).
 */
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-badge">
        <GraduationCap className="badge-icon" size={18} />
        <span>LẬP TRÌNH DI ĐỘNG 2 (LTDD2)</span>
      </div>
      
      <h1 className="header-title">
        Chào mừng <span className="highlight-text">IT23M</span> đến với <span className="gradient-text">LTDD2</span>
      </h1>
      
      <p className="header-subtitle">
        <Sparkles size={16} className="sparkle-icon" />
        Ứng dụng Demo tích hợp đầy đủ kiến thức React Fundamentals & ES6 Core Concepts
      </p>
    </header>
  );
};

export default Header;
