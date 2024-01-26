import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use(express.static(new URL('public', import.meta.url).pathname));

app.post('/api/upload', upload.array('files'), (req, res) => {
	console.log('Загруженные файлы:', req.files);
	res.send('Файлы успешно загружены!');
});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});
