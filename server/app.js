import YoutubeScraper from './middleware/YoutubeScraper.js';
import express from 'express';

const app = express();
const PORT = 5000;
const randomVideosRouter = express.Router();

app.use('/search', randomVideosRouter)

randomVideosRouter.get('/', YoutubeScraper, (req, res) => {
    res.send(req.videos)
})

randomVideosRouter.get('/:searchTerm', YoutubeScraper, (req, res) => {
    res.send(req.videos)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})