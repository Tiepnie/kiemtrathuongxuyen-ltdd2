import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Globe, Share2, Apple } from 'lucide-react';

const SignInScreen = ({ onSignInSuccess, onGoSignUp, onForgotPassword }) => {
  const [email, setEmail] = useState('student@it23m.edu.vn');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ Email và Mật khẩu!');
      return;
    }
    setError('');
    onSignInSuccess({ email, name: 'Sinh Viên IT23M' });
  };

  return (
    <div className="screen-container auth-screen">
      <div className="auth-header">
        <h2 className="auth-title">Đăng Nhập</h2>
        <p className="auth-subtitle">Chào mừng quay trở lại EventHub! Nhập thông tin để tiếp tục.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
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

        <div className="form-options-row">
          <label className="remember-checkbox">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Ghi nhớ đăng nhập</span>
          </label>
          <button
            type="button"
            className="forgot-link-btn"
            onClick={onForgotPassword}
          >
            Quên mật khẩu?
          </button>
        </div>

        <button type="submit" className="btn-primary auth-submit-btn">
          ĐĂNG NHẬP <ArrowRight size={18} />
        </button>
      </form>

      <div className="divider-row">
        <span>Hoặc đăng nhập bằng</span>
      </div>

      <div className="social-buttons-grid">
        <button className="social-btn google">
          <Globe size={18} /> Google
        </button>
        <button className="social-btn facebook">
          <Share2 size={18} /> Facebook
        </button>
        <button className="social-btn apple">
          <Apple size={18} /> Apple
        </button>
      </div>

      <div className="auth-footer-link">
        Chưa có tài khoản?{' '}
        <button className="link-text-btn" onClick={onGoSignUp}>
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default SignInScreen;
