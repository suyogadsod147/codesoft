const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DB_URL;

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
    
    await client.connect();

    const database = client.db("punejobs");
    const puneJobsCollections = database.collection("puneJobsCollections");
    const users = database.collection("users");

    
    // app.post("/login",  async (req, res) => {
      
    // })

    app.post("/sign-up", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      console.log(body);
      const result = await users.insertOne(body);

      if(result.insertedId){
        return res.status(200).send(result);
      }else{
        return res.status(404).send(
          {
            massage : "can't insert try again later",
            status : "false",
          });

      }

    })

    

    // loginUser
    app.post('/login', (req, res) => {
      const { email, password } = req.body;
    
      // Find the user with the provided email
      const user = users.find((u) => u.email === email);
      
      // Check if the user exists and the password matches
      if (user && users.password === password) {
        res.status(200).json({ message: 'Login successful!', user: { id: user.id, name: user.name, email: user.email } });
      } else {
        res.status(401).json({ error: 'Invalid credentials. Please check your email and password.' });
      }
    });
    





    // getalljobs
    app.get("/all-jobs", async (req, res) =>{
      const jobs = await puneJobsCollections.find({}).toArray();
      res.send(jobs);
    })



    // getPerticularJob
    app.get("/all-jobs/:id", async (req, res) =>{
      const id = req.params.id;
      const job = await puneJobsCollections.findOne({
        _id : new ObjectId(id),
      })
      res.send(job);
    })



    // update job
    app.patch("/update-job/:id", async (req, res)=>{
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id : new ObjectId(id)};
      const options = {upsert : true};
      const updateDoc = {
        $set : {
          ...jobData
        },
      };
      const result = await puneJobsCollections.updateOne(filter , updateDoc , options);
      res.send(result);

    })



    // postJobs
    app.post('/post-jobs', async (req, res) =>{
          const body = req.body;
          body.createAt = new Date();
          console.log(body);
          const result = await puneJobsCollections.insertOne(body);

          if(result.insertedId){
            return res.status(200).send(result);
          }else{
            return res.status(404).send(
              {
                massage : "can't insert try again later",
                status : "false",
              });

          }

    });



    // getjob
    app.get("/my-jobs/:email", async (req, res) => {
      // console.log(req.params.email);
      const jobs = await puneJobsCollections.find({postedBy: req.params.email}).toArray(); 
      res.send(jobs);
    })



    // delete jobs
    app.delete('/job/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const result = await puneJobsCollections.deleteOne(filter);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req, res) => {
    res.send('Welcome Devloper ');
})


app.listen( PORT , (req, res) => {
    console.log('listening on port ' + PORT);
})