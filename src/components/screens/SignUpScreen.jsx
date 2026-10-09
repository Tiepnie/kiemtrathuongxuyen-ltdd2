import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';

const SignUpScreen = ({ onGoOTP, onGoSignIn }) => {
  const [fullName, setFullName] = useState('Nguyễn Văn A');
  const [email, setEmail] = useState('it23m@student.edu.vn');
  const [password, setPassword] = useState('12345678');
  const [confirmPassword, setConfirmPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Vui lòng điền đầy đủ tất cả thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      setError('Mật khẩu nhập lại không trùng khớp!');
      return;
    }
    if (!agreeTerms) {
      setError('Bạn cần đồng ý với Điều khoản dịch vụ để tiếp tục.');
      return;
    }
    setError('');
    onGoOTP(email);
  };

  return (
    <div className="screen-container auth-screen">
      <div className="auth-header">
        <h2 className="auth-title">Đăng Ký Tài Khoản</h2>
        <p className="auth-subtitle">Tạo tài khoản mới để tham gia các sự kiện hấp dẫn nhất.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="auth-alert-error">{error}</div>}

        <div className="input-field-group">
          <label className="input-label">Họ và Tên</label>
          <div className="input-wrapper">
            <User className="input-icon" size={18} />
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

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

        <div className="input-field-group">
          <label className="input-label">Mật khẩu</label>
          <div className="input-wrapper">
            <Lock className="input-icon" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <label className="input-label">Xác nhận Mật khẩu</label>
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

        <label className="remember-checkbox terms-checkbox">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <span>Tôi đồng ý với <strong className="highlight-link">Điều khoản & Chính sách EventHub</strong></span>
        </label>

        <button type="submit" className="btn-primary auth-submit-btn">
          TẠO TÀI KHOẢN <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-footer-link">
        Đã có tài khoản?{' '}
        <button className="link-text-btn" onClick={onGoSignIn}>
          Đăng nhập ngay
        </button>
      </div>
    </div>
  );
};

export default SignUpScreen;
