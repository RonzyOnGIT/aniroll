import express from "express";
import cors from "cors";
import fetchCrunchyrollNews from "../utils/scraper.js";

const app = express();

// enable CORS for all origins 
app.use(cors());

app.get('/news', async (req, res) => {
    try {
        const news = await fetchCrunchyrollNews();
        res.json(news);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
