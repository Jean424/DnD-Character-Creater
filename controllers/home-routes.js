const router = require('express').Router();

//render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

//redirect to homepage once logged in 
router.get('/login', async (req, res) => {
  res.render('login');
});

//render signup page
router.get('/signup', async (req, res) => {
  res.render('signup')
})


module.exports = router;
