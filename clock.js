// Starting JavaScript
setInterval(() => {
    let date=new Date();
    let hourTime=date.getHours();
    let minTime=date.getMinutes();
    let secTime=date.getSeconds();
    let hourRotation= 30*hourTime + minTime/2 + secTime/120;
    let minRotation= 6*minTime + secTime/10;
    let secRotation= 6*secTime;

    hour.style.transform=`rotate(${hourRotation}deg)`;
    minutes.style.transform=`rotate(${minRotation}deg)`;
    seconds.style.transform=`rotate(${secRotation}deg)`;
}, 1000);

