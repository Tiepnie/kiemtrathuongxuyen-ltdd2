import React from 'react';
import { Home, Compass, Ticket, User } from 'lucide-react';

const BottomNavBar = ({ activeTab, onSelectTab }) => {
  const NAV_ITEMS = [
    { id: 'home', label: 'Khám Phá', icon: Home },
    { id: 'search', label: 'Tìm Kiếm', icon: Compass },
    { id: 'tickets', label: 'Vé Của Tôi', icon: Ticket, badge: '1' },
    { id: 'profile', label: 'Tài Khoản', icon: User },
  ];

  return (
    <nav className="bottom-nav-bar">
      {NAV_ITEMS.map((item) => {
        const IconComp = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            className={`nav-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(item.id)}
          >
            <div className="tab-icon-wrapper">
              <IconComp size={20} />
              {item.badge && <span className="tab-badge">{item.badge}</span>}
            </div>
            <span className="tab-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
