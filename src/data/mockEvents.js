export const MOCK_CATEGORIES = [
  { id: 'all', name: 'Tất cả', icon: 'Sparkles' },
  { id: 'music', name: 'Âm Nhạc', icon: 'Music' },
  { id: 'tech', name: 'Công Nghệ', icon: 'Cpu' },
  { id: 'sports', name: 'Thể Thao', icon: 'Trophy' },
  { id: 'food', name: 'Ẩm Thực', icon: 'Utensils' },
  { id: 'art', name: 'Nghệ Thuật', icon: 'Palette' },
];

export const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Đại Nhạc Hội EDM SoundWave 2026',
    category: 'music',
    date: '15 THÁNG 10, 2026',
    time: '19:00 - 23:00',
    location: 'Sân Vận Động Quân Khu 7, TP.HCM',
    address: '202 Hoàng Văn Thụ, Phường 9, Phú Nhuận',
    price: 490000,
    priceFormatted: '490.000 VNĐ',
    originalPrice: 650000,
    rating: 4.9,
    reviewsCount: 328,
    organizer: {
      name: 'SoundWave Entertainment',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Đơn vị tổ chức sự kiện âm nhạc',
      followers: '45.2K'
    },
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    description: 'Sự kiện âm nhạc điện tử hoành tráng nhất năm với sự tham gia của các DJ hàng đầu quốc tế và Việt Nam. Hệ thống ánh sáng Laser 3D tiên tiến và hệ thống âm thanh chuẩn quốc tế.',
    attendees: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    ],
    attendeeCount: 1420,
    isFeatured: true,
    isPopular: true
  },
  {
    id: 2,
    title: 'Hội Thảo AI & Mobile App Summit 2026',
    category: 'tech',
    date: '22 THÁNG 10, 2026',
    time: '08:30 - 17:00',
    location: 'Trung Tâm Hội Nghị GEM Center, Quận 1',
    address: '08 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, TP.HCM',
    price: 290000,
    priceFormatted: '290.000 VNĐ',
    originalPrice: 400000,
    rating: 4.8,
    reviewsCount: 195,
    organizer: {
      name: 'Vietnam Tech Community',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      role: 'Cộng đồng Công nghệ Việt Nam',
      followers: '88.9K'
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Khám phá những xu hướng công nghệ mới nhất về Trí Tuệ Nhân Tạo, Lập Trình Di Động (React Native, Flutter) và Điện Toán Đám Mây từ các Diễn giả hàng đầu Google & OpenAI.',
    attendees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80'
    ],
    attendeeCount: 850,
    isFeatured: true,
    isPopular: false
  },
  {
    id: 3,
    title: 'Giải Chạy Marathon Quốc Tế City Run',
    category: 'sports',
    date: '05 THÁNG 11, 2026',
    time: '05:00 - 11:00',
    location: 'Công Viên Vinhomes Central Park, Bình Thạnh',
    address: '208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh',
    price: 350000,
    priceFormatted: '350.000 VNĐ',
    originalPrice: 450000,
    rating: 4.7,
    reviewsCount: 412,
    organizer: {
      name: 'City Marathon Association',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      role: 'Tổ chức Thể thao Đường phố',
      followers: '23.1K'
    },
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80',
    description: 'Giải chạy việt dã rèn luyện sức khỏe quy mô 5.000 vận động viên với 3 cự ly: 5km, 10km và 21km. Nhận huy chương độc quyền và áo phông sự kiện cao cấp.',
    attendees: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'
    ],
    attendeeCount: 2300,
    isFeatured: false,
    isPopular: true
  },
  {
    id: 4,
    title: 'Triển Lãm Nghệ Thuật Sáng Tạo Digital Art',
    category: 'art',
    date: '18 THÁNG 11, 2026',
    time: '09:00 - 21:00',
    location: 'Bảo Tàng Mỹ Thuật TP.HCM, Quận 1',
    address: '97A Phó Đức Chính, Phường Nguyễn Thái Bình, Quận 1',
    price: 150000,
    priceFormatted: '150.000 VNĐ',
    originalPrice: 200000,
    rating: 4.9,
    reviewsCount: 140,
    organizer: {
      name: 'ArtVerse Studio',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      role: 'Không gian Triển lãm số',
      followers: '12.4K'
    },
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80',
    description: 'Không gian nghệ thuật đa giác quan tương tác sống động, đắm chìm trong ánh sáng, màu sắc số hóa và những kiệt tác hội họa hiện đại.',
    attendees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
    ],
    attendeeCount: 540,
    isFeatured: false,
    isPopular: false
  },
  {
    id: 5,
    title: 'Lễ Hội Ẩm Thực Đường Phố Street Food Fest',
    category: 'food',
    date: '28 THÁNG 11, 2026',
    time: '16:00 - 22:30',
    location: 'Phố Đi Bộ Nguyễn Huệ, Quận 1',
    address: 'Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1',
    price: 0,
    priceFormatted: 'MIỄN PHÍ',
    originalPrice: 0,
    rating: 4.8,
    reviewsCount: 620,
    organizer: {
      name: 'Saigon Foodies Club',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      role: 'Cộng đồng Ẩm thực Sài Gòn',
      followers: '67.8K'
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Quy tụ hơn 100 gian hàng ẩm thực đặc sắc từ Á sang Âu cùng các màn trình diễn nấu ăn trực tiếp của các MasterChef đỉnh cao.',
    attendees: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80'
    ],
    attendeeCount: 3100,
    isFeatured: true,
    isPopular: true
  }
];
