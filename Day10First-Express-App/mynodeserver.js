//import expree module
const express=require('express');

//Create an express app object
const app= express();

//Choose a port number
const PORT=8000

//Creating route   when someone visits http://localhost:8000/. this will run
app.get('/',(req,res)=>{
    res.end("Welcome to my firt express app!");
});

//Creating another route to show weather info
// Example: http://localhost:8080/weather/Bangalore

app.get('/weather/:location',(req,res)=>{
    //take value from url example Sedam
    const location=req.params.location;


    //Making a fake weather response
    const weather={
        city:location,
        temperature: '30°C',
    condition: 'Sunny' , 

    };
    res.json(weather);
});

//starting the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})