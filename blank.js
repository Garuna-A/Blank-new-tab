console.log("Script active");
chrome.storage.sync.get('favoriteColor',(data)=>{
    if(data.favoriteColor){
        document.body.style.backgroundColor = data.favoriteColor;
    }
    else{
        document.body.style.backgroundColor = "#121212";
    }
});

function UpdateTime(){
    const now = new Date();
    const timeString = now.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:true
    })
    const [time, period] = timeString.split(' ');

    const container = document.getElementsByClassName('time-container')[0];
    if(container){
        container.innerHTML=`<div>${time}<sup style="font-size: 2rem; margin-left: 10px; margin-top:0px">${period}</sup></div>`
    }
}
UpdateTime();
setInterval(UpdateTime,1000);