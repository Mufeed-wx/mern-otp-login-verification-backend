const router = require('express').Router()

router.post('/mobile', (req, res) => {
    console.log(req.body);
})

module.exports = router;