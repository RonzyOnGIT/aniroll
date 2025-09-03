// endpoint: https://www.crunchyroll.com/news
import puppeteer from 'puppeteer';

async function fetchCrunchyrollNews() {
    // launch browser and open new blank page
    const browser = await puppeteer.launch({
    headless: true,
    args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled"
    ]
    });

    const page = await browser.newPage();

    // Stealth patches
    await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    );

    // navigate to screen size
    await page.goto('https://www.crunchyroll.com/news', { waitUntil: 'networkidle2' });
    await page.waitForSelector('ul.topStoriesPanel_list__NIc5W', { timeout: 10000 }); // wait up to 10s

    await page.setViewport({width: 1920, height: 1080});

    const items = await page.$$eval(
    "#app > div.PageContentWrapper_wrapper__i6XT4 > div.homepage > section.threeColumnLayoutPanel_threeColumnLayoutPanel__JMJEJ.threeColumnLayoutPanel_marginTopDefault__TFFar > div.threeColumnLayoutPanel_layout__6ikLR > div.threeColumnLayoutPanel_middleLower__eJtx9 > div.topStoriesPanel_topStoriesPanel__GPwIA.topStoriesPanel_marginTopDefault__v8hOI.topStoriesPanel_marginBottomDefault__8NNt7 > ul.topStoriesPanel_list__NIc5W > li > article.articleListingCard_articleAsideCard___cfj4.articleListingCard_layout_inlinetopstories__pGkks",
    articles => {
        return articles.map(article => {

            const articleImg = article.querySelector("div:nth-child(1) div a picture img")?.src || null;
            const secondDiv = article.querySelector("div:nth-child(2)");
            const secondDivTime = secondDiv?.querySelector("div:nth-child(2)")?.textContent.trim() || null;
            const announcement = secondDiv?.querySelector("a h3")?.textContent.trim() || null;

            return { articleImg, secondDivTime, announcement };
        });
    }
    );
    console.log(items);

    await browser.close();
    return items;
}

export default fetchCrunchyrollNews;




