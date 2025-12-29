# 🔒 Setup Google reCAPTCHA - Hướng Dẫn Nhanh

## ✅ EmailJS Đã Xong!

Tôi đã cập nhật xong EmailJS vào code:

- ✅ Service ID: `service_z4o66ps`
- ✅ Template ID: `template_dwrt03`
- ✅ Public Key: `YWHwHqaw639SV4vQA`

---

## 🎯 Giờ Cần Setup reCAPTCHA

### Bước 1: Đăng Ký reCAPTCHA

1. **Truy cập:** https://www.google.com/recaptcha/admin/create
2. **Đăng nhập** bằng Gmail của bạn
3. **Điền form:**

   **Label:**

   ```
   Portfolio Contact Form
   ```

   **reCAPTCHA type:** Chọn **reCAPTCHA v2** → **"I'm not a robot" Checkbox**

   **Domains:** Thêm 2 domains:

   ```
   localhost
   ```

   (Nhấn Enter sau mỗi domain để thêm)

   Sau khi deploy thì thêm:

   ```
   your-domain.vercel.app
   ```

4. **Accept Terms** và click **Submit**

---

### Bước 2: Lấy Site Key

Sau khi submit, bạn sẽ thấy 2 keys:

- **Site Key** (Public) - Copy cái này ✅
- **Secret Key** (Private) - Không cần dùng cho frontend

**Copy Site Key** - sẽ có dạng: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`

---

### Bước 3: Cập Nhật Code

Sau khi có Site Key, báo cho tôi biết, tôi sẽ cập nhật vào code!

Hoặc bạn tự cập nhật:

1. Mở file `src/sections/Contact.jsx`
2. Tìm dòng 99:
   ```javascript
   const RECAPTCHA_SITE_KEY = "your_recaptcha_site_key";
   ```
3. Thay `your_recaptcha_site_key` bằng Site Key của bạn

---

## 🧪 Testing Keys (Tạm Thời)

Nếu muốn test ngay mà chưa đăng ký reCAPTCHA, dùng test key này:

**Site Key (Test):**

```
6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

⚠️ **Chú ý:** Test key này sẽ luôn pass validation nhưng KHÔNG nên dùng cho production!

---

## 📋 Tóm Tắt

**Đã xong:**

- ✅ EmailJS configured
- ✅ Code đã update

**Cần làm:**

- ⏳ Đăng ký Google reCAPTCHA
- ⏳ Lấy Site Key
- ⏳ Cập nhật Site Key vào code

**Sau đó:**

- ✅ Test form contact
- ✅ Nhận email thành công!

---

Hãy đăng ký reCAPTCHA và báo cho tôi Site Key nhé! Hoặc dùng test key tạm thời để test thử! 😊
