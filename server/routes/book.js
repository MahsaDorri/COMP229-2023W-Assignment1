let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport=require('passport');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
router.get('/', requireAuth,bookController.displayBookList);

router.get('/add', requireAuth, bookController.displayAddPage);

router.post('/add', requireAuth, bookController.processAddPage);

router.get('/edit/:id', requireAuth, bookController.displayEditPage);

router.post('/edit/:id', requireAuth, bookController.processEditPage);

router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;