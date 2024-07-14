import { session } from 'grammy';
import { mainButtons } from './buttons.js/mainButton.js';




export const commands = [
    { command: "start", description: "🔄 Qayta ishga tushirish" },
    { command: "aloqa", description: "📱 Bot Admini bilan bo'glanish" }
]



export const startFn = async (msg) => {
    session.lastButtons = '/start';

    try {
        await msg.reply(`Botga xush kelibsiz 👐`, {
            reply_markup: mainButtons,
            parse_mode: "HTML"

        });


    } catch (e) {
        console.log('start commandda xatolik', e);
        msg.reply(`Xatolik bo'ldi kodga qarang`)
    }
}

export const aloqaFn = async (msg) => {
    try {
        await msg.api.sendContact(msg.chat.id,
            {
                phone_number: '+998909157860',
            },
            'Admin'
        );
        console.log('Contact sent successfully');
    } catch (error) {
        console.error('Error sending contact:', error);
    }
}