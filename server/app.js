import YoutubeScraper from './middleware/YoutubeScraper.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
const randomVideosRouter = express.Router();

app.use('/search', randomVideosRouter)

randomVideosRouter.get('/', YoutubeScraper, (req, res) => {
    res.send(req.videos)
})

randomVideosRouter.get('/:searchTerm', YoutubeScraper, (req, res) => {
    res.send(req.videos)
})

// Check if the code is on Heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})