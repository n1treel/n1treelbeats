var xml = new XMLHttpRequest;
xml.open ("GET" , "https://api.ipify.org");
xml.send();
xml.addEventListener("loadend", loaded);


function loaded(e){
    WriteDb(xml.responseText);
}
function WriteDb(ip){
    
    var num = 0;
    firebase.database().ref("Ip").once("value").then(function(snap){

        num= snap.numChildren();
        num++;
        firebase.database().ref("Ip").child(num.toString()).set({
            Ip:ip
        });


    })

}