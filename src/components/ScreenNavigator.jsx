import React from 'react';
import { Smartphone, Monitor, Moon, Sun, Layers, Sparkles, GraduationCap, BookOpen, Cpu } from 'lucide-react';

const BAAI2_SCREENS = [
  { id: 1, name: '1. Splash Screen', code: 'splash' },
  { id: 2, name: '2. Onboarding (3 slides)', code: 'onboarding' },
  { id: 3, name: '3. Sign In (Đăng nhập)', code: 'signin' },
  { id: 4, name: '4. Sign Up (Đăng ký)', code: 'signup' },
  { id: 5, name: '5. OTP Verification', code: 'otp' },
  { id: 6, name: '6. Quên / Đặt lại MK', code: 'reset' },
  { id: 7, name: '7. Trang Chủ (Home)', code: 'home' },
  { id: 8, name: '8. Tìm Kiếm & Bộ Lọc', code: 'search' },
  { id: 9, name: '9. Chi Tiết Sự Kiện', code: 'detail' },
  { id: 10, name: '10. Đặt Vé & Mã QR', code: 'booking' },
];

const ScreenNavigator = ({ 
  activeAssignment, // 'bai1' | 'bai2' | 'bai3'
  onSelectAssignment,
  currentScreenCode, 
  onSelectScreen, 
  isMobileFrame, 
  onToggleFrame,
  isDarkMode,
  onToggleTheme
}) => {
  return (
    <header className="screen-navigator-bar">
      <div className="nav-top-row">
        <div className="brand-badge-info">
          <GraduationCap size={22} className="brand-icon" />
          <span className="brand-title">LTDD2 - Lớp IT23M</span>
          <span className="class-badge">Bài Tập Giữa Kỳ</span>
        </div>



        <div className="nav-controls-right">
          <button 
            className={`control-toggle-btn ${isMobileFrame ? 'active' : ''}`}
            onClick={onToggleFrame}
            title={isMobileFrame ? 'Chuyển sang Xem Toàn Màn Hình' : 'Chuyển sang Khung Điện Thoại Mobile'}
          >
            {isMobileFrame ? <Smartphone size={16} /> : <Monitor size={16} />}
            <span>{isMobileFrame ? 'Khung Mobile' : 'Mở Rộng'}</span>
          </button>

          <button 
            className="control-toggle-btn theme-btn"
            onClick={onToggleTheme}
            title="Đổi Giao Diện Sáng / Tối"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{isDarkMode ? 'Sáng' : 'Tối'}</span>
          </button>
        </div>
      </div>

      {/* Screen Selector Buttons for 10 Màn Hình Figma */}
      <div className="screen-tabs-scroll">
        <span className="tabs-label"><Layers size={14} /> 10 Màn Hình Figma:</span>
        {BAAI2_SCREENS.map((sc) => {
          const isActive = currentScreenCode === sc.code;
          return (
            <button
              key={sc.id}
              className={`screen-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectScreen(sc.code)}
            >
              {sc.name}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default ScreenNavigator;
