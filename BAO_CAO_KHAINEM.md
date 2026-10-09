# BÁO CÁO THỰC HÀNH & GIẢI THÍCH CHI TIẾT CÁC KHÁI NIỆM REACT / ES6
**Môn học:** Lập trình di động 2 (LTDD2)  
**Lớp:** IT23M  

---

## I. DANH SÁCH CÁC COMPONENT ĐÃ XÂY DỰNG

### 1. Component `Header`
- **Tệp nguồn:** [`src/components/Header.jsx`](file:///d:/LTTD2/src/components/Header.jsx)
- **Yêu cầu:** Hiển thị Text **"Chào mừng IT23M đến với LTDD2"**
- **Cú pháp sử dụng:** Function Component & Arrow Function.
- **Mã nguồn:**
```jsx
import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-badge">
        <GraduationCap size={18} />
        <span>LẬP TRÌNH DI ĐỘNG 2 (LTDD2)</span>
      </div>
      
      <h1 className="header-title">
        Chào mừng <span className="highlight-text">IT23M</span> đến với <span className="gradient-text">LTDD2</span>
      </h1>
      
      <p className="header-subtitle">
        <Sparkles size={16} /> Ứng dụng Demo tích hợp đầy đủ kiến thức React Fundamentals & ES6 Core Concepts
      </p>
    </header>
  );
};

export default Header;
```

---

### 2. Component `Section`
- **Tệp nguồn:** [`src/components/Section.jsx`](file:///d:/LTTD2/src/components/Section.jsx)
- **Yêu cầu:** Hiển thị `title` và `description` truyền từ ngoài vào.
- **Cú pháp sử dụng:** Function Component + Object Destructuring props trực tiếp trong tham số `({ title, description, children, badge })`.
- **Mã nguồn:**
```jsx
import React from 'react';
import { BookOpen } from 'lucide-react';

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
```

---

## II. GIẢI THÍCH CHI TIẾT 9 KHÁI NIỆM

### 1. `useState` (React Hook)
- **Định nghĩa:** Là một React Hook giúp tạo và quản lý trạng thái nội bộ (State) trong một Function Component.
- **Cú pháp & Cơ chế:**
  `useState` nhận vào **giá trị khởi tạo** và trả về một mảng chứa 2 phần tử:
  `[giá trị_state_hiện_tại, hàm_cập_nhật_state]`.
- **Ví dụ minh họa:**
  ```jsx
  // Sử dụng Array Destructuring để lấy giá trị state và hàm setter
  const [count, setCount] = useState(0);

  // Khi gọi setCount, React sẽ xếp lịch re-render lại component
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  ```

---

### 2. `useEffect` (React Hook)
- **Định nghĩa:** Khai báo các **Side Effects** (tác vụ phụ bên ngoài chu trình render thuần túy) như: gọi API fetch data, lắng nghe sự kiện DOM, khởi tạo Interval/Timer, thao tác với localStorage,...
- **Cú pháp & Phụ thuộc (Dependencies):**
  - `useEffect(callback, [])`: Chạy 1 lần duy nhất sau khi Component Mount.
  - `useEffect(callback, [dep1, dep2])`: Chạy lại mỗi khi `dep1` hoặc `dep2` thay đổi giá trị.
  - `useEffect(callback)`: Chạy sau MỌI lần component render.
- **Ví dụ minh họa:**
  ```jsx
  useEffect(() => {
    console.log("Component mounted hoặc count thay đổi:", count);

    // Cleanup Function (Chạy trước khi unmount hoặc trước re-effect mới)
    return () => {
      console.log("Dọn dẹp effect cũ...");
    };
  }, [count]);
  ```

---

### 3. `arrowFunction` (Cú pháp Hàm Mũi Tên ES6)
- **Định nghĩa:** Cú pháp định nghĩa hàm ngắn gọn được giới thiệu từ ES6 với ký hiệu `=>`.
- **Đặc điểm cốt lõi:**
  1. Ngắn gọn, loại bỏ từ khóa `function`.
  2. Nếu chỉ có 1 câu lệnh return, có thể bỏ từ khóa `return` và dấu `{}` (Implicit Return).
  3. Không tự tạo ngữ cảnh `this` riêng, mà tự động ràng buộc `this` (Lexical Scope) từ phạm vi bao quanh.
- **Ví dụ minh họa:**
  ```jsx
  // Cú pháp truyền thống:
  function sum(a, b) { return a + b; }

  // Arrow Function tương đương:
  const sum = (a, b) => a + b;
  ```

---

### 4. `FunctionComponent` (Component Hàm)
- **Định nghĩa:** Thành phần giao diện trong React được khai báo dưới dạng một hàm JavaScript/ES6 nhận vào `props` và trả về cấu trúc giao diện JSX.
- **Ưu điểm:**
  - Cú pháp gọn gàng, dễ bảo trì, dễ thử nghiệm.
  - Kết hợp mạnh mẽ với React Hooks để sử dụng state và lifecycle.
  - Là tiêu chuẩn thiết kế UI hiện đại trong cả React Web và React Native.

---

### 5. `props` (Properties)
- **Định nghĩa:** Là đối tượng chứa các dữ liệu/tham số được truyền **từ Component Cha xuống Component Con**.
- **Đặc điểm:**
  - **Read-Only (Chỉ đọc):** Component con KHÔNG ĐƯỢC phép thay đổi giá trị của `props` trực tiếp.
  - Giúp tái sử dụng linh hoạt 1 component với các nội dung khác nhau.
- **Ví dụ minh họa:**
  ```jsx
  // Component Cha truyền props title & description:
  <Section title="Bài Học LTDD2" description="Nội dung bài học giữa kỳ" />

  // Component Con nhận props:
  const Section = (props) => <h2>{props.title}</h2>;
  ```

---

### 6. `state` (Trạng thái nội bộ)
- **Định nghĩa:** Là tập hợp dữ liệu nội bộ được quản lý trực tiếp bên trong một Component.
- **Đặc điểm:**
  - Khác với `props` (chỉ đọc), `state` có thể **thay đổi được (Mutable)** thông qua hàm cập nhật `setState`.
  - Khi `state` thay đổi, React sẽ tự động kích hoạt **re-render** lại giao diện để phản ánh dữ liệu mới.

---

### 7. `object` (Đối tượng JavaScript)
- **Định nghĩa:** Kiểu dữ liệu phức hợp dùng để lưu trữ các thông tin theo dạng cặp **Key - Value** (Khoá - Giá trị).
- **Ứng dụng trong React:** Nhóm các dữ liệu có liên quan lại với nhau (như thông tin Sinh viên, Đối tượng State phức hợp,...).
- **Ví dụ minh họa:**
  ```javascript
  const student = {
    id: "IT23M01",
    fullName: "Nguyễn Văn A",
    class: "IT23M",
    course: "LTDD2"
  };

  console.log(student.fullName); // "Nguyễn Văn A"
  ```

---

### 8. `array Destructuring` (Phân Rã Mảng ES6)
- **Định nghĩa:** Cú pháp ES6 cho phép bóc tách (trích xuất) các phần tử trong mảng ra thành các biến độc lập dựa vào **chỉ mục (index / vị trí phần tử)**.
- **Ví dụ minh họa:**
  ```javascript
  const colors = ['Đỏ', 'Xanh', 'Vàng'];

  // Phân rã mảng theo vị trí:
  const [firstColor, secondColor] = colors;

  console.log(firstColor);  // 'Đỏ'
  console.log(secondColor); // 'Xanh'

  // Ứng dụng phổ biến nhất trong React useState:
  const [value, setValue] = useState(0);
  ```

---

### 9. `Object Destructuring` (Phân Rã Đối Tượng ES6)
- **Định nghĩa:** Cú pháp ES6 cho phép bóc tách (trích xuất) các thuộc tính của đối tượng ra các biến riêng biệt dựa vào **Tên Thuộc Tính (Key Name)**.
- **Ví dụ minh họa:**
  ```javascript
  const person = { name: "IT23M", role: "Sinh viên", subject: "LTDD2" };

  // Phân rã đối tượng theo tên key:
  const { name, subject } = person;

  console.log(name);    // "IT23M"
  console.log(subject); // "LTDD2"

  // Ứng dụng phân rã trực tiếp khi nhận props trong Component:
  const Section = ({ title, description }) => (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  ```

---

## III. HƯỚNG DẪN CHẠY DỰ ÁN

1. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```

2. Khởi chạy máy chủ phát triển (Dev Server):
   ```bash
   npm run dev
   ```

3. Mở trình duyệt truy cập: `http://localhost:5173`
