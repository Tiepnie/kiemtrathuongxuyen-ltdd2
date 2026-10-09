import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ArrowRight, RotateCcw, ChevronLeft } from 'lucide-react';

const VerificationScreen = ({ email = 'it23m@student.edu.vn', onVerifySuccess, onBack }) => {
  const [code, setCode] = useState(['5', '6', '8', '9']);
  const [timer, setTimer] = useState(50);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');
  const inputsRef = useRef([]);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto focus next input
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length < 4) {
      setError('Vui lòng nhập đủ 4 chữ số mã OTP!');
      return;
    }
    setError('');
    onVerifySuccess();
  };

  const handleResend = () => {
    setCode(['', '', '', '']);
    setTimer(60);
    setCanResend(false);
    setError('');
  };

  return (
    <div className="screen-container otp-screen">
      <div className="screen-top-bar">
        <button className="icon-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>
        <span className="top-bar-title">Xác Thực OTP</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="otp-icon-header">
        <div className="otp-icon-glow">
          <ShieldCheck size={40} className="otp-shield-icon" />
        </div>
      </div>

      <div className="otp-text-content">
        <h2 className="otp-title">Mã Xác Thực OTP</h2>
        <p className="otp-subtitle">
          Chúng tôi đã gửi mã 4 chữ số tới Email <br />
          <strong className="highlight-text">{email}</strong>
        </p>
      </div>

      {error && <div className="auth-alert-error">{error}</div>}

      <div className="otp-inputs-row">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-digit-input"
          />
        ))}
      </div>

      <div className="otp-resend-wrapper">
        {canResend ? (
          <button className="resend-btn" onClick={handleResend}>
            <RotateCcw size={16} /> Gửi lại mã xác thực
          </button>
        ) : (
          <span className="timer-text">
            Gửi lại mã sau: <strong>00:{timer < 10 ? `0${timer}` : timer}</strong>
          </span>
        )}
      </div>

      <button className="btn-primary otp-submit-btn" onClick={handleVerify}>
        XÁC NHẬN & TIẾP TỤC <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default VerificationScreen;
