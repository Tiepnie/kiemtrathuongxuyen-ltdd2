import React, { useState } from 'react';
import { Search, SlidersHorizontal, X, Calendar, MapPin, Star, ChevronLeft, Filter, Check } from 'lucide-react';
import { MOCK_EVENTS, MOCK_CATEGORIES } from '../../data/mockEvents';

const SearchFilterScreen = ({ onSelectEvent, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedDate, setSelectedDate] = useState('today');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Filter events based on search query, category, price
  const filteredList = MOCK_EVENTS.filter((ev) => {
    const matchesSearch = ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ev.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'all' || ev.category === selectedCat;
    const matchesPrice = ev.price <= maxPrice;
    return matchesSearch && matchesCat && matchesPrice;
  });

  return (
    <div className="screen-container search-screen">
      {/* Top Search Bar */}
      <div className="search-header-bar">
        <button className="icon-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>

        <div className="search-input-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Tìm theo tên sự kiện, ca sĩ, địa điểm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoFocus
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <button
          className={`filter-icon-btn ${showFilterModal ? 'active' : ''}`}
          onClick={() => setShowFilterModal(!showFilterModal)}
        >
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* Quick Filter Categories Row */}
      <div className="search-categories-row">
        {MOCK_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`search-cat-chip ${selectedCat === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCat(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Filter Modal / Bottom Sheet */}
      {showFilterModal && (
        <div className="filter-modal-overlay" onClick={() => setShowFilterModal(false)}>
          <div className="filter-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <h3><Filter size={18} /> Bộ Lọc Tìm Kiếm</h3>
              <button className="close-sheet-btn" onClick={() => setShowFilterModal(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="sheet-body">
              {/* Date Filter */}
              <div className="filter-group">
                <label className="filter-group-title">Thời Gian Organise</label>
                <div className="filter-pills-grid">
                  {['today', 'tomorrow', 'this-week', 'this-month'].map((d) => (
                    <button
                      key={d}
                      className={`filter-pill ${selectedDate === d ? 'active' : ''}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      {d === 'today' && 'Hôm Nay'}
                      {d === 'tomorrow' && 'Ngày Mai'}
                      {d === 'this-week' && 'Tuần Này'}
                      {d === 'this-month' && 'Tháng Này'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="filter-group">
                <div className="filter-group-title-row">
                  <span className="filter-group-title">Mức Giá Vé Tối Đa</span>
                  <span className="price-value-badge">
                    {maxPrice === 0 ? 'Miễn Phí' : `${(maxPrice / 1000).toLocaleString('vi-VN')}K VNĐ`}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1000000}
                  step={50000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="price-slider"
                />
                <div className="slider-labels">
                  <span>0 VNĐ</span>
                  <span>500K</span>
                  <span>1.000.000 VNĐ</span>
                </div>
              </div>
            </div>

            <div className="sheet-footer">
              <button
                className="reset-filter-btn"
                onClick={() => {
                  setSelectedCat('all');
                  setSelectedDate('today');
                  setMaxPrice(1000000);
                  setSearchTerm('');
                }}
              >
                Đặt Lại
              </button>
              <button
                className="btn-primary apply-filter-btn"
                onClick={() => setShowFilterModal(false)}
              >
                Áp Dụng ({filteredList.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="results-count-bar">
        <span>Tìm thấy <strong>{filteredList.length}</strong> sự kiện phù hợp</span>
      </div>

      {/* Search Results List */}
      <div className="search-results-list">
        {filteredList.length > 0 ? (
          filteredList.map((event) => (
            <div
              key={event.id}
              className="search-result-card"
              onClick={() => onSelectEvent(event)}
            >
              <img src={event.image} alt={event.title} className="result-img" />
              <div className="result-info">
                <span className="result-date">
                  <Calendar size={12} /> {event.date}
                </span>
                <h4 className="result-title">{event.title}</h4>
                <p className="result-location">
                  <MapPin size={12} /> {event.location}
                </p>
                <div className="result-footer">
                  <span className="result-price">{event.priceFormatted}</span>
                  <span className="result-rating">
                    <Star size={12} /> {event.rating}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-search-state">
            <Search size={48} className="empty-icon" />
            <h3>Không Tìm Thấy Sự Kiện</h3>
            <p>Thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc của bạn.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterScreen;
