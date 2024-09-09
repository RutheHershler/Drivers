const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = require('twilio');(accountSid, authToken);   


const sendMessage = async (messageBody, to) => {
  try {
    const message = await client.messages.create({
      body: messageBody,
      from: 'whatsapp:+14155238886', // החלף במספר ה-WhatsApp של Twilio שלך
      to: 'whatsapp:+972555555555' // החלף במספר ה-WhatsApp של הלקוח
    });

    console.log(message.sid);
  } catch (error) {
    console.error(error);
  }
};
