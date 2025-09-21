// Test EmailJS Configuration
// Run this in browser console to test your EmailJS setup

export const testEmailJSSetup = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log('🔍 EmailJS Configuration Test:');
  console.log('Service ID:', serviceId || '❌ Not Set');
  console.log('Template ID:', templateId || '❌ Not Set');
  console.log('Public Key:', publicKey ? '✅ Set' : '❌ Not Set');

  if (!serviceId || serviceId === 'your_service_id_here') {
    console.error('❌ Service ID not configured');
    return false;
  }

  if (!templateId || templateId === 'your_template_id_here') {
    console.error('❌ Template ID not configured');
    return false;
  }

  if (!publicKey || publicKey === 'your_public_key_here') {
    console.error('❌ Public Key not configured');
    return false;
  }

  console.log('✅ EmailJS appears to be configured correctly!');
  console.log('📚 If emails still don\'t work, check:');
  console.log('1. Your EmailJS service is connected to your email');
  console.log('2. Your template variables match the ones being sent');
  console.log('3. Your email service is active and not paused');
  
  return true;
};
