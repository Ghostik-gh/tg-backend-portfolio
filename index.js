require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TG_API_KEY;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const urlPortfolio = 'https://ghostik-gh.github.io/portfolio/#/';
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Received your message', {
      disable_notification: false,
      reply_markup: {
        inline_keyboard: [[{ text: 'Сайт', web_app: { url: urlPortfolio } }]],
      },
    });
  }
});
