var contact = require('./contact');

function Contact(){
this.lists =function(req,res){
  contact.find(function(err,contacts){
    if (err)
    res.send(err);
    res.json(contacts);
  });
}
///////////////////////////////////////////////////
this.add=function(req,res){
    console.log(req.body);
  var c= new contact();
    console.log(c);
  c.name=req.body.name;
  c.phone=req.body.phone;
  c.email=req.body.email;
  c.save(function(err){
    if (err)
    res.send(err);
    res.send('contact added');

  });
};
this.list= function(req,res){
  contact.findById(req.params.id,function(err,c){
    if (err)
    res.send(err);
    res.json(c);
  });
};

////////////////////////////////////////////
this.update= function (req,res){
  contact.findById(req.params.id,function(err,c){
     if (err)
      res.send(err);
    c.name=req.body.name;
    c.phone=req.body.phone;
    c.email=req.body.email;
    c.save(function(err){
      if (err)
      res.send(err);
      res.send("upadted");
    });
  });

};
this.delete=function(req,res){
  contact.findById(req.params.id,function(err,c){
    if (err)
      res.send(err)
    c.remove(function(err){
      if (err)
      res.send(err);
      res.send('removed');
    })
  })
}




};
module.exports= new Contact();
