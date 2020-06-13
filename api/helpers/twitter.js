const URL = "https://api.twitter.com/1.1/search/tweets.json";
const axios = require('axios');
require('dotenv').config(); //this module , help save secret words on a file 

class Twitter {
    get(query, count, maxId) {
        return axios.get(URL, {
            params: {
                q: query,
                count: count,
                tweet_mode: "extended",
                max_id: maxId,
            },
            headers: {
                "Authorization" : `Bearer ${process.env.TWITTER_API_TOKEN}`, 
            }
        })
    }
}

module.exports = Twitter;