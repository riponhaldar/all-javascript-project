let time = 10
const value = document.getElementById('time')
const btn = document.querySelector('.btn')
let x = setInterval(function () {
  value.innerText = time + 'sec'
  time--

  if (time < 0) {
    clearInterval(x)
    btn.innerText = 'click'
    btn.style.cursor = 'pointer'
    btn.addEventListener('click', function () {
      alert('hey btn work')
    })
  }
}, 1000)
