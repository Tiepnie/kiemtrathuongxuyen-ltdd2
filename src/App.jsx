import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ConceptExplainer from './components/ConceptExplainer';
import DetailedDoc from './components/DetailedDoc';
import Esp32Guide from './components/Esp32Guide';
import ScreenNavigator from './components/ScreenNavigator';
import SplashScreen from './components/screens/SplashScreen';
import OnboardingScreen from './components/screens/OnboardingScreen';
import SignInScreen from './components/screens/SignInScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import VerificationScreen from './components/screens/VerificationScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import HomeScreen from './components/screens/HomeScreen';
import SearchFilterScreen from './components/screens/SearchFilterScreen';
import EventDetailScreen from './components/screens/EventDetailScreen';
import TicketBookingScreen from './components/screens/TicketBookingScreen';
import BottomNavBar from './components/BottomNavBar';
import { MOCK_EVENTS } from './data/mockEvents';
import { Wifi, Battery, Signal, Layers, PlayCircle } from 'lucide-react';
import './App.css';

function App() {
  const [activeAssignment, setActiveAssignment] = useState('bai2'); // 'bai2' app main
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedEvent, setSelectedEvent] = useState(MOCK_EVENTS[0]);
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userEmail, setUserEmail] = useState('student@it23m.edu.vn');
  const [activeNavTab, setActiveNavTab] = useState('home');

  const handleSelectNavTab = (tabId) => {
    setActiveNavTab(tabId);
    if (tabId === 'home') {
      setCurrentScreen('home');
    } else if (tabId === 'search') {
      setCurrentScreen('search');
    } else if (tabId === 'tickets') {
      setCurrentScreen('booking');
    } else if (tabId === 'profile') {
      setCurrentScreen('signin');
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentScreen('detail');
  };

  const handleBookTicket = (event) => {
    setSelectedEvent(event || MOCK_EVENTS[0]);
    setCurrentScreen('booking');
  };

  return (
    <div className={`app-root ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* 1. Navigation Bar for Switching between Bài 1, Bài 2 & Bài 3 */}
      <ScreenNavigator
        activeAssignment={activeAssignment}
        onSelectAssignment={(asgn) => setActiveAssignment(asgn)}
        currentScreenCode={currentScreen}
        onSelectScreen={(code) => setCurrentScreen(code)}
        isMobileFrame={isMobileFrame}
        onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* 2. Main Content Area */}
      <main className="main-viewport">
        {/* BÀI 1: 9 KHÁI NIỆM & COMPONENT SECTION */}
        {activeAssignment === 'bai1' && (
          <div className="bai1-container">
            <Header />

            <div className="bai1-sections-wrapper">
              <h2 className="bai1-view-title">
                <Layers size={22} className="view-icon" /> 
                Demo Component Section (Nhận props title & description)
              </h2>

              <div className="sections-grid">
                <Section 
                  badge="Phần 1"
                  title="Giới Thiệu Môn Học LTDD2" 
                  description="Môn học Lập Trình Di Động 2 cung cấp kiến thức toàn diện về phát triển ứng dụng di động với React Native & ES6+, bao gồm Component, State, Props, Hooks và các kỹ thuật lập trình di động hiện đại."
                >
                  <div className="section-extra-info">
                    <span className="badge-tag">Lớp: IT23M</span>
                    <span className="badge-tag">Môn học: LTDD2</span>
                    <span className="badge-tag">Học kỳ: 1 (2026-2027)</span>
                  </div>
                </Section>

                <Section 
                  badge="Phần 2"
                  title="Mục Tiêu Bài Tập Giữa Kỳ (Bài 1, Bài 2 & Bài 3)" 
                  description="Xây dựng 9 khái niệm cốt lõi, hoàn thành 10 màn hình EventHub Figma, và cấu hình môi trường phát triển vi điều khiển ESP32 với Arduino IDE."
                >
                  <div className="section-extra-info">
                    <span className="badge-tag success">Bài 1: 9 Khái niệm</span>
                    <span className="badge-tag info">Bài 2: 10 Màn hình Figma</span>
                    <span className="badge-tag success">Bài 3: ESP32 & Driver</span>
                  </div>
                </Section>

                <Section 
                  badge="Phần 3"
                  title="Phương Pháp Học Lập Trình Di Động Chất Lượng" 
                  description="Tập trung vào thực hành viết code chuẩn ES6+, chia nhỏ thành các Component tái sử dụng cao và nắm chắc luồng dữ liệu một chiều qua State và Props."
                />
              </div>
            </div>

            <div className="bai1-interactive-wrapper">
              <h2 className="bai1-view-title">
                <PlayCircle size={22} className="view-icon" /> 
                Sandbox Chạy Thực Tế 9 Khái Niệm ES6 & React
              </h2>
              <ConceptExplainer />
            </div>

            <div className="bai1-docs-wrapper">
              <DetailedDoc />
            </div>
          </div>
        )}

        {/* BÀI 2: EVENTHUB APP - 10 MÀN HÌNH FIGMA */}
        {activeAssignment === 'bai2' && (
          <div className={isMobileFrame ? 'mobile-frame-container' : 'expanded-container'}>
            {isMobileFrame && (
              <div className="mobile-status-bar">
                <span className="status-time">9:41</span>
                <div className="status-icons">
                  <Signal size={14} />
                  <Wifi size={14} />
                  <Battery size={16} />
                </div>
              </div>
            )}

            <div className="screen-content-box">
              {currentScreen === 'splash' && (
                <SplashScreen onNext={() => setCurrentScreen('onboarding')} />
              )}

              {currentScreen === 'onboarding' && (
                <OnboardingScreen
                  onFinish={() => setCurrentScreen('signin')}
                  onSignIn={() => setCurrentScreen('signin')}
                />
              )}

              {currentScreen === 'signin' && (
                <SignInScreen
                  onSignInSuccess={(user) => {
                    setUserEmail(user.email);
                    setCurrentScreen('home');
                  }}
                  onGoSignUp={() => setCurrentScreen('signup')}
                  onForgotPassword={() => setCurrentScreen('reset')}
                />
              )}

              {currentScreen === 'signup' && (
                <SignUpScreen
                  onGoOTP={(email) => {
                    setUserEmail(email);
                    setCurrentScreen('otp');
                  }}
                  onGoSignIn={() => setCurrentScreen('signin')}
                />
              )}

              {currentScreen === 'otp' && (
                <VerificationScreen
                  email={userEmail}
                  onVerifySuccess={() => setCurrentScreen('home')}
                  onBack={() => setCurrentScreen('signup')}
                />
              )}

              {currentScreen === 'reset' && (
                <ResetPasswordScreen
                  onBackToLogin={() => setCurrentScreen('signin')}
                />
              )}

              {currentScreen === 'home' && (
                <HomeScreen
                  onSelectEvent={handleSelectEvent}
                  onOpenSearch={() => setCurrentScreen('search')}
                  onBookTicket={handleBookTicket}
                />
              )}

              {currentScreen === 'search' && (
                <SearchFilterScreen
                  onSelectEvent={handleSelectEvent}
                  onBack={() => setCurrentScreen('home')}
                />
              )}

              {currentScreen === 'detail' && (
                <EventDetailScreen
                  event={selectedEvent}
                  onBack={() => setCurrentScreen('home')}
                  onBookTicket={handleBookTicket}
                />
              )}

              {currentScreen === 'booking' && (
                <TicketBookingScreen
                  event={selectedEvent}
                  onBack={() => setCurrentScreen('detail')}
                  onCompleteBooking={() => setCurrentScreen('home')}
                />
              )}
            </div>

            {['home', 'search', 'detail', 'booking'].includes(currentScreen) && (
              <BottomNavBar
                activeTab={activeNavTab}
                onSelectTab={handleSelectNavTab}
              />
            )}

            {isMobileFrame && <div className="mobile-home-indicator" />}
          </div>
        )}

        {/* BÀI 3: HƯỚNG DẪN CẤU HÌNH ARDUINO IDE & ESP32 & DRIVER */}
        {activeAssignment === 'bai3' && (
          <div className="bai3-container">
            <Esp32Guide />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
