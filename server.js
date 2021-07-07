const http = require("http");
const fs = require("fs");
var requests = require("requests");  //npm package

const homeFile = fs.readFileSync("home.html", "utf-8");

//maping multiple array data
const replaceVal= (tempVal, orgVal)=>{
    let curData = tempVal.replace("{%location%}",orgVal.name);
     curData = curData.replace("{%country%}",orgVal.sys.country);
     curData = curData.replace("{% tempval %}",Math.round(orgVal.main.temp - 273.15));
     curData = curData.replace("{% tempmin %}",Math.round(orgVal.main.temp_min - 273.15));
     curData = curData.replace("{% tempmax %}",Math.round(orgVal.main.temp_max - 273.15));
     curData = curData.replace("{%tempstatus%}",orgVal.weather[0].main);
    //  console.log(orgVal.weather[0].main);
     return curData;
};

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Bhilwara&appid=755cd87d0494abeed60f7830c021f4cb',
        )
        .on('data', (chunk)=> {            // receiving data chunk by chunk
            const objData = JSON.parse(chunk);
            const arrObjData = [objData];  //converting object data into array form
            const realTimeData = arrObjData.map((val) =>
            replaceVal(homeFile, val)).join("");
            
            res.write(realTimeData);
            
            // console.log(objData);
        })
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
        res.end();          
        });
      }
});
server.listen(8080, "127.0.0.1");
