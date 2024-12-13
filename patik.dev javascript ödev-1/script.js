let myName = document.getElementById("myName");
myName.innerHTML = prompt("Adiniz nedir:");

let myClock = document.querySelector("#myClock");

function showTime() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Ayın sıfır tabanlı olmadığından 1 ekliyoruz
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Tek haneli sayıları iki haneliye çevirme
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}

function animateClock() {
    var currentDate = new Date();
    var seconds = currentDate.getSeconds();
    var minutes = currentDate.getMinutes();
    var hours = currentDate.getHours() % 12; // Saat bilgisini 12 saat formatına dönüştürme

    // Hareketli saniye 
    var secondHand = document.querySelector('.second-hand');
    var secondDegrees = ((seconds / 60) * 360) + 90; // 90 derece eklenmesi için
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Hareketli dakika 
    var minuteHand = document.querySelector('.minute-hand');
    var minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // 90 derece eklenmesi için
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // Hareketli saat 
    var hourHand = document.querySelector('.hour-hand');
    var hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // 90 derece eklenmesi için
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Saati güncelle ve animasyonu çağır
function updateTime() {
    myClock.innerHTML = showTime();
    animateClock();
}

// Her saniyede bir zamanı güncelle
setInterval(updateTime, 1000);

// İlk çalıştırmak için
updateTime();