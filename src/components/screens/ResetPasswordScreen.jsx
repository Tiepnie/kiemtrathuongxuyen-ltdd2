import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, KeyRound, CheckCircle, ArrowRight, ChevronLeft } from 'lucide-react';

const ResetPasswordScreen = ({ onBackToLogin }) => {
  const [step, setStep] = useState(1); // 1: Send Mail, 2: New Password, 3: Success
  const [email, setEmail] = useState('student@it23m.edu.vn');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSendLink = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Vui lòng nhập Email đã đăng ký!');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError('Vui lòng điền mật khẩu mới!');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu nhập lại không trùng khớp!');
      return;
    }
    setError('');
    setStep(3);
  };

  return (
    <div className="screen-container reset-screen">
      <div className="screen-top-bar">
        <button className="icon-btn" onClick={onBackToLogin}>
          <ChevronLeft size={20} />
        </button>
        <span className="top-bar-title">Đặt Lại Mật Khẩu</span>
        <div style={{ width: 36 }} />
      </div>

      {step === 1 && (
        <div className="reset-body">
          <div className="reset-icon-header">
            <KeyRound size={36} className="reset-icon" />
          </div>
          
          <h2 className="auth-title">Quên Mật Khẩu?</h2>
          <p className="auth-subtitle">
            Nhập email đăng ký của bạn. Chúng tôi sẽ gửi hướng dẫn khôi phục mật khẩu.
          </p>

          <form onSubmit={handleSendLink} className="auth-form">
            {error && <div className="auth-alert-error">{error}</div>}

            <div className="input-field-group">
              <label className="input-label">Địa chỉ Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  placeholder="abc@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn">
              GỬI YÊU CẦU KHÔI PHỤC <ArrowRight size={18} />
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="reset-body">
          <h2 className="auth-title">Tạo Mật Khẩu Mới</h2>
          <p className="auth-subtitle">
            Mật khẩu mới của bạn phải khác với các mật khẩu đã sử dụng trước đó.
          </p>

          <form onSubmit={handleResetPassword} className="auth-form">
            {error && <div className="auth-alert-error">{error}</div>}

            <div className="input-field-group">
              <label className="input-label">Mật khẩu mới</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input"
                />
                <button
                  type="button"
                  className="input-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="input-field-group">
              <label className="input-label">Xác nhận Mật khẩu mới</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn">
              CẬP NHẬT MẬT KHẨU <ArrowRight size={18} />
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="reset-success-view">
          <div className="success-icon-badge">
            <CheckCircle size={48} className="success-check-icon" />
          </div>
          <h2 className="auth-title">Thành Công!</h2>
          <p className="auth-subtitle">
            Mật khẩu của bạn đã được cập nhật thành công. Vui lòng đăng nhập lại.
          </p>

          <button className="btn-primary auth-submit-btn" onClick={onBackToLogin}>
            ĐĂNG NHẬP NGAY <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordScreen;
