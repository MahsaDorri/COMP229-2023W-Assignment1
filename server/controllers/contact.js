let express = require ('express');
let router = express.Router();

let mongoose = require('mongoose');
//create a refrence to the model
let contact = require('../model/contact');
module.exports.displayContactList = (req ,res, next) => {
    contact.find((err,contactlist)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(contactlist);
         res.render('contact/list', {title:'Contact List', ContactList: ContactList});
        }
    }).sort({name :1});
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contact/add',{title:'Add contact', displayName: req.user ? req.user.displayName : ''});

}

module.exports.processAddPage = (req,res,next)=>{
    let newcontact = contact({
        "name": req.body.name,
        "email":req.body.email,
        "number":req.body.number
       
    });
    contact.create(newcontact,(err,contact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    contact.findById(id,(err,contactToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/edit',{title:'Edit contact', contact: contactToEdit,
            displayName: req.user ? req.user.displayName : ''});            
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id
 
    let updatedcontact = contact({
        "_id":id,
        "name":req.body.name,
        "email":req.body.email,
        "number":req.body.number
        
    });
    contact.updateOne({_id:id}, updatedcontact,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete= (req,res,next)=>{
    let id = req.params.id;
    contact.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
}
    