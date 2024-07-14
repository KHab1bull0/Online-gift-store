import path from "path";


export const sendImage = (images, caption) => {
    for (let i = 0; i < images.rows.length; i++) {
        const { name, text, price, image_url } = images.rows[i];
        const pathe = path.join(process.cwd(), 'uploads', image_url);

        fs.access(pathe, fs.constants.F_OK, async (err) => {
            if (err) {
                console.log(`${pathe} mavjud emas.`);
            } else {

                await msg.replyWithPhoto(new InputFile(pathe), {
                    caption: caption,
                    parse_mode: 'HTML',
                    reply_markup: inlineOrder
                });
            }
        })
    }
};