let timer = document.querySelector(".timer");
let dayinfo = document.querySelector(".dayinfo");
setInterval(update,1000);

let months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function update(){
    const time = new Date();
    let hours = time.getHours();
    let med = hours>12 ? "PM" : "AM";
    hours = hours>12 ? hours%12 : hours==0 ? 12 : hours;
    hours = hours.toString().padStart(2,'0');
    let min = time.getMinutes().toString().padStart(2,'0');
    let sec = time.getSeconds().toString().padStart(2,'0');
    let date = time.getDate().toString().padStart(2,'0');
    let day = dayNames[time.getDay()];
    let month = months[time.getMonth()];
    let year = time.getFullYear().toString();
    //console.log(`${hours}:${min}:${sec}`);
    timer.textContent = `${hours} : ${min} : ${sec}  ${med}`;
    dayinfo.textContent = `${day}  ${month}  ${date}  ${year}`;

}
