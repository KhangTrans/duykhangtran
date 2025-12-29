# 📸 Cách Thay Đổi Hình Ảnh Profile

## Hình Ảnh Hiện Tại

Hiện tại website đang dùng một hình ảnh placeholder được tạo tự động.

## Cách Thay Thế Bằng Ảnh Của Bạn

### Bước 1: Chuẩn Bị Hình Ảnh

1. **Chọn một bức ảnh đẹp của bạn**

   - Nên là ảnh chân dung (portrait)
   - Chất lượng cao, rõ nét
   - Nền đơn giản hoặc có thể xóa phông
   - Kích thước đề xuất: tối thiểu 500x500px (hình vuông tốt nhất)

2. **Đặt tên file:**
   - Đặt tên là `profile.png` hoặc `profile.jpg`

### Bước 2: Thêm Vào Project

**Cách 1: Thay thế trực tiếp**

```bash
# Copy ảnh của bạn vào thư mục public
# Đặt tên là profile.png (hoặc profile.jpg)
```

1. Mở thư mục `d:\personal\profolio\public\`
2. Thay thế file `profile.png` bằng ảnh của bạn
3. Đảm bảo tên file là `profile.png` hoặc `profile.jpg`

**Cách 2: Nếu dùng file .jpg**

Nếu ảnh của bạn là `.jpg`, cập nhật trong `src/sections/Hero.jsx`:

```javascript
// Tìm dòng này (khoảng dòng 179):
<ProfileImage
  src="/profile.png" // <-- Đổi thành "/profile.jpg"
  alt="Trần Duy Khang"
/>
```

### Bước 3: Làm Mới Trang

1. Sau khi thay ảnh, reload trang web (F5)
2. Nếu ảnh không đổi, thử:
   - Xóa cache: Ctrl + Shift + R (Windows)
   - Hoặc hard reload trong DevTools

## Tips cho Ảnh Đẹp

### Chỉnh Sửa Ảnh (Nếu Cần)

1. **Xóa phông (Remove background):**

   - Dùng [remove.bg](https://www.remove.bg/) - miễn phí
   - Hoặc Photoshop, GIMP

2. **Crop ảnh thành hình vuông:**

   - Dùng Paint, Photoshop, hoặc online tools
   - Kích thước đề xuất: 800x800px

3. **Tối ưu kích thước file:**
   - Nén ảnh để web load nhanh hơn
   - Dùng [TinyPNG](https://tinypng.com/)
   - Kích thước file đề xuất: < 500KB

### Style Ảnh Profile

Ảnh của bạn sẽ được hiển thị với:

- ✅ Border gradient (xanh-tím)
- ✅ Hình tròn
- ✅ Shadow effect
- ✅ Hover animation (phóng to nhẹ khi hover)
- ✅ Kích thước: 300px (desktop), 200px (mobile)

## Vị Trí Hình Ảnh trong Layout

```
┌─────────────────────────────────────┐
│         HERO SECTION                │
│                                     │
│  ┌──────┐    Hello, I'm            │
│  │      │    Trần Duy Khang         │
│  │ ẢNH  │    Software Engineering   │
│  │      │    Student | Frontend     │
│  └──────┘    Developer              │
│   (Trái)                            │
│              [View Projects]        │
│              [Contact Me]           │
└─────────────────────────────────────┘
```

## Troubleshooting

### Ảnh không hiển thị?

1. **Kiểm tra đường dẫn:**

   - File phải nằm trong `public/profile.png`
   - Tên file phải chính xác (phân biệt hoa thường)

2. **Kiểm tra định dạng:**

   - Chỉ dùng `.png`, `.jpg`, hoặc `.jpeg`
   - Không dùng `.webp` hoặc `.svg`

3. **Clear cache:**
   - Ctrl + Shift + R (Windows)
   - Cmd + Shift + R (Mac)

### Ảnh bị vỡ hoặc méo?

- Đảm bảo ảnh gốc có kích thước tối thiểu 500x500px
- Nên dùng ảnh hình vuông (1:1 ratio)

### Muốn thay đổi kích thước ảnh?

Mở `src/sections/Hero.jsx` và tìm:

```javascript
const ProfileImage = styled.img`
  width: 300px; // <-- Đổi kích thước desktop
  height: 300px; // <-- Đổi kích thước desktop

  @media (max-width: 768px) {
    width: 200px; // <-- Đổi kích thước mobile
    height: 200px; // <-- Đổi kích thước mobile
  }
`;
```

---

**Lưu ý:** Sau khi thay ảnh, website sẽ tự động reload (hot reload). Nếu không, nhấn F5 để làm mới trang.

Chúc bạn có một portfolio đẹp! ✨
