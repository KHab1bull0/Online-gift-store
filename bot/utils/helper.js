import fs from 'fs'
import path from 'path';





export const readfolder = () => {
    let imageFiles ;

    const imageDirectoryPath = path.join(process.cwd(), 'src', 'bot', 'images');
    try {
        const files = fs.readdirSync(imageDirectoryPath);

        imageFiles = files.filter(file => {
            // Fayl kengaytmalarini tekshirish
            const ext = path.extname(file).toLowerCase();
            return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
        });
        return imageFiles
    } catch (err) {
        console.log('Katalogni o\'qishda xatolik:', err);
    }
}