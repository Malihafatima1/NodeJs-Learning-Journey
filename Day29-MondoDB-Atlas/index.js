import { MongoClient, mongoClient } from 'mongodb'

const url=""//Provide the url
const database="School"
const collection="student"
const client =new MongoClient(url)
client.connect().then(()=>{
    console.log("DB conencted")
})


 async function dbconnection(){

   const database= client.db(database)
   const collectionRlt=db.collection(collection)
   const result= await collectionRlt.find().toArray()
   console.log(result)
}

dbconnection()


