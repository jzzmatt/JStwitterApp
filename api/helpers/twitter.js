const URL = "https://api.twitter.com/1.1/search/tweets.json";
const axios = require('axios');
require('dotenv').config();

class Twitter {
    get(query, count) {
        return axios.get(URL, {
            params: {
                q: query,
                count: count
            },
            headers: {
                "Authorization" : `Bearer ${process.env.TWITTER_API_TOKEN}`, 
            }
        })
    }
}

module.exports = Twitter;