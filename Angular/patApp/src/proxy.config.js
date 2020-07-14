const PROXY_CONFIG = [
    {
        context: [
        "/topstories",
        "/item"
            
        ],
    target: "https://hacker-news.firebaseio.com/v0",
    secure: false,
    changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;

