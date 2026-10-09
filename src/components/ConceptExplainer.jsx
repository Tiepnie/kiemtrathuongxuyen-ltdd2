import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Layers, 
  RefreshCw, 
  Cpu, 
  Box, 
  Brackets, 
  Sliders, 
  CheckCircle2, 
  Play, 
  Clock,
  ArrowRight,
  Zap,
  Info
} from 'lucide-react';
import Section from './Section';

const conceptsList = [
  {
    id: 'useState',
    name: 'useState',
    category: 'React Hook',
    shortDesc: 'Hook quản lý trạng thái (state) nội bộ trong Function Component.',
    codeSnippet: `// Array Destructuring từ giá trị trả về của useState
const [count, setCount] = useState(0);

// Hàm cập nhật state
const increment = () => {
  setCount(prev => prev + 1);
};`
  },
  {
    id: 'useEffect',
    name: 'useEffect',
    category: 'React Hook',
    shortDesc: 'Hook xử lý Side Effects (gọi API, timer, lắng nghe sự kiện DOM...).',
    codeSnippet: `useEffect(() => {
  console.log("Component mounted hoặc count thay đổi:", count);

  // Cleanup function (chạy khi unmount hoặc trước re-render)
  return () => {
    console.log("Cleanup effect cũ...");
  };
}, [count]); // Dependency array`
  },
  {
    id: 'arrowFunction',
    name: 'Arrow Function',
    category: 'ES6 Feature',
    shortDesc: 'Cú pháp hàm mũi tên ngắn gọn (() => {}), ràng buộc ngữ cảnh this tự động.',
    codeSnippet: `// Cú pháp ngắn gọn ES6 Arrow Function
const calculateTotal = (price, tax) => price * (1 + tax);

// Viết gọn 1 dòng (implicit return)
const getGreeting = name => \`Xin chào \${name}!\`;`
  },
  {
    id: 'FunctionComponent',
    name: 'Function Component',
    category: 'React Core',
    shortDesc: 'Component React được định nghĩa là 1 hàm JavaScript trả về JSX.',
    codeSnippet: `// Function Component sử dụng Arrow Function
const WelcomeCard = ({ studentName }) => {
  return (
    <div className="card">
      <h3>Chào mừng {studentName}</h3>
    </div>
  );
};`
  },
  {
    id: 'props',
    name: 'Props',
    category: 'React Core',
    shortDesc: 'Dữ liệu truyền từ Component cha xuống Component con (Read-only).',
    codeSnippet: `// Component Cha truyền props
<Section 
  title="Tiêu đề bài học" 
  description="Mô tả chi tiết nội dung" 
/>

// Component Con nhận props
function Section(props) {
  return <h2>{props.title}</h2>;
}`
  },
  {
    id: 'state',
    name: 'State',
    category: 'React Core',
    shortDesc: 'Dữ liệu nội bộ có thể thay đổi của Component. Khi state thay đổi, UI re-render.',
    codeSnippet: `// State là bất biến (immutable), cần dùng setter function để cập nhật
const [student, setStudent] = useState({ name: 'Nguyễn Văn A', class: 'IT23M' });

const updateClass = () => {
  setStudent(prev => ({ ...prev, class: 'LTDD2' }));
};`
  },
  {
    id: 'object',
    name: 'Object',
    category: 'JavaScript Core',
    shortDesc: 'Kiểu dữ liệu đối tượng chứa thông tin dạng cặp key - value.',
    codeSnippet: `const course = {
  code: "LTDD2",
  title: "Lập trình di động 2",
  classGroup: "IT23M",
  studentCount: 45
};

console.log(course.code); // Access key 'code'`
  },
  {
    id: 'arrayDestructuring',
    name: 'Array Destructuring',
    category: 'ES6 Feature',
    shortDesc: 'Cú pháp phân rã mảng theo vị trí chỉ mục (index).',
    codeSnippet: `const fruits = ['Táo', 'Cam', 'Xoài'];

// Phân rã mảng lấy các phần tử theo thứ tự
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // 'Táo'
console.log(secondFruit); // 'Cam'`
  },
  {
    id: 'objectDestructuring',
    name: 'Object Destructuring',
    category: 'ES6 Feature',
    shortDesc: 'Cú pháp phân rã đối tượng theo tên thuộc tính (key).',
    codeSnippet: `const config = { theme: 'dark', language: 'vi', version: '2.0' };

// Phân rã object theo tên key
const { theme, language } = config;

console.log(theme);    // 'dark'
console.log(language); // 'vi'`
  }
];

