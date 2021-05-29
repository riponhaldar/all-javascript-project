var yyyy = document.getElementById('yyyy')
var date = document.getElementById('date')
var month = document.getElementById('month')
var btn = document.getElementById('btn')

btn.addEventListener('click', function (event) {
  function countDown() {
    event.preventDefault()
    var year = yyyy.value.trim()
    var dat = date.value
    var mont = month.value
    var today = new Date()
    if (year === '') {
      document.getElementById('oi').innerText = 'type year '
    } else {
      document.getElementById('ok').innerText = '200'
    }
    var eventDate = new Date(`${mont} ${dat},${year} 00:00:00`)
    // var eventDate = new Date('may 1,2022 00:00:00')

    var currentTime = today.getTime()
    var eventTime = eventDate.getTime()
    var remTime = eventTime - currentTime
    // console.log(remTime)
    var sec = Math.floor(remTime / 1000)
    var min = Math.floor(sec / 60)
    var hrs = Math.floor(min / 60)
    var days = Math.floor(hrs / 24)

    hrs = hrs % 24
    min %= 60
    sec %= 60
    var totalhrs = Math.floor(days * 24 + hrs)
    hrs = hrs < 10 ? '0' + hrs : hrs
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    document.getElementById('totalhrs').innerHTML = totalhrs
    document.getElementById('days').innerHTML = days
    document.getElementById('hrs').innerHTML = hrs
    document.getElementById('min').innerHTML = min
    document.getElementById('sec').innerHTML = sec

    setTimeout(countDown, 1000)
  }
  countDown()
})
//  Time
function showTime() {
  var date = new Date()
  var h = date.getHours() // 0 - 23
  var m = date.getMinutes() // 0 - 59
  var s = date.getSeconds() // 0 - 59
  var session = 'AM'

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    session = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  var time = h + ':' + m + ':' + s + ' ' + session
  document.getElementById('txt').innerText = time
  document.getElementById('txt').textContent = time

  setTimeout(showTime, 1000)
}

showTime()
