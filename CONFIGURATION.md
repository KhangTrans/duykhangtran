# 📧 EmailJS Configuration Guide

## Step 1: Create EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider:
   - Gmail (recommended)
   - Outlook
   - Yahoo
   - Or any other SMTP service
4. Connect your email account
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Set up your template with the following content:

### Template Content Example:

**Subject:**

```
New Contact Form Submission from {{from_name}}
```

**Content:**

```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Save the template and note your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key (e.g., `user_1234567890abcdef`)

## Step 5: Update Your Code

Open `src/sections/Contact.jsx` and update these lines:

```javascript
// Replace these values with your own
const SERVICE_ID = "service_abc123"; // Your Service ID
const TEMPLATE_ID = "template_xyz789"; // Your Template ID
const USER_ID = "user_1234567890abcdef"; // Your Public Key
```

## Step 6: Test Your Configuration

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting

### Email not received?

- Check your EmailJS dashboard for any errors
- Verify all IDs are correct
- Check your spam folder
- Ensure your email service is properly connected

### "Failed to send" error?

- Check browser console for detailed error messages
- Verify your Public Key is correct
- Make sure you're using the correct Service ID and Template ID

---

# 🔒 Google reCAPTCHA Configuration Guide

## Step 1: Register Your Site

1. Visit [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click the **+** button to register a new site

## Step 2: Configure reCAPTCHA

1. **Label**: Enter a label (e.g., "My Portfolio")
2. **reCAPTCHA type**: Select **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
3. **Domains**: Add your domains:
   - `localhost` (for development)
   - Your production domain (e.g., `yourportfolio.vercel.app`)
4. Accept the Terms of Service
5. Click **Submit**

## Step 3: Get Your Keys

After registration, you'll receive two keys:

1. **Site Key** (Public key) - Used in your frontend code
2. **Secret Key** (Private key) - Keep this secure, not used in frontend

Copy your **Site Key** (e.g., `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`)

## Step 4: Update Your Code

Open `src/sections/Contact.jsx` and update this line:

```javascript
// Replace with your Site Key
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
```

## Step 5: Test reCAPTCHA

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. You should see the reCAPTCHA checkbox
4. Complete the verification and submit the form

## Testing Keys (For Development Only)

Google provides test keys that always validate:

**Site Key (always passes):**

```
6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

**Secret Key (always passes):**

```
6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

⚠️ **Important**: Replace test keys with real keys before deploying to production!

## Troubleshooting

### reCAPTCHA not showing?

- Check if your Site Key is correct
- Verify domains are properly configured
- Clear browser cache and reload

### "Invalid site key" error?

- Ensure you're using the Site Key (not Secret Key)
- Verify the domain is registered in Google reCAPTCHA admin

### reCAPTCHA theme issues?

You can change the theme in `Contact.jsx`:

```javascript
<ReCAPTCHA
  sitekey={RECAPTCHA_SITE_KEY}
  onChange={handleRecaptchaChange}
  theme="light" // Change to "light" for light theme
/>
```

---

# 🎨 Customization Tips

## Change Color Scheme

The portfolio uses a blue-purple gradient. To customize:

### Primary Colors

```javascript
// In App.jsx (ConfigProvider theme)
colorPrimary: '#1890ff',  // Change to your color

// In styled components (multiple files)
background: linear-gradient(135deg, #1890ff, #722ed1);
// Change to: linear-gradient(135deg, #yourColor1, #yourColor2);
```

## Update Personal Information

### 1. Contact Email

In `src/sections/Contact.jsx`:

```javascript
{
  icon: <MailOutlined />,
  title: 'Email',
  value: 'your.email@example.com',  // Update this
  link: 'mailto:your.email@example.com',  // Update this
}
```

### 2. Social Links

In `src/sections/Footer.jsx`:

```javascript
const socialLinks = [
  {
    icon: <GithubOutlined />,
    url: "https://github.com/yourusername", // Update
    label: "GitHub",
  },
  {
    icon: <LinkedinOutlined />,
    url: "https://linkedin.com/in/yourusername", // Update
    label: "LinkedIn",
  },
  // Add more social links as needed
];
```

### 3. Projects

In `src/sections/Projects.jsx`, update the `projects` array with your actual projects.

## Add More Sections

To add a new section:

1. Create a new file in `src/sections/YourSection.jsx`
2. Import it in `src/App.jsx`
3. Add it to the component tree
4. Update footer quick links if needed

---

Made with ❤️ for easier configuration
