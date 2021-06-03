let count = 0
// reste
// dsecress
// increase

const value = document.getElementById('count')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains('increase')) {
      count++
    } else if (styles.contains('dsecress')) {
      count--
    } else {
      count = 0
    }

    value.textContent = count
  })
})

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const styles = e.currentTarget.classList
// if (styles.contains('increase')) {
//   count++
// } else if (styles.contains('dsecress')) {
//   count--
// } else {
//   count = 0
// }

// value.textContent = count
//   })
// })
