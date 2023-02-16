let express = require ('express');
let router = express.Router();

let mongoose = require('mongoose');
//create a refrence to the model
let contact = require('../model/contacts');
module.exports.displaycontactList = (req,res,next)=>{
    contact.find((err,contactList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(contactList);
         res.render('contact/list', {title:'contacts', contactList:contactList});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contact/add',{title:'Add contact'})

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
        res.redirect('/contactList');
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
            res.render('contact/edit',{title:'Edit contact', contact: contactToEdit});
            
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id
    console.log(req.body);
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
            res.redirect('/contactList');
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
            res.redirect('/contactList');
        }
    });
}
    