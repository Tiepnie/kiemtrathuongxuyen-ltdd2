import React, { useState } from 'react';
import { 
  MapPin, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Music, 
  Cpu, 
  Trophy, 
  Utensils, 
  Palette, 
  Calendar, 
  Bookmark, 
  Star, 
  Share2, 
  ChevronRight,
  Gift
} from 'lucide-react';
import { MOCK_CATEGORIES, MOCK_EVENTS } from '../../data/mockEvents';

const ICON_MAP = {
  Sparkles,
  Music,
  Cpu,
  Trophy,
  Utensils,
  Palette
};

const HomeScreen = ({ onSelectEvent, onOpenSearch, onBookTicket }) => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [savedEvents, setSavedEvents] = useState([1, 2]);

  const toggleSave = (e, id) => {
    e.stopPropagation();
    if (savedEvents.includes(id)) {
      setSavedEvents(savedEvents.filter((item) => item !== id));
    } else {
      setSavedEvents([...savedEvents, id]);
    }
  };

  const filteredEvents = selectedCat === 'all' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter((ev) => ev.category === selectedCat);

  const featuredEvent = MOCK_EVENTS.find((ev) => ev.isFeatured) || MOCK_EVENTS[0];

  return (
    <div className="screen-container home-screen">
      {/* 1. Header Bar */}
      <header className="home-header">
        <div className="location-selector">
          <span className="location-label">Vị Trí Của Bạn</span>
          <div className="location-value">
            <MapPin size={16} className="pin-icon" />
            <span>TP. Hồ Chí Minh, Việt Nam</span>
          </div>
        </div>

        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
      </header>

      {/* 2. Search & Filter Bar */}
      <div className="home-search-bar" onClick={onOpenSearch}>
        <Search size={18} className="search-icon" />
        <span className="search-placeholder">Tìm kiếm sự kiện, ca sĩ, địa điểm...</span>
        <div className="filter-pill-btn">
          <SlidersHorizontal size={14} /> Lọc
        </div>
      </div>

      {/* 3. Category Horizontal Pills */}
      <div className="categories-scroll-wrapper">
        {MOCK_CATEGORIES.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || Sparkles;
          const isActive = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              className={`category-pill ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              <IconComp size={15} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Featured Banner Carousel Card */}
      <div className="home-section">
        <div className="section-header-row">
          <h3 className="section-title">🔥 Sự Kiện Nổi Bật</h3>
          <span className="see-all-link">Xem thêm</span>
        </div>

        <div className="featured-card" onClick={() => onSelectEvent(featuredEvent)}>
          <img src={featuredEvent.image} alt={featuredEvent.title} className="featured-img" />
          <div className="featured-overlay">
            <div className="featured-top-tags">
              <span className="date-badge">
                <Calendar size={12} /> {featuredEvent.date}
              </span>
              <button
                className={`bookmark-btn ${savedEvents.includes(featuredEvent.id) ? 'saved' : ''}`}
                onClick={(e) => toggleSave(e, featuredEvent.id)}
              >
                <Bookmark size={16} />
              </button>
            </div>

            <div className="featured-bottom-info">
              <h4 className="featured-event-title">{featuredEvent.title}</h4>
              <p className="featured-location">
                <MapPin size={13} /> {featuredEvent.location}
              </p>
              
              <div className="featured-footer-row">
                <div className="attendee-avatars">
                  {featuredEvent.attendees.map((img, i) => (
                    <img key={i} src={img} alt="attendee" className="avatar-img" />
                  ))}
                  <span className="attendee-count">+{featuredEvent.attendeeCount} đã tham gia</span>
                </div>
                <span className="price-tag">{featuredEvent.priceFormatted}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Promo Banner: Invite Friends */}
      <div className="invite-promo-card">
        <div className="promo-text">
          <span className="promo-badge"><Gift size={12} /> Ưu Đãi Đặc Biệt</span>
          <h4>Mời bạn bè, nhận ngay 100K!</h4>
          <p>Tặng ngay voucher giảm giá cho lượt đặt vé tiếp theo.</p>
        </div>
        <button className="promo-btn">Mời Ngay</button>
      </div>

      {/* 6. Upcoming & Nearby Events List */}
      <div className="home-section">
        <div className="section-header-row">
          <h3 className="section-title">Sự Kiện Sắp Diễn Ra ({filteredEvents.length})</h3>
          <span className="see-all-link">Xem tất cả</span>
        </div>

        <div className="events-vertical-list">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="event-horizontal-card"
              onClick={() => onSelectEvent(event)}
            >
              <div className="card-thumb-wrapper">
                <img src={event.image} alt={event.title} className="card-thumb" />
                <span className="card-date-chip">{event.date.split(',')[0]}</span>
              </div>

              <div className="card-details">
                <div className="card-header-line">
                  <span className="card-rating">
                    <Star size={12} className="star-icon" /> {event.rating} ({event.reviewsCount})
                  </span>
                  <button
                    className={`bookmark-btn-sm ${savedEvents.includes(event.id) ? 'saved' : ''}`}
                    onClick={(e) => toggleSave(e, event.id)}
                  >
                    <Bookmark size={14} />
                  </button>
                </div>

                <h4 className="card-title">{event.title}</h4>
                <p className="card-venue">
                  <MapPin size={12} /> {event.location}
                </p>

                <div className="card-footer-line">
                  <span className="card-price">{event.priceFormatted}</span>
                  <button
                    className="card-book-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookTicket(event);
                    }}
                  >
                    Đặt vé <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
