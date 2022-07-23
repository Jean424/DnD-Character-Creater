const router = require('express').Router();
const { User, Character, Ability } = require('../../models');
const withAuth = require('../../utils/auth');

// get all character
router.get('/', (req, res) => {
    Character.findAll({
        attributes: [
            'id',
            'user_id',
            'name',
            'race',
            'class',
            'gender',
            'age',
            'proficiency_bonus',
            'alignment',
            'languages',
            'proficiencies',
            
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Ability,
                attributes: [ 'name', 'score', 'modifier']
            }
        ]
    })
        .then(characterData => res.json(characterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single character
router.get('/:id', (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'user_id',
            'name',
            'race',
            'class',
            'gender',
            'age',
            'proficiency_bonus',
            'alignment',
            'languages',
            'proficiencies',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Ability,
                attributes: [ 'name', 'score', 'modifier']
            }
        ]
    })
        .then(characterData => {
            if (!characterData) {
                res.status(404).json({
                    message: 'character not found!'
                });
                return;
            }
            res.json(characterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create character
router.post('/', withAuth, (req, res) => {
    Character.create({
        user_id: req.session.user_id,
        name: req.body.name,
        race: req.body.race,
        class: req.body.class,
        gender: req.body.gender,
        age: req.body.age,
        player_level: req.body.player_level,
        proficiency_bonus: req.body.proficiency_bonus,
        alignment: req.body.alignment,
        languages: req.body.languages,
        proficiencies: req.body.proficiencies,
        image_link: req.body.image_link
    })
        .then(characterData => res.json(characterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

//updated existing character
router.put('/:id', withAuth, (req, res) => {
    Character.update({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        player_level: req.body.player_level
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(characterData => {
            if (!characterData) {
                res.status(404).json({
                    message: 'character not found!'
                });
                return;
            }
            res.json(characterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete character
router.delete('/:id', withAuth, async (req, res) => {
    console.log("delete route hit")
    
    //-- if not logged in, can't delete
    if(!req.session.loggedIn){ 
        console.log("not logged in, go home")
        // document.redirect('/');
        return;
    }
    
    //-- verify characters user_id associated matches session_user_id  
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(characterData => {
        if (!characterData) {
            res.status(404).json({
                message: 'character not found!'
            });
            console.log('nothing to delete')
            return;
        }
        console.log("delete")
        res.json(characterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
        
    
    
});

module.exports = router;