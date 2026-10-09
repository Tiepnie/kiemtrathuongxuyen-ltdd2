import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Bookmark, 
  Share2, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Users, 
  Check, 
  ArrowRight,
  Navigation
} from 'lucide-react';

const EventDetailScreen = ({ event, onBack, onBookTicket }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [readMore, setReadMore] = useState(false);

  if (!event) return null;

  return (
    <div className="screen-container detail-screen">
      {/* Hero Image Header */}
      <div className="detail-hero-wrapper">
        <img src={event.image} alt={event.title} className="detail-hero-img" />
        <div className="hero-gradient-overlay" />

        {/* Top Floating Buttons */}
        <div className="detail-top-bar">
          <button className="icon-btn-blur" onClick={onBack}>
            <ChevronLeft size={22} />
          </button>
          <div className="top-actions">
            <button 
              className={`icon-btn-blur ${isSaved ? 'active-saved' : ''}`}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Bookmark size={20} />
            </button>
            <button className="icon-btn-blur">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Content Body */}
      <div className="detail-body-container">
        {/* Title & Category */}
        <div className="detail-title-block">
          <span className="category-tag">{event.category.toUpperCase()}</span>
          <h2 className="detail-event-title">{event.title}</h2>
        </div>

        {/* Date & Time Card */}
        <div className="detail-info-card">
          <div className="info-icon-badge date">
            <Calendar size={22} />
          </div>
          <div className="info-card-text">
            <h4>{event.date}</h4>
            <p><Clock size={13} /> {event.time}</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="detail-info-card">
          <div className="info-icon-badge location">
            <MapPin size={22} />
          </div>
          <div className="info-card-text">
            <h4>{event.location}</h4>
            <p>{event.address}</p>
          </div>
        </div>

        {/* Organizer Section */}
        <div className="organizer-card">
          <img src={event.organizer.avatar} alt={event.organizer.name} className="organizer-avatar" />
          <div className="organizer-info">
            <h4>{event.organizer.name}</h4>
            <p>{event.organizer.role} • {event.organizer.followers} Người theo dõi</p>
          </div>
          <button
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? <Check size={14} /> : '+ Theo dõi'}
          </button>
        </div>

        {/* Attendees Stack */}
        <div className="attendees-section">
          <div className="attendees-avatars-row">
            {event.attendees.map((img, idx) => (
              <img key={idx} src={img} alt="attendee" className="stack-avatar" />
            ))}
          </div>
          <div className="attendees-text">
            <strong>+{event.attendeeCount} người</strong> đã đăng ký tham gia sự kiện này.
          </div>
        </div>

        {/* Description Section */}
        <div className="detail-section">
          <h3 className="detail-subtitle">Về Sự Kiện Này</h3>
          <p className={`detail-description-text ${readMore ? 'expanded' : ''}`}>
            {event.description} Môn học Lập Trình Di Động 2 (LTDD2) giúp sinh viên thiết kế ứng dụng giao diện di động hiện đại từ bản thiết kế Figma chuẩn EventHub. Trải nghiệm sống động với luồng đặt vé và mã QR chân thực.
          </p>
          <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Thu gọn' : 'Xem thêm'}
          </button>
        </div>

        {/* Map Preview Mockup */}
        <div className="detail-section">
          <h3 className="detail-subtitle">Vị Trí Trên Bản Đồ</h3>
          <div className="mini-map-card">
            <div className="map-placeholder">
              <MapPin size={32} className="map-pin-anim" />
              <span>{event.location}</span>
            </div>
            <button className="directions-btn">
              <Navigation size={14} /> Dẫn Đường
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="detail-sticky-bar">
        <div className="price-display">
          <span className="price-label">Giá Vé</span>
          <span className="price-amount">{event.priceFormatted}</span>
        </div>
        <button className="btn-primary detail-book-btn" onClick={() => onBookTicket(event)}>
          ĐẶT VÉ NGAY <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default EventDetailScreen;
