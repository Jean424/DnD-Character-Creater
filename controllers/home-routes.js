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

// Direct to Charcter creator page
router.get('/character-creator', (req, res) => {
  res.render('character-creator', {
    // loggedIn: req.session.loggedIn,
  })

});

//-- Character Sheet
router.get('/character-sheet/', async (req, res) => {
  // if(!req.session.loggedIn){
  //     res.redirect('homepage');
  //     return;
  // }
  
  res.render('character-sheet', {
      // loggedIn: req.session.loggedIn,
  })

});


module.exports = router;
