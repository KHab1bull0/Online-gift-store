import grammy, { InputFile, session } from 'grammy';
import fs from 'fs'
import path from 'path';
import sharp from 'sharp';
import { readfolder } from './utils/helper.js';
import { mainButtons } from './buttons.js/mainButton.js';
import { aloqaFn, commands, startFn } from './command.js';
import { pool } from '../src/database/db.js';
import { inlineOrder } from './buttons.js/inline.buttons.js';
import { sendImage } from './services/service.js';
// import { captions } from './buttons.js/captions.js';


export const startBot = async (token) => {

    const bot = new grammy.Bot(token);
    function initial() {
        return { lastButtons: "mainButtons", currentButtons: "mainButtons" }
    }
    bot.use(session({ initial }));


    await bot.api.setMyCommands(commands);
    bot.command('start', startFn);
    bot.command('aloqa', aloqaFn);


    bot.hears('📱 Aloqa', async (msg) => {
        try {

            await bot.api.sendContact(msg.chat.id,
                {
                    phone_number: "+998907777777"
                },
                'Sarvar'
            );

        } catch (e) {
            console.log(e);
        }
    });

    bot.hears('💐 Gullar', async (msg) => {
        try {

            const dataResult = await pool.query('select * from products where category = $1', ['gullar'])
            if (dataResult.rows.length == 0) {
                return msg.reply("💐 Gullar hozir mavjud emas ")
            }
            for (let i = 0; i < dataResult.rows.length; i++) {
                const { name, text, price, image_url } = dataResult.rows[i];
                const pathe = path.join(process.cwd(), 'uploads', image_url);

                const capgullar = `#gullar\n
${name}\n
${text}\n
Narxi: ${price} so'm\n
@UsTechBlog`

                fs.access(pathe, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log(`${pathe} mavjud emas.`);
                    } else {

                        await msg.replyWithPhoto(new InputFile(pathe), {
                            caption: capgullar,
                            parse_mode: 'HTML',
                            reply_markup: inlineOrder
                        });

                    }
                });
            }

        } catch (e) {
            console.log(e);
        }
    });

    bot.hears('⌚️ Aksessuarlar', async (msg) => {
        try {

            const dataResult = await pool.query('select * from products where category = $1', ['aksessuar'])
            if (dataResult.rows.length == 0) {
                return msg.reply("⌚️ Aksessuarlar hozir mavjud emas ")
            }
            for (let i = 0; i < dataResult.rows.length; i++) {
                const { name, text, price, image_url } = dataResult.rows[i];
                const pathe = path.join(process.cwd(), 'uploads', image_url);

                const capgullar = `#aksessuar\n
${name}\n
${text}\n
Narxi: ${price} so'm\n
@UsTechBlog`

                fs.access(pathe, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log(`${pathe} mavjud emas.`);
                    } else {

                        await msg.replyWithPhoto(new InputFile(pathe), {
                            caption: capgullar,
                            parse_mode: 'HTML',
                            reply_markup: inlineOrder
                        });

                    }
                });
            }

        } catch (e) {
            console.log(e);
        }
    });

    bot.hears('📚 Kitoblar', async (msg) => {
        try {

            const dataResult = await pool.query('select * from products where category = $1', ['kitoblar'])
            if (dataResult.rows.length == 0) {
                return msg.reply("📚 Kitoblar hozir mavjud emas ")
            }
            for (let i = 0; i < dataResult.rows.length; i++) {
                const { name, text, price, image_url } = dataResult.rows[i];
                const pathe = path.join(process.cwd(), 'uploads', image_url);

                const capgullar = `#kitoblar\n
${name}\n
${text}\n
Narxi: ${price} so'm\n
@UsTechBlog`

                fs.access(pathe, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log(`${pathe} mavjud emas.`);
                    } else {

                        await msg.replyWithPhoto(new InputFile(pathe), {
                            caption: capgullar,
                            parse_mode: 'HTML',
                            reply_markup: inlineOrder
                        });

                    }
                });
            }

        } catch (e) {
            console.log(e);
        }
    });

    bot.hears('🧁 Shirinliklar', async (msg) => {
        try {

            const dataResult = await pool.query('select * from products where category = $1', ['shirinliklar'])
            if (dataResult.rows.length == 0) {
                return msg.reply("🧁 Shirinliklar hozir mavjud emas ")
            }
            for (let i = 0; i < dataResult.rows.length; i++) {
                const { name, text, price, image_url } = dataResult.rows[i];
                const pathe = path.join(process.cwd(), 'uploads', image_url);

                const capgullar = `#shirinliklar\n
${name}\n
${text}\n
Narxi: ${price} so'm\n
@UsTechBlog`

                fs.access(pathe, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log(`${pathe} mavjud emas.`);
                    } else {

                        await msg.replyWithPhoto(new InputFile(pathe), {
                            caption: capgullar,
                            parse_mode: 'HTML',
                            reply_markup: inlineOrder
                        });

                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    });

    bot.hears('👕 Kiyimlar', async (msg) => {
        try {

            const dataResult = await pool.query('select * from products where category = $1', ['kiyimlar'])
            if (dataResult.rows.length == 0) {
                return msg.reply("👕 Kiyimlar hozir mavjud emas ")
            }
            // sendImage(dataResult, captions.kiyim)
            for (let i = 0; i < dataResult.rows.length; i++) {
                const { name, text, price, image_url } = dataResult.rows[i];
                const pathe = path.join(process.cwd(), 'uploads', image_url);

                const capgullar = `#kiyimlar\n
${name}\n
${text}\n
Narxi: ${price} so'm\n
@UsTechBlog`

                fs.access(pathe, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log(`${pathe} mavjud emas.`);
                    } else {

                        await msg.replyWithPhoto(new InputFile(pathe), {
                            caption: capgullar,
                            parse_mode: 'HTML',
                            reply_markup: inlineOrder
                        });

                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    });


    const imageDirectoryPath = path.join(process.cwd(), 'uploads');

    const getImageFiles = () => {
        return new Promise((resolve, reject) => {
            fs.readdir(imageDirectoryPath, (err, files) => {
                if (err) {
                    return reject(err);
                }

                const imageFiles = files.filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
                }).map(file => new InputFile(path.join(imageDirectoryPath, file)));

                resolve(imageFiles);
            });
        });
    };

    // bot.on('message:text', async (msg) => {
    //     try {
    //         const imageFiles = await getImageFiles();
    // imageFiles[0]?.consumed = true
    //         console.log(imageFiles);

    //         if (imageFiles.length > 0) {
    //             const mediaGroup = imageFiles.map((image, index) => ({
    //                 type: 'photo',
    //                 media: image,
    //                 caption: `Image ${index + 1}`,
    //                 parse_mode: 'HTML'
    //             }));
    //             console.log(mediaGroup)
    //             await msg.replyWithMediaGroup(mediaGroup);
    //         } else {
    //             await msg.reply('No images found in the directory.');
    //         }
    //     } catch (error) {
    //         console.error(error);
    // await msg.reply('Error sending images.');
    //     }
    // });







    // bot.on("message:text", async (msg) => {

    //     const images = readfolder();

    //     const imagepath = path.join(process.cwd(), 'src/bot', './images/factory.jpg');
    //     const videoPath = path.join(process.cwd(), 'src/bot', './images/video3.mov');


    //     try {
    //         for (let i = 0; i < images.length; i++) {

    //             const imagepath = path.join(process.cwd(), 'src', 'bot', 'images', images[i]);
    //             await msg.replyWithPhoto(new InputFile(imagepath));

    //         }

    //     } catch (error) {
    //         console.log(error);
    //         msg.reply('Rasm jo\'natishda xatolik...')
    //     }

    // });



    bot.start()
    console.log("\n\x1b[33mBot is working...\x1b[0m\n")
}



