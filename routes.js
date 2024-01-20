const express = require("express");
// const AdvertisementModel = require("./models/modelAdvertisement");
const RodModel = require("./models/modelRod");
const ActorsModel = require("./models/modelActors");
const SliderModel = require("./models/modelSlider");
const BlogModel = require("./models/modelBlog");
const SecondBlockModel = require("./models/modelSecondBlock");
const ReviewModel = require("./models/modelReview");
const ServiceModel = require("./models/modelService");
const ImageServiceModel = require("./models/modelImageService");
const FooterModel = require("./models/modelFooter");
// const KeyWordsModel = require("./models/modelKeyWords");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs');
const app = express();
const mongoose = require("mongoose");

// var cors = require('cors')

// var corsOptions = {
//   origin: 'http://localhost:8100',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// filter 1156

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/main.html");
  });

// serve your css as static
app.use(express.static(__dirname));  
app.get("/privacy_policy", async (req, res) => {
    // res.json({ message: "Privacy Policy." });
    res.sendFile(__dirname + "/privacy_policy.html");
  
  });
  app.get("/delete_data", async (req, res) => {
    // res.json({ message: "Privacy Policy." });
    res.sendFile(__dirname + "/delete_data.html");
  //   fs.readFile('./privacy_policy.html', null, function (error, data) {
  //     if (error) {
  //         // response.writeHead(404);
  //         respone.write('Whoops! File not found!');
  //     } else {
  //         response.write(data);
  //     }
  //     response.end();
  // });
  });

//////////////////////////////////Actors//////////////////////////////////////////////////////////////////////////////////

