const { Resend } = require('resend');
const dotenv = require('dotenv');
const path = require('path');

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    console.log('Using API Key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
    console.log('Using From Email:', process.env.FROM_EMAIL);
    
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: ['eloise.koua@centrale-casablanca.ma'], // Target email
      subject: 'Test delivery from Antigravity',
      html: '<p>Testing email delivery. If you see this, it works!</p>',
    });

    if (error) {
      console.error('Resend Error:', error);
    } else {
      console.log('Resend Success Data:', data);
    }
  } catch (err) {
    console.error('Execution Error:', err);
  }
}

testEmail();
