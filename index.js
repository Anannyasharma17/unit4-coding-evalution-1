const express = require("express");

const app = express();

 app.use(logger);


// 1st is starting from here....................................................../////////////////////////////////


app.get("/books", (req, res)=>{
  return res.send({route: "/books"})  
});

app.listen(4100, ()=>{
    console.log("I am working properly for books!")
})

// 2nd is starting from here....................................................../////////////////////////////////

app.use(checkPermission);

app.get("/libraries", (req, res)=>{
    return res.send({route: "/libraries", permission: true})  
  });
  
  app.listen(4200, ()=>{
      console.log("I am working properly for libraries!")
  })

// 3rd is starting from here....................................................../////////////////////////////////


  app.get("/authors", (req, res)=>{
    return res.send({route: "/authors", permission: true })  
  });

  app.listen(4300, ()=>{
      console.log("I am working properly for authors!")
  })

// 4th is starting from here....................................................../////////////////////////////////


 function logger(req, res, next){
     if(req.path === "/books"){
         req.role = "books"
     }
     else if (req.path == "/libraries"){
         req.role = "libraries"
     }

     else if (req.path == "/authors"){
         req.role = "authors"
     }
     else {
         req.role = "Unknown error found!"
     }
     console.log("You called me");
     next();
 }

 app.listen(4600, ()=>{
     console.log("I am working for logger")
 })



// 5th is starting from here....................................................../////////////////////////////////

app.get("/libraries", checkPermission, function(req, res){
    res.send({route:"/libraries", permission: true})
})

app.get("/authors", checkPermission, function(req, res){
    res.send({route:"/authors", permission: true})
})

app.listen(4800, ()=>{
    console.log("You have achieve it!")
})


// 6th is starting from here....................................................../////////////////////////////////


function checkPermission(req, res, next){
        if(req.path === "/libraries"){
            req.role = "permission: true"
        }
        else if (req.path == "/authors "){
            req.role = "permission: true"
        }
        next();
}

app.listen(4700, ()=>{
    console.log("I am checking checkPermission")
})



