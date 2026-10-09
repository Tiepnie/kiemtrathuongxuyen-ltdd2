import React, { useState } from 'react';
import { Compass, Ticket, Users, ArrowRight, ChevronLeft } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: 'Khám Phá Sự Kiện Xung Quanh',
    description: 'Dễ dàng tìm kiếm hàng ngàn đại nhạc hội, hội thảo công nghệ, giải chạy và nghệ thuật gần bạn nhất.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    badge: 'Tìm kiếm thông minh'
  },
  {
    id: 2,
    title: 'Đặt Vé & Nhận Vé QR Siêu Nhanh',
    description: 'Thanh toán trực tuyến bảo mật, lưu giữ vé điện tử có mã QR ngay trên ứng dụng mà không lo mất vé.',
    icon: Ticket,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    badge: 'Vé điện tử 1-Touch'
  },
  {
    id: 3,
    title: 'Kết Nối & Chia Sẻ Cùng Bè Bạn',
    description: 'Mời bạn bè cùng tham gia, theo dõi lịch trình sự kiện của cộng đồng và tạo nên những kỷ niệm đáng nhớ.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    badge: 'Cộng đồng năng động'
  }
];

const OnboardingScreen = ({ onFinish, onSignIn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = SLIDES[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="screen-container onboarding-screen">
      <div className="onboarding-header">
        {currentSlide > 0 ? (
          <button className="icon-btn" onClick={handlePrev}>
            <ChevronLeft size={20} />
          </button>
        ) : <div />}
        <button className="skip-btn" onClick={onFinish}>Bỏ qua</button>
      </div>

      <div className="onboarding-image-card">
        <img src={slide.image} alt={slide.title} className="onboarding-img" />
        <div className="onboarding-badge">
          <Icon size={14} /> {slide.badge}
        </div>
      </div>

      <div className="onboarding-body">
        <h2 className="onboarding-title">{slide.title}</h2>
        <p className="onboarding-desc">{slide.description}</p>
      </div>

      <div className="onboarding-footer">
        <div className="indicators">
          {SLIDES.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>

        <button className="btn-primary onboarding-next-btn" onClick={handleNext}>
          {currentSlide === SLIDES.length - 1 ? 'Bắt Đầu Ngay' : 'Tiếp Theo'} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
