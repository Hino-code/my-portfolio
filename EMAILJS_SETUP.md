# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality in your portfolio. EmailJS is a free service that allows sending emails directly from client-side JavaScript without a backend server.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or use custom SMTP
4. Follow the connection instructions for your chosen service
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Settings
- **Template Name**: `Portfolio Contact Form`

### Template Subject
```
New Portfolio Contact: {{subject}}
```

### Template Body
```
Hello Jino,

You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{from_email}}
```

4. Test the template and save it
5. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Integration" tab or "Account" section
2. Find your **Public Key** (e.g., `user_abcdefghijklmn`)
3. This key is safe to expose in client-side code

## Step 5: Configure Environment Variables

1. Open the `.env` file in your portfolio project
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmn
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the test message

## EmailJS Free Tier Limits

- **200 emails per month** (free tier)
- **2 email services** maximum
- **1 email template** per service
- No credit card required for free tier

## Security Notes

- The Public Key is safe to expose in client-side code
- Never expose your Private Key (if you upgrade to paid plan)
- EmailJS handles all the email sending securely
- Your actual email credentials are stored securely on EmailJS servers

## Troubleshooting

### Common Issues:

1. **"Failed to send email"**
   - Check your environment variables are correctly set
   - Verify your Service ID and Template ID are correct
   - Ensure your email service is properly connected

2. **Emails not received**
   - Check spam folder
   - Verify the email template is correctly formatted
   - Test with a different email address

3. **Development vs Production**
   - Environment variables work the same in both
   - Make sure your deployment platform has the environment variables set

### Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

## Upgrading (Optional)

If you need more than 200 emails per month:
- Personal Plan: $15/month (1,000 emails)
- Business Plan: $40/month (5,000 emails)
- More features available in paid plans

That's it! Your contact form should now be fully functional with EmailJS.
