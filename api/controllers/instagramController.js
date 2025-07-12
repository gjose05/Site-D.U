const axios = require('axios');
const cheerio = require('cheerio');

let cachedPosts = [];
let lastFetchTime = 0;

const getInstagramPosts = async (req, res) => {
  try {
    // Cache de 5 minutos
    if (Date.now() - lastFetchTime < 300000 && cachedPosts.length > 0) {
      return res.json({ success: true, posts: cachedPosts });
    }

    const { data } = await axios.get('https://www.instagram.com/d.u.br/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 5000
    });

    const $ = cheerio.load(data);
    const script = $('script[type="application/ld+json"]').html();
    const json = JSON.parse(script);

    cachedPosts = (json.mainEntityOfPage || []).slice(0, 6).map(post => ({
      imageUrl: post.image || '/placeholder-instagram.jpg',
      caption: post.caption || 'Post D.U',
      postUrl: post.url || 'https://www.instagram.com/d.u.br/'
    }));

    lastFetchTime = Date.now();
    res.json({ success: true, posts: cachedPosts });

  } catch (error) {
    console.error('Erro no scraping:', error.message);
    res.json({ 
      success: true,
      posts: cachedPosts.length > 0 ? cachedPosts : [{
        imageUrl: '/placeholder-instagram.jpg',
        caption: 'Siga @d.u.br no Instagram',
        postUrl: 'https://www.instagram.com/d.u.br/'
      }]
    });
  }
};

module.exports = { getInstagramPosts };