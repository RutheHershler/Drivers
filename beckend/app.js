require('dotenv').config();
const express = require("express");
const cors = require('cors');

const messageRouter = require('./src/routes/sendMessage.route');

const app = express()
app.use(cors())
app.use('/message', messageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});



const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

// הצגת QR code לסריקה
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp is ready!');
    
    // שליחת הודעה
    const number = "9720556766460";
    const message = "היי, זו הודעה מ-Node.js באמצעות whatsapp-web.js";
    const chatId = `${number}@c.us`;

    client.sendMessage(chatId, message).then(response => {
        console.log('Message sent successfully:', response);
    }).catch(err => {
        console.error('Error while sending message:', err);
    });
});

client.initialize();
