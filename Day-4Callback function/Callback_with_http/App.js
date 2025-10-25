const weather=require('./weather');

weather.getCurrentWeather('London',function(error,temp_f){
    if(error){
        console.log("Erro fetching weather:",error);
    }else{
        console.log(`The current weather in London is ${temp_f}°F`)
    }
})