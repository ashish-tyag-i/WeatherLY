class Alertrec{
    constructor(){
        createAlert();
    }
}
function createAlert(){
    Notification.requestPermission().then(perm=>{
        if(perm==="granted"){
            let temp=new Map();
           // console.log(temp);
            let alerts=[]
            alerts.push(temp);
            manageAlert(alerts);
        }
        else{
            alert("Please allow notifications to receive alerts")
        }
    });
    // let temp=new Alertrec();
    // let alerts=[]
    // alerts.push(temp);
}
function manageAlert(alerts){
    let i=0;
    for(i in alerts){
        console.log(data.main)
        if(alerts[i].temp>data.main.temp){
            new Notification("Temperature is higher than threshold",{body:""});
        }
        if(alerts[i].temp<data.main.temp){
            alert("Temperature is lower than threshold");
        }
        if(alerts[i].humidity>data.main.humidity){
            alert("Humidity is higher than threshold");
        }
        if(alerts[i].humidity<data.main.humidity){
            alert("Humidity is lower than threshold");
        }
        // if(alerts[i].visibility>){
        //     alert("Visibility is higher than threshold");
        // }
        // if(alerts[i].visibility<){
        //     alert("Visibility is lower than threshold");
        // }
        if(alerts[i].windspeed>data.wind.speed){
            alert("Wind Speed is higher than threshold");
        }
        if(alerts[i].windspeed<data.wind.speed){
            alert("Wind Speed is lower than threshold");
        }
        if(alerts[i].feelslike>data.main.feels_like){
            alert("Feels Like is higher than threshold");
        }
        if(alerts[i].feelslike<data.main.feels_like){
            alert("Feels Like is lower than threshold");
        }
        if(alerts[i].rain in data.weather[0].description){
            alert("Rain expected");
        }
        // if(alerts[i].rain<document.querySelector(".Rain").innerHTML){
        //     alert("Rain is lower than threshold");
        // }
    }
}