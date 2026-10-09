import React from 'react';
import { BookOpen } from 'lucide-react';

/**
 * 2. Section Component:
 * - Sử dụng Object Destructuring ngay trong phần tham số props: ({ title, description, children, badge })
 * - Hiển thị title và description theo đúng yêu cầu đề bài.
 */
const Section = ({ title, description, children, badge = "Nội dung" }) => {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="section-title-wrapper">
          <div className="section-icon-box">
            <BookOpen size={20} />
          </div>
          <div>
            <span className="section-badge">{badge}</span>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
      </div>
      
      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

      {children && (
        <div className="section-content">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
