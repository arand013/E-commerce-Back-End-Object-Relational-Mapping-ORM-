// This index.js file Connects with the Server.js to re-direct user to connect with API folder *ONLY*
//*Do not add more API routes here
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
