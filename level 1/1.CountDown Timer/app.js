const stime = 1

let time = stime * 60

const countD = document.getElementById('count')

countDown = () => {
  const min = Math.floor(time / 60)

  let sec = time % 60
  sec = sec < 10 ? '0' + sec : sec

  countD.innerText = ` ${min}: ${sec}`
  time--
}

var id = setInterval(countDown, 1000)
