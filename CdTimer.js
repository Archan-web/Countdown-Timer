function adjustVal(value){
    return (value<10)?"0"+value:value;
}
function countdown(){
    var christmasDate= new Date(2020,11,25);
    var currentDate= new Date();
    var diff= (christmasDate-currentDate);
    var totalSeconds= Math.floor(diff/1000);
    var seconds= totalSeconds%60;
    var minutes= Math.floor((totalSeconds%3600)/60);
    var hours= (Math.floor(totalSeconds/3600)%24);
    var days=Math.floor(totalSeconds/(3600*24));
    document.getElementById('d-left').innerHTML=adjustVal(days);
    document.getElementById('h-left').innerHTML=adjustVal (hours);
    document.getElementById('m-left').innerHTML=adjustVal (minutes);
    document.getElementById('s-left').innerHTML=adjustVal (seconds);
}
setInterval(countdown,1000);