app.post("/add_Actors",async (request, response) => {
  const data = new ActorsModel(request.body);
console.log('/add_Actors',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_ActorsAll", async (request, response) => {
  console.log(request.query)
    // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
    const data = await ActorsModel.find().limit(20);
    console.log(data)
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Actors", async (request, response) => {
  console.log(request.query)
    // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
    const data = await ActorsModel.find(request.query).limit(20);
    console.log(data)
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Actors/:id", async (request, response) => {
  const { id } = request.params;
  const data = await ActorsModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Actors/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('99',id,request.body)
  
  try {
      data = await ActorsModel.findByIdAndUpdate(id,
      
      {$set:request.body}

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Actors/:id", async (request, response) => {
  try {
    const data = await ActorsModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Rod///////////////////////////////////////////////////////////////////
app.post("/add_Rod",async (request, response) => {
  console.log('125',request.body)
  const data = new RodModel(request.body);
  console.log('127',data)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Rod", async (request, response) => {
  const data = await RodModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Rod/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('130',id,request.body)
  
  try {
    const data = await RodModel.findByIdAndUpdate(id,{
      
      title: request.body.tittle,
      slug: request.body.slug
  },{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Rod/:id", async (request, response) => {
  try {
    console.log('147',request.params.id)
    const data= await RodModel.findByIdAndDelete(request.params.id,{new: true});

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Slider///////////////////////////////////////////////////////////////////
app.post("/add_Slider",async (request, response) => {
  const data = new SliderModel(request.body);
console.log('/add_Slider',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Slider", async (request, response) => {
  const category = await SliderModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_Slider/:id", async (request, response) => {
  try {
    const processor= await SliderModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Blog///////////////////////////////////////////////////////////////////
app.post("/add_Blog",async (request, response) => {
  console.log('207',request.body)
  const data = new BlogModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Blog", async (request, response) => {
  const category = await BlogModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Blog/:id", async (request, response) => {
  const { id } = request.params;
  const data = await BlogModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Blog/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('238',id,request.body)
  
  try {
    const data = await BlogModel.findByIdAndUpdate(id,
      {
        $set:request.body
      }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Blog/:id", async (request, response) => {
  try {
    const processor= await BlogModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////SecondBlock///////////////////////////////////////////////////////////////////
app.post("/add_SB",async (request, response) => {
  const category = new SecondBlockModel(request.body);
  console.log('268',category)
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_SB", async (request, response) => {
  
  const category = await SecondBlockModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_SB/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log(id,request.body)
  
  try {
    const product = await SecondBlockModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_SB/:id", async (request, response) => {
  try {
    const processor= await SecondBlockModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Review///////////////////////////////////////////////////////////////////
app.post("/add_Review",async (request, response) => {
  const data = new ReviewModel(request.body);
    console.log('312',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Review", async (request, response) => {
  const data = await ReviewModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Review/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log(id,request.body)
  
  try {
    const data = await ReviewModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Review/:id", async (request, response) => {
  try {
    const data = await ReviewModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Service///////////////////////////////////////////////////////////////////
app.post("/add_Service",async (request, response) => {
  const category = new ServiceModel(request.body);
    console.log('363',request.body)
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Service", async (request, response) => {
  const category = await ServiceModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Service/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('383',id,request.body)
  
  try {
    const product = await ServiceModel.findByIdAndUpdate(id,
      
      {
        title: request.body.title,
        slug: request.body.slug
        }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Service/:id", async (request, response) => {
  try {
    const data = await ServiceModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////ImageService///////////////////////////////////////////////////////////////////
app.post("/add_ImageService",async (request, response) => {
  console.log('405',request.body)
  const data = new ImageServiceModel(request.body);
    
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_ImageService", async (request, response) => {
  const data = await ImageServiceModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_ImageService/:id", async (request, response) => {
  try {
    const data = await ImageServiceModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Footer///////////////////////////////////////////////////////////////////
app.post("/add_Footer",async (request, response) => {
  const data = new FooterModel(request.body);
    console.log('437',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Footer", async (request, response) => {
  const data = await FooterModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Footer/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log(id,request.body)
  
  try {
    const data = await FooterModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Footer/:id", async (request, response) => {
  try {
    const data = await FooterModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////////Email//////////////////////////////////////////////////////////////
// app.post("/createEmailRegisterClient",async (request, response) => {
//   const clientEmail = new ClientEmailModel(request.body);
//   // console.log('clientEmail',request.body)
//   try {
//     await clientEmail.save();
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/getEmail/:email', async (request, response) => {
//   const clientEmail = await ClientEmailModel.find({'email':request.params.email});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.delete("/delete_email/:email", async (request, response) => {
//   console.log('445,',request.query.id)
 
//   const clientEmail = await ClientEmailModel.deleteMany({'email':request.params.email});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
////////////////////////////////////////WorkerBox/////////////////////////////////////////////////////////////
// app.post("/createWorkerBox",async (request, response) => {
//   const WorkerBox = new WorkerBoxModel(request.body);
//   // console.log('clientEmail',request.body)
//   try {
//     await WorkerBox.save();
//     response.send(WorkerBox);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/getWorkerBox/:email', async (request, response) => {
//   const clientEmail = await  WorkerBoxModel.find({'email':request.params.email});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put("/updateWorkerBox/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('477',id,request.body)
  
//   try {
//     const product = await WorkerBoxModel.findByIdAndUpdate(id,
      
//       {_profil:request.body}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(product);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.put("/updateWorkerBoxSendMail/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('495',id,request.body)
  
//   try {
//     const product = await WorkerBoxModel.updateOne({_id:id},
      
//      { $push:{_sendMail:{$each:[request.body]}}}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(product);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////KeyWords/////////////////////////////////////////////////////////////
// app.post("/add_KeyWords",async (request, response) => {
//   const category = new KeyWordsModel(request.body);
//     console.log('363',request.body)
//   try {
//     await category.save();
//     response.send(category);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// }); 
// app.get("/get_KeyWords", async (request, response) => {
//   const category = await KeyWordsModel.find({});
  
//   try {
//     response.send(category);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put("/update_KeyWords/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('383',id,request.body)
  
//   try {
//     const product = await KeyWordsModel.findByIdAndUpdate(id,
      
//       {
//         title: request.body.title,
//         slug: request.body.slug
//         }

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(product);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.delete("/delete_KeyWords/:id", async (request, response) => {
//   try {
//     const processor= await KeyWordsModel.findByIdAndDelete(request.params.id);

//     if (!processor) response.status(404).send("No item found");
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////







module.exports = app;