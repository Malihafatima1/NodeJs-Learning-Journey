
const https=require('https');


function getCurrentWeather(location, resultCallback){
    const apiKey = 'YOUR_API_KEY';
    const url=1`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    https.get(url, (res)=>{
        let data=''

        res.on("data", (chunk)=>{
            data+=chunk;
        });

        res.on("end",()=>{
            try{
                const weather=JSON.parse(data);
               const temp_f  =weather.current.temp_f;
               resultCallback(null,temp_f);
            } catch(error){
                resultCallback(error,temp_f);
            }
        });
    }).on("error",(error)=>{
        resultCallback(error,null);
    });

}

module.exports={ getCurrentWeather };