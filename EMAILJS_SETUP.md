# 📧 Hướng Dẫn Setup EmailJS Chi Tiết

## ⚠️ Lỗi Bạn Đang Gặp

Lỗi: **"Gmail_API: Request had insufficient authentication scopes"**

**Nguyên nhân:** Gmail yêu cầu thêm quyền nhưng EmailJS chưa được cấp đủ.

## ✅ GIẢI PHÁP ĐƠN GIẢN NHẤT

Thay vì dùng Gmail API (phức tạp), hãy làm theo các bước sau:

### Bước 1: Tạo Email Service

1. **Đăng nhập EmailJS:** https://dashboard.emailjs.com/
2. Vào **Email Services**
3. Click **Add New Service**
4. Chọn **Gmail**

### Bước 2: Kết Nối Gmail

**QUAN TRỌNG:** Khi connect Gmail, làm theo đúng thứ tự:

1. Click **Connect Account**
2. Chọn Gmail account của bạn (trank7866@gmail.com)
3. **Màn hình xin quyền:**

   - ✅ Chọn "Allow"
   - ✅ Tick vào ô **"See, edit, create, and delete all of your Gmail email"**
   - ⚠️ **QUAN TRỌNG:** Nếu không thấy option này, scroll xuống và click **"Show Advanced"** hoặc **"See all scopes"**

4. Click **Allow** / **Continue**

### Bước 3: Test Email Service

1. Sau khi connect thành công, bạn sẽ thấy:

   ```
   Connected as trank7866@gmail.com ✅
   ```

2. Tick vào ô **"Send test email to verify configuration"**

3. Click **"Create Service"**

4. Nếu test thành công → Service ID sẽ hiện (ví dụ: `service_z4o66ps`)

### Bước 4: Tạo Email Template

1. Vào **Email Templates**
2. Click **Create New Template**
3. Setup template:

#### Template Name:

```
Contact Form
```

#### Subject:

```
New Contact from {{from_name}}
```

#### Content (Body):

```html
<p>You have a new message from your portfolio:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr />
<p><em>This email was sent from your portfolio contact form.</em></p>
```

4. **Settings:**

   - **To Email:** `{{to_email}}` hoặc để trống (sẽ gửi đến email đã connect)
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`

5. Click **Save**

6. **Lấy Template ID** (ví dụ: `template_abc123`)

### Bước 5: Lấy Public Key

1. Click vào **Account** (góc trên phải)
2. Vào tab **General**
3. Tìm **Public Key** (User ID)
4. Copy key này (ví dụ: `BZvxL_12345abcde`)

---

## 🔧 Cập Nhật Code

### File: `src/sections/Contact.jsx`

Tìm và thay đổi 3 giá trị này:

```javascript
// Dòng 42-44 (khoảng chừng đó)
const SERVICE_ID = "service_z4o66ps"; // ← Service ID của bạn
const TEMPLATE_ID = "template_abc123"; // ← Template ID bạn vừa tạo
const USER_ID = "BZvxL_12345abcde"; // ← Public Key của bạn
```

**Thay bằng giá trị thực tế từ EmailJS dashboard**

---

## 📋 Checklist

Đảm bảo bạn đã làm đủ các bước:

- [ ] Tạo EmailJS account
- [ ] Thêm Gmail service (connect thành công, không còn lỗi)
- [ ] Test email service thành công
- [ ] Tạo Email Template
- [ ] Copy Service ID
- [ ] Copy Template ID
- [ ] Copy Public Key (User ID)
- [ ] Cập nhật 3 giá trị trong `Contact.jsx`
- [ ] Test form trên website

---

## 🔍 Troubleshooting

### Vẫn gặp lỗi "insufficient authentication scopes"?

**Giải pháp 1: Xóa và tạo lại Service**

1. Delete service hiện tại
2. Tạo service mới
3. Khi connect Gmail, đảm bảo cấp **TẤT CẢ** quyền

**Giải pháp 2: Dùng App Password (Nếu bật 2FA)**

Nếu Gmail của bạn bật 2-Factor Authentication:

1. Vào Google Account Settings
2. Security → 2-Step Verification → App Passwords
3. Tạo App Password cho EmailJS
4. Dùng password này thay vì connect trực tiếp

**Giải pháp 3: Dùng email khác**

Nếu Gmail vẫn lỗi, thử dùng:

- Outlook/Hotmail
- Yahoo Mail
- Hoặc tạo Gmail mới không có 2FA

---

## 🎯 GIÁ TRỊ BẠN CẦN (Từ EmailJS Dashboard)

```javascript
// Giá trị mẫu - THAY BẰNG GIÁ TRỊ CỦA BẠN
SERVICE_ID: "service_z4o66ps"; // Từ Email Services
TEMPLATE_ID: "template_xyz789"; // Từ Email Templates
USER_ID: "BZvxL_abc123xyz"; // Từ Account → General → Public Key
```

---

## ✅ Test Thử

Sau khi setup xong:

1. Mở http://localhost:5173
2. Scroll xuống phần **Contact**
3. Điền form:
   - Name: Test
   - Email: your-email@gmail.com
   - Message: This is a test
4. Complete reCAPTCHA
5. Click **Send Message**
6. Kiểm tra email

Nếu nhận được email → Success! 🎉

---

## 🚨 LƯU Ý QUAN TRỌNG

1. **reCAPTCHA:** Hiện tại code dùng placeholder key. Để form hoạt động hoàn toàn, bạn cần:

   - Đăng ký Google reCAPTCHA
   - Lấy Site Key
   - Cập nhật trong `Contact.jsx`

2. **Môi trường Development:**
   - Hiện tại test trên localhost OK
   - Khi deploy lên Vercel, cần thêm domain vào EmailJS settings

---

Need help? Hãy cho tôi biết bước nào bạn đang gặp khó khăn! 💪