const ConceptExplainer = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // 1. useState & state demo: counter
  const [counter, setCounter] = useState(0);

  // 7. object state demo
  const [studentInfo, setStudentInfo] = useState({
    name: "Sinh viên IT23M",
    course: "Lập trình di động 2",
    score: 9.5,
    status: "Đang học"
  });

  // 2. useEffect demo: timer & execution log
  const [secondsActive, setSecondsActive] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ⚡ useEffect triggered! Counter value: ${counter}`, ...prev.slice(0, 4)]);
  }, [counter]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsActive(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 8. array destructuring live example
  const colorsList = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
  // Demonstration of Array Destructuring
  const [primaryColor, secondaryColor, accentColor] = colorsList;

  // 9. object destructuring live example
  // Demonstration of Object Destructuring
  const { name: sName, course: sCourse, score: sScore } = studentInfo;

  return (
    <div className="explainer-container">
      {/* Dynamic Demo Control Card */}
      <div className="live-demo-card">
        <div className="demo-header">
          <Zap className="demo-icon" size={24} />
          <div>
            <h3 className="demo-title">Khu Vực Demo Tương Tác (Live Sandbox)</h3>
            <p className="demo-sub">Thử nghiệm thực tế 9 khái niệm hoạt động realtime trong React</p>
          </div>
        </div>

        <div className="demo-grid">
          {/* Demo 1: useState & State & useEffect */}
          <div className="demo-box">
            <div className="demo-box-header">
              <Sliders size={18} />
              <h4>1. useState & State & useEffect Demo</h4>
            </div>
            <div className="demo-box-body">
              <div className="counter-display">
                <span className="counter-label">Giá trị Counter:</span>
                <span className="counter-value">{counter}</span>
              </div>
              <div className="button-group">
                <button className="btn btn-primary" onClick={() => setCounter(c => c + 1)}>
                  + Tăng (+1)
                </button>
                <button className="btn btn-secondary" onClick={() => setCounter(c => c - 1)}>
                  - Giảm (-1)
                </button>
                <button className="btn btn-outline" onClick={() => setCounter(0)}>
                  <RefreshCw size={14} /> Reset
                </button>
              </div>

              <div className="log-panel">
                <div className="log-title"><Clock size={14} /> useEffect Log Tracker:</div>
                <div className="log-items">
                  <div className="log-item highlight-timer">⏱️ Thời gian online: {secondsActive} giây</div>
                  {logs.map((log, index) => (
                    <div key={index} className="log-item">{log}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Demo 2: Object State & Destructuring */}
          <div className="demo-box">
            <div className="demo-box-header">
              <Brackets size={18} />
              <h4>2. Object & Destructuring Demo</h4>
            </div>
            <div className="demo-box-body">
              <div className="object-inspector">
                <p><strong>Dữ liệu Object:</strong></p>
                <pre className="code-box-inline">
                  {JSON.stringify(studentInfo, null, 2)}
                </pre>
              </div>

              <div className="destructure-result">
                <p><strong>Object Destructuring Result:</strong></p>
                <ul className="destruct-list">
                  <li><code>sName</code> = "{sName}"</li>
                  <li><code>sCourse</code> = "{sCourse}"</li>
                  <li><code>sScore</code> = {sScore}</li>
                </ul>
              </div>

              <div className="destructure-result">
                <p><strong>Array Destructuring Result:</strong></p>
                <div className="color-pills">
                  <span className="color-pill" style={{ background: primaryColor }}>primary: {primaryColor}</span>
                  <span className="color-pill" style={{ background: secondaryColor }}>secondary: {secondaryColor}</span>
                  <span className="color-pill" style={{ background: accentColor }}>accent: {accentColor}</span>
                </div>
              </div>

              <button 
                className="btn btn-accent"
                onClick={() => setStudentInfo(prev => ({ ...prev, score: parseFloat((prev.score + 0.1 > 10 ? 8 : prev.score + 0.1).toFixed(1)) }))}
              >
                Cập nhật Score (State Object Immutability)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="concept-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Tất cả (9/9 Khái niệm)
        </button>
        {conceptsList.map(c => (
          <button
            key={c.id}
            className={`tab-btn ${activeTab === c.id ? 'active' : ''}`}
            onClick={() => setActiveTab(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Detailed Concept Cards List */}
      <div className="concepts-grid">
        {conceptsList
          .filter(c => activeTab === 'all' || activeTab === c.id)
          .map((item, idx) => (
            <div key={item.id} className="concept-card">
              <div className="card-top">
                <span className="concept-index">0{idx + 1}</span>
                <span className="concept-category">{item.category}</span>
              </div>
              <h3 className="concept-title">{item.name}</h3>
              <p className="concept-desc">{item.shortDesc}</p>
              
              <div className="code-snippet-box">
                <div className="code-header">
                  <Code2 size={14} /> Cú pháp & Ví dụ:
                </div>
                <pre><code>{item.codeSnippet}</code></pre>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConceptExplainer;
