require('dotenv').config();
const axios = require('axios').default;
exports.handler = async (event) => {
  console.log('Received an update from Telegram!', event.body);
  return { statusCode: 200 };
};

await axios.post(
  `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`,
  {
    // TODO: Add form data
    chat_id: JSON.parse(event.body).message.chat.id,
    text: 'I got your message!',
  }
);
