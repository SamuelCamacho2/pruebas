const {Router} = require('express');
const router = Router();

router.post('/signup', (req, res, next) => {
    res.json('signup')
})
dasdsd
router.post('/login', (req, res, next) => {
    res.json('login')
})

router.get('/me', (req, res, next) => {
    res.json('profile')
})

module.exports = router;