import React, { useEffect, useState } from 'react';
import { Calendar, Sparkles, ArrowRight, Compass } from 'lucide-react';

const SplashScreen = ({ onNext }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="screen-container splash-screen">
      <div className="splash-bg-decor circle-1"></div>
      <div className="splash-bg-decor circle-2"></div>
      
      <div className="splash-content">
        <div className="logo-badge-glow">
          <div className="logo-icon-wrapper">
            <Calendar size={48} className="splash-logo-icon" />
          </div>
        </div>

        <h1 className="splash-title">
          Event<span className="splash-title-highlight">Hub</span>
        </h1>
        
        <p className="splash-subtitle">
          Khám phá sự kiện xung quanh bạn & trải nghiệm cuộc sống đỉnh cao
        </p>

        <div className="splash-features-mini">
          <div className="mini-chip">
            <Compass size={14} /> 5,000+ Sự kiện
          </div>
          <div className="mini-chip">
            <Sparkles size={14} /> Vé QR tiện lợi
          </div>
        </div>

        {/* Progress Bar */}
        <div className="splash-progress-wrapper">
          <div className="splash-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <button className="btn-primary splash-btn" onClick={onNext}>
          Khám Phá Ngay <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="splash-footer-text">
        Powered by EventHub UI Kit | LTDD2 IT23M
      </div>
    </div>
  );
};

export default SplashScreen;
