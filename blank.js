console.log("Script active");
chrome.storage.sync.get('favoriteColor',(data)=>{
    if(data.favoriteColor){
        document.body.style.backgroundColor = data.favoriteColor;
    }
    else{
        document.body.style.backgroundColor = "#121212";
    }
});