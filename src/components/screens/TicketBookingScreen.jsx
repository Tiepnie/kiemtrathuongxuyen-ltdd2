import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Ticket, 
  Minus, 
  Plus, 
  CreditCard, 
  Smartphone, 
  Building2, 
  CheckCircle2, 
  QrCode, 
  Download, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';

const TICKET_TYPES = [
  { id: 'standard', name: 'Vé Tiêu Chuẩn (Standard)', priceMultiplier: 1.0, desc: 'Bao gồm lối vào tự do & 1 phần nước ngọt' },
  { id: 'vip', name: 'Vé VIP Lounge (VIP)', priceMultiplier: 1.6, desc: 'Ghế ngồi gần sân khấu, 2 đồ uống & quà lưu niệm' },
];

const PAYMENT_METHODS = [
  { id: 'momo', name: 'Ví MoMo', icon: Smartphone, badge: 'Khuyên dùng' },
  { id: 'card', name: 'Thẻ Visa / MasterCard', icon: CreditCard },
  { id: 'banking', name: 'Chuyển Khoản Ngân Hàng', icon: Building2 },
];

const TicketBookingScreen = ({ event, onBack, onCompleteBooking }) => {
  const [ticketType, setTicketType] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [showETicketModal, setShowETicketModal] = useState(false);

  if (!event) return null;

  const basePrice = event.price || 490000;
  const currentTicketObj = TICKET_TYPES.find((t) => t.id === ticketType);
  const singlePrice = basePrice * currentTicketObj.priceMultiplier;
  const subtotal = singlePrice * quantity;
  const serviceFee = 25000;
  const total = subtotal + serviceFee;

  const handlePay = () => {
    setShowETicketModal(true);
  };

  return (
    <div className="screen-container booking-screen">
      {/* Top Header Bar */}
      <div className="screen-top-bar">
        <button className="icon-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>
        <span className="top-bar-title">Đặt Vé & Thanh Toán</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="booking-body">
        {/* Event Summary Mini Card */}
        <div className="booking-event-mini">
          <img src={event.image} alt={event.title} className="mini-event-img" />
          <div className="mini-event-info">
            <h4 className="mini-event-title">{event.title}</h4>
            <p className="mini-event-date"><Calendar size={12} /> {event.date}</p>
            <p className="mini-event-location"><MapPin size={12} /> {event.location}</p>
          </div>
        </div>

        {/* 1. Ticket Type Selector */}
        <div className="booking-section">
          <h3 className="booking-section-title"><Ticket size={18} /> Chọn Hạng Vé</h3>
          <div className="ticket-types-list">
            {TICKET_TYPES.map((t) => {
              const isSelected = ticketType === t.id;
              const price = basePrice * t.priceMultiplier;
              return (
                <div
                  key={t.id}
                  className={`ticket-type-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setTicketType(t.id)}
                >
                  <div className="ticket-type-header">
                    <span className="ticket-type-name">{t.name}</span>
                    <span className="ticket-type-price">
                      {(price / 1000).toLocaleString('vi-VN')}K VNĐ
                    </span>
                  </div>
                  <p className="ticket-type-desc">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Quantity Counter */}
        <div className="booking-section">
          <div className="quantity-row">
            <span className="quantity-label">Số Lượng Vé</span>
            <div className="quantity-controls">
              <button
                className="qty-btn"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Minus size={16} />
              </button>
              <span className="qty-number">{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Payment Method */}
        <div className="booking-section">
          <h3 className="booking-section-title"><CreditCard size={18} /> Phương Thức Thanh Toán</h3>
          <div className="payment-methods-list">
            {PAYMENT_METHODS.map((method) => {
              const IconComp = method.icon;
              const isSelected = paymentMethod === method.id;
              return (
                <div
                  key={method.id}
                  className={`payment-method-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className="pm-left">
                    <IconComp size={20} className="pm-icon" />
                    <span className="pm-name">{method.name}</span>
                  </div>
                  {method.badge && <span className="pm-badge">{method.badge}</span>}
                  <div className={`radio-dot ${isSelected ? 'active' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Order Summary */}
        <div className="booking-section summary-box">
          <h3 className="booking-section-title">Chi Tiết Hóa Đơn</h3>
          <div className="summary-row">
            <span>Tiền vé ({quantity}x)</span>
            <span>{subtotal.toLocaleString('vi-VN')} VNĐ</span>
          </div>
          <div className="summary-row">
            <span>Phí dịch vụ xuất vé</span>
            <span>{serviceFee.toLocaleString('vi-VN')} VNĐ</span>
          </div>
          <div className="summary-row total-row">
            <span>Tổng Thanh Toán</span>
            <span className="total-amount">{total.toLocaleString('vi-VN')} VNĐ</span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Checkout Button */}
      <div className="booking-sticky-bar">
        <div className="total-preview">
          <span className="label">Tổng cộng</span>
          <span className="price">{total.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <button className="btn-primary pay-now-btn" onClick={handlePay}>
          XÁC NHẬN THANH TOÁN <ArrowRight size={18} />
        </button>
      </div>

      {/* E-Ticket Confirmation Modal (QR Code) */}
      {showETicketModal && (
        <div className="modal-overlay">
          <div className="eticket-modal-card">
            <div className="eticket-header">
              <div className="success-badge">
                <CheckCircle2 size={32} className="check-icon" />
              </div>
              <h3>Đặt Vé Thành Công!</h3>
              <p>Vé điện tử của bạn đã được xuất thành công.</p>
            </div>

            {/* E-Ticket Card Display */}
            <div className="eticket-card">
              <div className="eticket-top">
                <span className="eticket-badge-tag">EVENTHUB E-TICKET</span>
                <h4 className="eticket-event-name">{event.title}</h4>
                <p className="eticket-detail"><Calendar size={13} /> {event.date} • {event.time}</p>
                <p className="eticket-detail"><MapPin size={13} /> {event.location}</p>
              </div>

              <div className="eticket-dashed-divider">
                <div className="notch left" />
                <div className="notch right" />
              </div>

              <div className="eticket-bottom">
                <div className="qr-box-wrapper">
                  {/* Simulated QR Code */}
                  <div className="qr-code-graphic">
                    <QrCode size={120} className="qr-icon" />
                  </div>
                  <span className="qr-code-id">MÃ VÉ: #EVH-2026-IT23M</span>
                </div>

                <div className="eticket-info-grid">
                  <div>
                    <span className="label">Loại vé</span>
                    <strong className="val">{currentTicketObj.name.split(' ')[0]}</strong>
                  </div>
                  <div>
                    <span className="label">Số lượng</span>
                    <strong className="val">{quantity} Vé</strong>
                  </div>
                  <div>
                    <span className="label">Chủ vé</span>
                    <strong className="val">Sinh Viên IT23M</strong>
                  </div>
                  <div>
                    <span className="label">Tổng tiền</span>
                    <strong className="val">{(total / 1000).toLocaleString('vi-VN')}K</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="eticket-actions">
              <button className="btn-secondary download-btn">
                <Download size={16} /> Tải Vé QR
              </button>
              <button
                className="btn-primary done-btn"
                onClick={() => {
                  setShowETicketModal(false);
                  onCompleteBooking();
                }}
              >
                Về Trang Chủ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBookingScreen;
