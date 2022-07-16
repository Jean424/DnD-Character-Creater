const router = require('express').Router();
const withAuth = require('../utils/auth');


//render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

//redirect to homepage once logged in 
router.get('/login', async (req, res) => {
  if(req.session.loggedIn) { 
    res.render('character-sheet')
  }
  res.render('homepage');
});

//render signup page
router.get('/signup', async (req, res) => {
  res.render('signup')
})

//-- Character Sheet
router.get('/character-creator', withAuth, (req, res) => {
  if(!req.session.loggedIn ){
      res.redirect('homepage');
      return;
  }
  
  res.render('character-creator', {
      // loggedIn: req.session.loggedIn,
  })

});

//-- Character Sheet
router.get('/character-sheet', withAuth, (req, res) => {
  if(!req.session.loggedIn ){
      res.redirect('homepage');
      return;
  }
  
  res.render('character-sheet', {
      // loggedIn: req.session.loggedIn,
  })

});


module.exports = router;