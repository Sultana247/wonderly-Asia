const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.WONDERLY_ASIA_USER}:${process.env.WONDERLY_ASIA_PASS}@cluster0.g6z9mma.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // mongodb database create
    const database = client.db("wanderlyasia");
    const userCollection = database.collection("usersasia");
    const touristSpotCollection = database.collection("touristSpots");
    const countryCollection = database.collection("countries");
    app.get('/', (req, res)=>{
    res.send('Wonderly Asia Server is running');
    });

    // create user on database
    app.post('/users', async(req, res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    // get all tourist spots
    app.get('/touristSpots', async(req, res)=>{
      const cursor =  touristSpotCollection.find({});
      const result = await cursor.toArray();
      res.send(result)
    })
    app.put('/touristSpots/:id', async(req, res)=>{
      const id = req.params.id;
      const user = req.body;
      const query = {_id : new ObjectId(id)};
      const option = {
        upsert : true
      };
      const updatedUser = {
        $set:{
         touristSpotName : user.touristSpotName,
        countryName : user.countryName,
        location : user.location,
        description : user.description,
        cost : user.cost,
        season : user.season,
        travelTime : user.value,
        visitors : user.value,
        email  : user.email,
        name : user.name,
        image : user.image
        }
      };
      const result= await touristSpotCollection.updateOne(query, updatedUser, option);
      res.send(result)
    });
    // get one tourist spot based on id
    app.get('/touristSpots/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const result = await touristSpotCollection.findOne(query);
      res.send(result);

    });
     // delete tourist spot
    app.delete('/touristSpots/:id', async(req, res)=>{
      const id =req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await touristSpotCollection.deleteOne(query);
      res.send(result)
    })
    // add tourist spots
    app.post('/touristSpots', async(req, res)=>{
      const newSpot = req.body;
      const result= await touristSpotCollection.insertOne(newSpot);
      res.send(result);
    });
    // find tourist spot by email
    app.get('/touristSpots/email/:email', async(req, res)=>{
      
      const email = req.params.email
      const query = {email : email}
      const result =  touristSpotCollection.find(query)
      const final = await result.toArray();
      res.send(final)
      
      // const result = await touristSpotCollection.findOne(query);
      // res.send(result);
    });
    // fetch by country name
    app.get('/touristSpots/country/:country', async(req, res)=>{
      
      const country = req.params.country
      console.log(country)
      const query = {countryName : country}
      const result =  touristSpotCollection.find(query)
      const final = await result.toArray();
      res.send(final)
      
     
    });
    // get countries
    app.get('/countries', async(req, res)=>{
      const cursor = countryCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });
     app.get('/countries/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
   
      const result = await countryCollection.findOne(query);
      res.send(result);
    });
    
  //  add countries
  app.post('/countries', async(req, res)=>{
    const newCountry = req.body;
    const result = await countryCollection.insertOne(newCountry);
    res.send(result)
  });
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, ()=>{
    console.log(`Wondely Asia is running on port: ${port} `);
})