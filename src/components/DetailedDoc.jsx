import React from 'react';
import { 
  CheckCircle, 
  HelpCircle, 
  BookOpen, 
  Code, 
  FileText, 
  Zap, 
  Check, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

const explanations = [
  {
    key: 'useState',
    title: '1. useState (React Hook)',
    subtitle: 'Quản lý trạng thái nội bộ của Function Component',
    definition: '`useState` là một React Hook cho phép khai báo và quản lý các trạng thái (state) biến đổi bên trong một Function Component.',
    howItWorks: 'Hàm `useState` nhận vào giá trị khởi tạo (initial state) và trả về một mảng chứa 2 phần tử: [giá trị state hiện tại, hàm cập nhật state].',
    codeExample: `// Khai báo state count khởi tạo bằng 0
const [count, setCount] = useState(0);

// Cập nhật giá trị count
const handleIncrease = () => {
  setCount(prevCount => prevCount + 1);
};`,
    keyPoints: [
      'Sử dụng Array Destructuring để lấy ra `state` và `setState`.',
      'Khi hàm `setState` được gọi, React sẽ xếp lịch re-render lại component với state mới.',
      'State nên được xử lý theo nguyên tắc bất biến (Immutability).'
    ]
  },
  {
    key: 'useEffect',
    title: '2. useEffect (React Hook)',
    subtitle: 'Xử lý các Tác vụ phụ (Side Effects)',
    definition: '`useEffect` là React Hook dùng để thực hiện các tác vụ side effect như: gọi API, tương tác trực tiếp với DOM, thiết lập Timer/Interval, hoặc lắng nghe sự kiện.',
    howItWorks: 'Nhận vào 2 tham số: (1) Hàm callback thực hiện effect & cleanup function (nếu có), (2) Mảng phụ thuộc (Dependency Array).',
    codeExample: `useEffect(() => {
  // Thực thi effect khi component được mount hoặc dependency thay đổi
  const timer = setInterval(() => console.log('Tick'), 1000);

  // Cleanup Function (Chạy trước khi re-effect hoặc khi component unmount)
  return () => clearInterval(timer);
}, []); // Mảng rỗng [] chỉ chạy 1 lần duy nhất khi Mount`,
    keyPoints: [
      '`[]` (Mảng rỗng): Chỉ chạy 1 lần sau lần render đầu tiên (ComponentDidMount).',
      '`[value]`: Chạy lại mỗi khi `value` thay đổi.',
      'Không có dependency array: Chạy sau MỌI lần render.'
    ]
  },
  {
    key: 'arrowFunction',
    title: '3. Arrow Function (ES6)',
    subtitle: 'Cú pháp hàm mũi tên ngắn gọn',
    definition: 'Cú pháp định nghĩa hàm ES6 sử dụng ký hiệu `=>` giúp mã nguồn ngắn gọn, dễ đọc và tự động kế thừa ngữ cảnh `this` từ phạm vi bên ngoài.',
    howItWorks: 'Thay vì dùng từ khóa `function`, ta dùng `(args) => { return result; }`. Nếu body chỉ có 1 dòng return, có thể bỏ dấu `{}` và từ khóa `return`.',
    codeExample: `// Cú pháp truyền thống:
function add(a, b) {
  return a + b;
}

// Arrow Function tương đương:
const add = (a, b) => a + b;

// Arrow Function cho Component React:
const Header = () => (
  <header><h1>Chào mừng IT23M</h1></header>
);`,
    keyPoints: [
      'Không có từ khóa `this` riêng (lexical this binding).',
      'Cú pháp cực kỳ gọn gàng khi viết callback hoặc inline function trong React JSX.',
      'Được sử dụng phổ biến nhất để định nghĩa Function Component.'
    ]
  },
  {
    key: 'FunctionComponent',
    title: '4. Function Component (React Component)',
    subtitle: 'Thành phần giao diện viết dưới dạng Hàm',
    definition: 'Function Component là một hàm JavaScript/React nhận vào tham số `props` và trả về các phần tử JSX mô tả giao diện.',
    howItWorks: 'Là tiêu chuẩn hiện đại của React (thay thế Class Component), kết hợp với Hooks để xây dựng UI linh hoạt và hiệu năng cao.',
    codeExample: `// Function Component nhận props và trả về JSX
const Section = ({ title, description }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};`,
    keyPoints: [
      'Gọn nhẹ, dễ kiểm thử và tái sử dụng.',
      'Kết hợp với React Hooks để quản lý state và lifecycle dễ dàng.',
      'Là chuẩn phát triển React và React Native hiện nay.'
    ]
  },
  {
    key: 'props',
    title: '5. Props (Properties)',
    subtitle: 'Truyền dữ liệu từ Component cha xuống Component con',
    definition: '`props` là một đối tượng JavaScript chứa các giá trị/thuộc tính được truyền từ Component cha xuống Component con.',
    howItWorks: 'Component con tiếp nhận `props` làm tham số đầu vào. Dữ liệu `props` là Read-only (chỉ đọc) và không thể bị sửa đổi bởi component con.',
    codeExample: `// 1. Component Cha truyền props:
<Section title="Bài Học LTDD2" description="Giới thiệu về React Native" />

// 2. Component Con tiếp nhận props:
const Section = (props) => {
  return <div>{props.title} - {props.description}</div>;
};`,
    keyPoints: [
      'Giúp tái sử dụng Component với nhiều dữ liệu khác nhau.',
      'Tuân theo luồng dữ liệu 1 chiều (Unidirectional Data Flow) từ trên xuống.',
      'Không bao giờ biến đổi (mutate) props trực tiếp trong component con.'
    ]
  },
  {
    key: 'state',
    title: '6. State',
    subtitle: 'Dữ liệu nội bộ tự quản lý của Component',
    definition: '`State` là một đối tượng chứa dữ liệu nội bộ của một Component, có thể thay đổi trong suốt vòng đời hoạt động của component đó.',
    howItWorks: 'Khi `State` thay đổi thông qua hàm cập nhật state, React sẽ kích hoạt quá trình Re-render để cập nhật lại giao diện tự động.',
    codeExample: `// Quản lý State đối tượng người dùng
const [user, setUser] = useState({ name: 'IT23M', score: 10 });

// Cập nhật state an toàn theo tính chất bất biến
const updateScore = () => {
  setUser(prevUser => ({
    ...prevUser,
    score: prevUser.score + 1
  }));
};`,
    keyPoints: [
      'State là private (nội bộ) của component khai báo nó.',
      'Mỗi lần state cập nhật, giao diện liên quan sẽ được tự động vẽ lại.',
      'Khác với Props: State có thể thay đổi (Mutable), Props là Read-only.'
    ]
  },
  {
    key: 'object',
    title: '7. Object (Đối tượng JavaScript)',
    subtitle: 'Kiểu dữ liệu phức hợp dạng key-value',
    definition: 'Object là tập hợp các thuộc tính (key) và giá trị (value) dùng để mô tả một đối tượng dữ liệu cụ thể trong JavaScript.',
    howItWorks: 'Được sử dụng rất phổ biến trong React để nhóm các giá trị thông tin liên quan với nhau (ví dụ thông tin Sinh viên, Cấu hình ứng dụng, Props...).',
    codeExample: `// Định nghĩa một Object trong JS
const student = {
  id: "IT23M01",
  fullName: "Lê Văn B",
  subject: "Lập trình di động 2",
  gpa: 3.8
};

// Truy cập thuộc tính
console.log(student.fullName); // "Lê Văn B"`,
    keyPoints: [
      'Lưu trữ dữ liệu cấu trúc linh hoạt dưới dạng thuộc tính.',
      'Trong React state, khi cập nhật object cần chú ý sao chép object cũ (`...prev`).'
    ]
  },
  {
    key: 'arrayDestructuring',
    title: '8. Array Destructuring (Phân rã mảng ES6)',
    subtitle: 'Trích xuất phần tử mảng ra các biến riêng biệt',
    definition: 'Cú pháp ES6 cho phép bóc tách (phân rã) các phần tử của một Mảng (Array) dựa trên vị trí chỉ mục (index) của chúng.',
    howItWorks: 'Dùng cú pháp `const [val1, val2] = myArray;` để gán giá trị theo thứ tự xuất hiện trong mảng.',
    codeExample: `// 1. Phân rã mảng cơ bản:
const info = ['IT23M', 'LTDD2', 2026];
const [className, subject, year] = info;

console.log(className); // "IT23M"
console.log(subject);   // "LTDD2"

// 2. Ứng dụng phổ biến nhất trong React (useState):
const [count, setCount] = useState(0);`,
    keyPoints: [
      'Gán biến theo vị trí chỉ mục (thứ tự phần tử trong mảng).',
      'Ứng dụng cốt lõi khi khai báo Hook `useState`.',
      'Có thể bỏ qua phần tử mong muốn bằng dấu phẩy: `const [, second] = array;`.'
    ]
  },
  {
    key: 'objectDestructuring',
    title: '9. Object Destructuring (Phân rã đối tượng ES6)',
    subtitle: 'Trích xuất thuộc tính object theo tên key',
    definition: 'Cú pháp ES6 cho phép bóc tách (phân rã) các thuộc tính của một Object dựa vào tên Tên thuộc tính (Key Name).',
    howItWorks: 'Dùng cú pháp `const { key1, key2 } = myObject;` giúp truy cập các giá trị mà không cần lặp lại tên đối tượng cha.',
    codeExample: `// 1. Phân rã Object thông thường:
const course = { code: 'LTDD2', room: 'A201', teacher: 'Thầy H' };
const { code, room } = course;

console.log(code); // "LTDD2"

// 2. Phân rã ngay tại tham số Props của Function Component:
const Section = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);`,
    keyPoints: [
      'Trích xuất giá trị dựa theo TÊN KEY của thuộc tính (không phụ thuộc thứ tự).',
      'Giúp mã nguồn vô cùng gọn gàng khi làm việc với `props` và `state`.',
      'Có thể đổi tên biến trích xuất: `const { code: courseCode } = course;`.'
    ]
  }
];

const DetailedDoc = () => {
  return (
    <div className="doc-wrapper">
      <div className="doc-header">
        <BookOpen className="doc-main-icon" size={28} />
        <div>
          <h2 className="doc-main-title">Giải Thích Chi Tiết 9 Khái Niệm Theo Yêu Cầu Đề Bài</h2>
          <p className="doc-main-sub">Phân tích rõ ràng định nghĩa, cơ chế hoạt động, cú pháp và ví dụ thực tế</p>
        </div>
      </div>

      <div className="doc-cards-list">
        {explanations.map((item) => (
          <div key={item.key} className="doc-item-card" id={`doc-${item.key}`}>
            <div className="doc-item-header">
              <span className="doc-badge">{item.key}</span>
              <div>
                <h3 className="doc-item-title">{item.title}</h3>
                <span className="doc-item-sub">{item.subtitle}</span>
              </div>
            </div>

            <div className="doc-body-grid">
              <div className="doc-text-col">
                <div className="doc-block">
                  <h4 className="block-label"><HelpCircle size={15} /> Định nghĩa:</h4>
                  <p className="block-content">{item.definition}</p>
                </div>

                <div className="doc-block">
                  <h4 className="block-label"><Zap size={15} /> Cơ chế hoạt động:</h4>
                  <p className="block-content">{item.howItWorks}</p>
                </div>

                <div className="doc-block">
                  <h4 className="block-label"><CheckCircle size={15} /> Điểm lưu ý quan trọng:</h4>
                  <ul className="key-points-list">
                    {item.keyPoints.map((pt, idx) => (
                      <li key={idx}><Check size={14} className="check-icon" /> {pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="doc-code-col">
                <div className="code-box">
                  <div className="code-box-header">
                    <Code size={14} /> Minh Họa Code Thực Tế
                  </div>
                  <pre><code>{item.codeExample}</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedDoc;
