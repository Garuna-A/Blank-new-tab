document.getElementById('save').addEventListener('click',()=>{
    const color = document.getElementById('bgColor').value;
    chrome.storage.sync.set({favoriteColor:color},()=>{
        alert("Color saved");
    })
})

chrome.storage.sync.get('favoriteColor', (data)=>{
    if(data.favoriteColor){
        document.getElementById('bgColor').value = data.favoriteColor;
    }
})