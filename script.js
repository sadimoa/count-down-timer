const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#mins')
const seconds = document.querySelector('#seconds')


const newYears = '1 Jan 2023';

function countDown(){
 const newYearDate = new Date(newYears);
 const currentDate = new Date();

 const totalSeconds = (newYearDate - currentDate) /  1000
 const d = Math.floor(totalSeconds / 3600 / 24)
 const h = Math.floor(totalSeconds / 3600 % 24)
 const m = Math.floor(totalSeconds / 60 ) % 60
 const s = Math.floor(totalSeconds % 60)
days.innerHTML = d
hours.innerHTML = h
minutes.innerHTML = m
seconds.innerHTML = s
}

// initial call
setInterval(countDown,1000)


