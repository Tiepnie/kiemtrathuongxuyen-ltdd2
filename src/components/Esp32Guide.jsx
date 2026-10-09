import React, { useState } from 'react';
import { 
  Cpu, 
  Download, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  HardDrive, 
  Sliders, 
  Terminal, 
  AlertCircle, 
  Play, 
  HelpCircle,
  Layers,
  Sparkles,
  Zap,
  Usb
} from 'lucide-react';
import Section from './Section';

const ESP32_PACKAGE_URL = 'https://espressif.github.io/arduino-esp32/package_esp32_index.json';

const Esp32Guide = () => {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  
  // Interactive Simulator State
  const [simSearch, setSimSearch] = useState('esp32');
  const [simInstalled, setSimInstalled] = useState(false);
  const [simBoardSelected, setSimBoardSelected] = useState('ESP32 Dev Module');
  const [simComPort, setSimComPort] = useState('COM3 (CP2102)');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ESP32_PACKAGE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStepDone = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter((id) => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const progressPercent = Math.round((completedSteps.length / 5) * 100);

  return (
    <div className="esp32-guide-container">
      {/* 1. Header Banner */}
      <div className="esp32-hero-card">
        <div className="hero-icon-wrapper">
          <Cpu size={48} className="esp32-cpu-icon" />
        </div>
        <div className="hero-text-content">
          <span className="hero-badge-tag">LTDD2 • BÀI 3</span>
          <h1 className="hero-title">Hướng Dẫn Cấu Hình Arduino IDE & Board ESP32</h1>
          <p className="hero-subtitle">
            Cài đặt môi trường phát triển ứng dụng di động kết nối phần cứng ESP32 qua WiFi, Bluetooth và USB Serial.
          </p>
        </div>
      </div>

      {/* Progress Tracker Card */}
      <div className="progress-tracker-card">
        <div className="tracker-header">
          <span><CheckCircle2 size={16} /> Tiến Độ Hoàn Thành Bài 3: <strong>{progressPercent}%</strong></span>
          <span className="tracker-count">{completedSteps.length} / 5 Nhiệm vụ</span>
        </div>
        <div className="tracker-bar">
          <div className="tracker-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* SECTION 4.1: CÀI ĐẶT ARDUINO IDE */}
      <Section
        badge="Phần 4.1"
        title="4.1. Cài Đặt Phần Mềm Arduino IDE 2.x"
        description="Arduino IDE là Môi trường Phát triển Tích hợp mã nguồn mở dùng để viết code và nạp chương trình lên board ESP32."
      >
        <div className="guide-content-block">
          <div className="steps-checklist-list">
            <div className={`step-check-item ${completedSteps.includes(1) ? 'done' : ''}`}>
              <div className="step-checkbox" onClick={() => toggleStepDone(1)}>
                {completedSteps.includes(1) && <Check size={14} />}
              </div>
              <div className="step-item-info">
                <h4>1. Tải bản Arduino IDE (Khuyến nghị bản 2.x trở lên)</h4>
                <p>Truy cập trang chủ chính thức của Arduino để tải bộ cài phù hợp với hệ điều hành Windows/Mac.</p>
                <a 
                  href="https://www.arduino.cc/en/software" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-download-link"
                >
                  <Download size={14} /> Tải Arduino IDE 2.x (arduino.cc) <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={`step-check-item ${completedSteps.includes(2) ? 'done' : ''}`}>
              <div className="step-checkbox" onClick={() => toggleStepDone(2)}>
                {completedSteps.includes(2) && <Check size={14} />}
              </div>
              <div className="step-item-info">
                <h4>2. Tiến hành cài đặt như phần mềm thông thường</h4>
                <p>Chạy file installer vừa tải về $\rightarrow$ Nhấn <strong>Next $\rightarrow$ Next $\rightarrow$ Install</strong> $\rightarrow$ Nhấn Finish để hoàn tất.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4.2: THÊM BOARD ESP32 VÀO ARDUINO IDE */}
      <Section
        badge="Phần 4.2"
        title="4.2. Thêm Board ESP32 Vào Arduino IDE"
        description="Thêm gói mở rộng Espressif ESP32 Package URL vào Preferences để Arduino IDE nhận diện dòng chip ESP32."
      >
        <div className="guide-content-block">
          {/* Step 1 & 2: Package URL */}
          <div className="url-copy-box">
            <div className="url-box-header">
              <span className="url-title"><Zap size={15} /> URL Gói Board ESP32 (Additional Boards Manager URLs):</span>
              <button className="copy-btn" onClick={copyToClipboard}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Đã Sao Chép!' : 'Sao Chép URL'}
              </button>
            </div>
            <code className="url-code-text">{ESP32_PACKAGE_URL}</code>
          </div>

          <div className="timeline-steps-vertical">
            <div className="timeline-item">
              <div className="timeline-badge">Bước 1</div>
              <div className="timeline-body">
                <h4>Mở Cấu Hình Preferences / Settings</h4>
                <p>Mở Arduino IDE $\rightarrow$ Vào menu <strong>File $\rightarrow$ Preferences</strong> (Windows) hoặc <strong>Arduino IDE $\rightarrow$ Settings</strong> (macOS).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Bước 2</div>
              <div className="timeline-body">
                <h4>Dán Đường Dẫn Gói ESP32</h4>
                <p>Tìm ô <strong>"Additional Boards Manager URLs"</strong>, dán đường dẫn ở trên vào $\rightarrow$ Nhấn <strong>OK</strong>.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Bước 3</div>
              <div className="timeline-body">
                <h4>Mở Trình Quản Lý Board (Boards Manager)</h4>
                <p>Vào <strong>Tools $\rightarrow$ Board $\rightarrow$ Boards Manager</strong> (Hoặc bấm biểu tượng khối vuông <Layers size={14} className="inline-icon" /> ở thanh công cụ bên trái trên Arduino IDE 2.x).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Bước 4</div>
              <div className="timeline-body">
                <h4>Cài Đặt Gói "esp32 by Espressif Systems"</h4>
                <p>Gõ <code>esp32</code> vào ô tìm kiếm, chọn gói <strong>"esp32 by Espressif Systems"</strong> và nhấn <strong>Install</strong>. (Yêu cầu kết nối Internet vài phút).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge">Bước 5</div>
              <div className="timeline-body">
                <h4>Chọn Loại Board ESP32 Đang Sử Dụng</h4>
                <p>Vào <strong>Tools $\rightarrow$ Board $\rightarrow$ esp32 $\rightarrow$ chọn "ESP32 Dev Module"</strong> (dành cho board DevKit thông thường).</p>
                <div className="step-check-trigger">
                  <button 
                    className={`btn-check-done ${completedSteps.includes(3) ? 'active' : ''}`}
                    onClick={() => toggleStepDone(3)}
                  >
                    {completedSteps.includes(3) ? <CheckCircle2 size={16} /> : <Play size={16} />}
                    {completedSteps.includes(3) ? 'Đã Hoàn Thành Bước 4.2' : 'Đánh Dấu Hoàn Thành 4.2'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive IDE Simulator */}
          <div className="ide-simulator-card">
            <div className="sim-header">
              <Terminal size={16} />
              <span>Giả Lập Giao Diện Arduino IDE 2.x (Interactive Simulator)</span>
            </div>

            <div className="sim-body">
              <div className="sim-input-row">
                <label className="sim-label">Tìm kiếm Boards Manager:</label>
                <input
                  type="text"
                  value={simSearch}
                  onChange={(e) => setSimSearch(e.target.value)}
                  className="sim-input"
                  placeholder="Gõ esp32..."
                />
              </div>

              {simSearch.toLowerCase().includes('esp32') ? (
                <div className="sim-package-item">
                  <div className="package-info">
                    <strong className="package-title">esp32 by Espressif Systems</strong>
                    <span className="package-author">Tác giả: Espressif Systems | Phiên bản 3.0.x</span>
                    <p className="package-desc">Boards included in this package: ESP32 Dev Module, ESP32 WROVER Module, NodeMCU-32S...</p>
                  </div>
                  <button
                    className={`sim-install-btn ${simInstalled ? 'installed' : ''}`}
                    onClick={() => setSimInstalled(!simInstalled)}
                  >
                    {simInstalled ? '✓ Installed (Đã cài)' : 'Install (Cài đặt)'}
                  </button>
                </div>
              ) : (
                <div className="sim-empty-state">
                  Gõ "esp32" để giả lập cài đặt package Espressif.
                </div>
              )}

              <div className="sim-select-row">
                <div className="sim-select-group">
                  <label className="sim-label">Tools $\rightarrow$ Board:</label>
                  <select
                    value={simBoardSelected}
                    onChange={(e) => setSimBoardSelected(e.target.value)}
                    className="sim-select"
                  >
                    <option value="ESP32 Dev Module">ESP32 Dev Module (Khuyên Dùng)</option>
                    <option value="ESP32 WROVER Module">ESP32 WROVER Module</option>
                    <option value="Arduino Uno">Arduino Uno (Cũ)</option>
                  </select>
                </div>

                <div className="sim-select-group">
                  <label className="sim-label">Tools $\rightarrow$ Port:</label>
                  <select
                    value={simComPort}
                    onChange={(e) => setSimComPort(e.target.value)}
                    className="sim-select"
                  >
                    <option value="COM3 (CP2102)">COM3 - Silicon Labs CP210x</option>
                    <option value="COM4 (CH340)">COM4 - USB-SERIAL CH340</option>
                    <option value="COM1">COM1 - Standard Serial</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4.3: CÀI DRIVER USB-TO-SERIAL */}
      <Section
        badge="Phần 4.3"
        title="4.3. Cài Đặt Driver USB-to-Serial Cho Board ESP32"
        description="ESP32 giao tiếp với máy tính thông qua chip chuyển đổi USB-to-UART (phổ biến nhất là CP2102 hoặc CH340)."
      >
        <div className="guide-content-block">
          <div className="driver-chips-grid">
            {/* Driver CP2102 */}
            <div className="driver-card cp2102">
              <div className="driver-chip-header">
                <Usb size={24} className="chip-icon" />
                <div>
                  <h4 className="chip-title">Chip Silicon Labs CP2102</h4>
                  <span className="chip-vendor">Vendor: Silicon Labs (Silicon Laboratories)</span>
                </div>
              </div>

              <p className="driver-desc">
                Phổ biến trên các dòng board ESP32 DevKit v1 chất lượng cao. Tự động nhận diện trên Windows 11 hoặc cài qua file installer.
              </p>

              <div className="driver-install-instruction">
                <strong>Hướng dẫn cài:</strong>
                <ol>
                  <li>Tải file zip driver CP210x từ trang chủ Silicon Labs.</li>
                  <li>Giải nén file `.zip`.</li>
                  <li>Chạy file <code>CP210xVCPInstaller_x64.exe</code> với quyền Admin.</li>
                </ol>
              </div>

              <a
                href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"
                target="_blank"
                rel="noreferrer"
                className="driver-download-btn"
              >
                <Download size={14} /> Tải Driver CP2102 (Silicon Labs) <ExternalLink size={12} />
              </a>
            </div>

            {/* Driver CH340 */}
            <div className="driver-card ch340">
              <div className="driver-chip-header">
                <Usb size={24} className="chip-icon" />
                <div>
                  <h4 className="chip-title">Chip WCH CH340 / CH341</h4>
                  <span className="chip-vendor">Vendor: WCH (Jiangsu Qinheng)</span>
                </div>
              </div>

              <p className="driver-desc">
                Phổ biến trên các dòng board ESP32 giá rẻ. Cần cài đặt driver CH341SER để máy tính cấp cổng COM.
              </p>

              <div className="driver-install-instruction">
                <strong>Hướng dẫn cài:</strong>
                <ol>
                  <li>Tải bộ cài CH341SER driver cho Windows từ WCH.</li>
                  <li>Giải nén file vừa tải.</li>
                  <li>Chạy file <code>CH341SER.EXE</code> $\rightarrow$ Nhấn nút <strong>INSTALL</strong>.</li>
                </ol>
              </div>

              <a
                href="http://www.wch-ic.com/downloads/CH341SER_EXE.html"
                target="_blank"
                rel="noreferrer"
                className="driver-download-btn"
              >
                <Download size={14} /> Tải Driver CH340 (WCH CH341SER) <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Verification in Device Manager */}
          <div className="device-manager-verify-card">
            <div className="verify-header">
              <HardDrive size={20} className="verify-icon" />
              <h4>Cách Kiểm Tra Driver Đã Cài Đặt Đúng Chưa</h4>
            </div>

            <div className="verify-steps-list">
              <div className="verify-step">
                <span className="step-num">1</span>
                <span>Cắm board ESP32 vào cổng USB máy tính bằng cáp Micro-USB / Type-C truyền được dữ liệu.</span>
              </div>
              <div className="verify-step">
                <span className="step-num">2</span>
                <span>Nhấn phím <code>Windows + X</code> $\rightarrow$ Chọn <strong>Device Manager</strong> (Trình quản lý thiết bị).</span>
              </div>
              <div className="verify-step">
                <span className="step-num">3</span>
                <span>Tìm và mở mục <strong>"Ports (COM & LPT)"</strong>.</span>
              </div>
              <div className="verify-step">
                <span className="step-num">4</span>
                <span>
                  Nếu thấy dòng chữ <strong>Silicon Labs CP210x USB to UART Bridge (COMx)</strong> hoặc <strong>USB-SERIAL CH340 (COMx)</strong> không có chấm than vàng <AlertCircle size={14} className="inline-alert" /> là thành công!
                </span>
              </div>
            </div>

            <div className="step-check-trigger">
              <button 
                className={`btn-check-done ${completedSteps.includes(4) ? 'active' : ''}`}
                onClick={() => toggleStepDone(4)}
              >
                {completedSteps.includes(4) ? <CheckCircle2 size={16} /> : <Play size={16} />}
                {completedSteps.includes(4) ? 'Đã Nhận Cổng COM & Driver' : 'Xác Nhận Đã Hoàn Thành Cài Driver'}
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Esp32Guide;
