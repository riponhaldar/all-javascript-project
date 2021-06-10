function age() {
  var er = document.getElementById('error')

  var inputAge = document.getElementById('date_birth').value
  if (inputAge === '') {
    er.innerText = '👇 nput date of birth'
  } else {
    er.innerText = '🔥nice'
  }
  var ud = Date.parse(inputAge)
  var nd = Date.now()

  var milliSec = nd - ud

  var min = 1000 * 60
  var hrs = min * 60
  var day = hrs * 24
  var year = day * 365

  var age = Math.round(milliSec / year)
  var month = age * 12
  var days = age * 365
  var hour = Math.round(milliSec / hrs)
  var sec = Math.round(milliSec / 1000)

  document.getElementById('age').innerText = age
  document.getElementById('month').innerText = month
  document.getElementById('days').innerText = days
  document.getElementById('hour').innerText = hour
  document.getElementById('sec').innerText = sec

  document.getElementById(
    'result'
  ).innerText = `${yy}, ${month}, ${days},${hour}, ${sec}`
}
//'JetBrains Mono', 'Fira Code', Hasklig, Consolas, 'Courier New', monospace
// 'cascadia code',Consolas,'Courier New',monospace
