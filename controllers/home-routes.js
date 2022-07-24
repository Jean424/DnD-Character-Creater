const router = require('express').Router();
const { render } = require('express/lib/response');
const sequelize = require('../config/connection');
const { User, Character, Ability } = require('../models');
const withAuth = require('../utils/auth');
const contentManager = require('../utils/contentmanager');


//GET request to show all characters and include their usernames
// router.get('/', async (req,res) => {
//     // console.log('------------------------------')
//     try{
//         const characterData = await Character.findAll({
//             attributes: [
//                 'id',
//                 'user_id',
//                 'name',
//                 'race',
//                 'class',
//                 'gender',
//                 "id",
//                 "user_id",
//                 "name",
//                 "race",
//                 "class",
//                 "gender",
//                 "age",
//                 "player_level",
//                 "proficiency_bonus",
//                 "alignment",
//                 "languages",
//                 "proficiencies",
//             ],
//             include : [
//                 {
//                     model: User,
//                     attributes: ['id', 'username'],
//                 }
//             ]
//         });

//         const characters = characterData.map((character) =>
//             character.get({ plain: true })
//         );
//         // console.log(characters);
//         res.render('homepage', {
//             username: req.session.User,
//             characters,
//             loggedIn: req.session.loggedIn,
//         });
//   }
//    catch (err) {
//     // console.log(err);
//     res.status(500).json(err);
//   }
// })

//render homepage
router.get('/', async (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
  });
  //redirect to homepage once logged in 
router.get('/login', async (req, res) => {
    if(req.session.loggedIn) {
      res.redirect('/');
      return; 
    }
    res.render('login');
  });

//GET REQUEST FOR SINGLE CHARACTER
router.get('/character/:id', (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
})

// Direct to login-screen
router.get('/login', (req, res) => {
    res.render('login')
})

//Direct to signup screen
router.get('/signup', (req, res) => {
    res.render('signup')
    
})


    

// Direct to Charcter creator page
router.get('/character-creator', (req, res) => {
  res.render('character-creator', {
    loggedIn: req.session.loggedIn,
  })

});

// Testing to display character images
router.get('/character-images', (req, res) => {
    res.render('character-images',{
        loggedIn: req.session.loggedIn,
    })

});

//-- Grab an existing character's character sheet based on ID
router.get('/character-card/:id', async (req, res) => {
    
    if(!req.session.loggedIn){

            res.redirect('/');
            return;
    }

    //-- otherwise render
    try {
        const characterData = await Character.findAll({
            where: {
                id: req.params.id,
            },
            attributes: [
                'id',
                'user_id',
                'name',
                'race',
                'class',
                'gender',
                "name",
                "race",
                "class",
                "gender",
                "age",
                "player_level",
                "proficiency_bonus",
                "alignment",
                "languages",
                "proficiencies",
                "image_link",
            ],
            include: {
                model: User,
                attributes: ['username', 'id']
            }
        });
    
        const characters = characterData.map((myCharacter) =>
        myCharacter.get({ plain: true })
        );

        // capitalize race for character card
        characters[0].race = contentManager.uppercaseFirst(characters[0].race)

        res.render('character-card', {
            characters,
            username: req.session.username,
            session_user_id: req.session.user_id,
            loggedIn: req.session.loggedIn,
            
        })
    }
    catch (err) {
        res
            .status(500)
            .json(String(err))
            return;
        
    }
});

//-- Grab an existing character's character sheet based on ID
router.get('/character-sheet/:id', async (req, res) => {
    
    if(!req.session.loggedIn){

            res.redirect('/');
            return;
    }

    //-- otherwise render
    try {
        const characterData = await Character.findAll({
            where: {
                id: req.params.id,
            },
            attributes: [
                'id',
                'user_id',
                'name',
                'race',
                'class',
                'gender',
                "id",
                "user_id",
                "name",
                "race",
                "class",
                "gender",
                "age",
                "player_level",
                "proficiency_bonus",
                "alignment",
                "languages",
                "proficiencies",
            ],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Ability,
                    attributes: ['name', 'score', 'modifier']
                }
            ]
        });
    
        const characters = characterData.map((myCharacter) =>
        myCharacter.get({ plain: true })
        );

        res.render('character-sheet-id', {
            username: req.session.username,
            characters,
            loggedIn: req.session.loggedIn,
        })
    }
    catch (err) {
        res
            .status(500)
            .json(String(err))
            return;
        
    }
});

//-- Character Sheet
router.get('/character-sheet/', async (req, res) => {
    if(!req.session.loggedIn){

        res.redirect('homepage');
        return;
    }
    
    res.render('character-sheet', {
        loggedIn: req.session.loggedIn,
    })

});

router.get('/profile', async (req, res) => {

    if (!req.session.loggedIn) {
        res.redirect('homepage');
        return;
    }

    try {
        // console.log(req.session.User)
        const characterData = await Character.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'user_id',
                'name',
                'race',
                'class',
                'gender',
                "name",
                "race",
                "class",
                "gender",
                "age",
                "player_level",
                "proficiency_bonus",
                "alignment",
                "languages",
                "proficiencies",
            ],
        });

        const characters = characterData.map((character) =>
            character.get({ plain: true })
        );

        res.render('profile',{
            characters,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json(String(err));
      }
});




//-- if gets here when routing, throw 404
router.use((req, res) => {
    res
        .status(404)
        .json({
            request: {
                method: req.method,
                params: req.params,
                body: req.body,
                path: "./home-routes",
            },
            response: {
                status: 404,
                message: "Request failure. Page not found."
        
            }
    }).end();
    
});




module.exports = router;