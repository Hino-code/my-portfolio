import emailjs from '@emailjs/browser';
import { ContactFormData, EmailJSConfig } from '../types';

// EmailJS Configuration
// To set up:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from Account page
// 6. Replace these values with your actual EmailJS credentials

export const emailConfig: EmailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
};

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (!emailConfig.serviceId || emailConfig.serviceId === 'YOUR_SERVICE_ID' ||
        !emailConfig.templateId || emailConfig.templateId === 'YOUR_TEMPLATE_ID' ||
        !emailConfig.publicKey || emailConfig.publicKey === 'YOUR_PUBLIC_KEY') {
      console.error('❌ EmailJS not configured properly. Please check your .env file.');
      console.log('🔧 Current config:', {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey ? 'Set' : 'Not Set'
      });
      throw new Error('EmailJS configuration incomplete. Please check EMAILJS_SETUP.md');
    }

    console.log('📧 Initializing EmailJS...');
    
    // Initialize EmailJS with public key
    emailjs.init(emailConfig.publicKey);
    
    // Prepare template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Jino Butaslac',
      reply_to: formData.email
    };

    console.log('📤 Sending email with params:', {
      from_name: templateParams.from_name,
      from_email: templateParams.from_email,
      subject: templateParams.subject
    });

    // Send email
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );

    console.log('✅ Email sent successfully!', response);
    return response.status === 200;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid service ID') || 
          error.message.includes('Template not found') ||
          error.message.includes('Public key')) {
        console.error('🔧 EmailJS Configuration Error. Please follow EMAILJS_SETUP.md');
      }
    }
    
    return false;
  }
};

// Email template example for EmailJS:
/*
Template Subject: New Portfolio Contact: {{subject}}

Template Body:
Hello {{to_name}},

You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/
