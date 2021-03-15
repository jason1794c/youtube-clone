import { Client } from 'youtubei';

const youtube = new Client();

export default async function YoutubeScraper(req, res, next) {
    const search = req.params.searchTerm ? req.params.searchTerm : '';
    req.videos = await youtube.search(search, {
        type: 'video'
    });
    
    next();
}