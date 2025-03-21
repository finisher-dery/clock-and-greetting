let ad;
ad= prompt("Adınızı giriniz: ");

let myName = document.querySelector("#myName");
myName.innerHTML = ad;
let myClock = document.querySelector("#myClock");
function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    myClock.innerHTML = hour + ":" + minute + ":" + second + " " + days[day];
}

showTime();