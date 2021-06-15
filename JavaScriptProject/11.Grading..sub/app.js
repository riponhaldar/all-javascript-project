
const div = document.getElementById('alert')
const btn = document.getElementById('btn')
const form = document.querySelector('#form')


btn.addEventListener('click', () => {
	const sub1 = document.getElementById('sub1').value
	const sub2 = document.getElementById('sub2').value
	const sub3 = document.getElementById('sub3').value
	const sub4 = document.getElementById('sub4').value
	const sub5 = document.getElementById('sub5').value
	if (sub1 === '') {
		alert('enter your marks')
	}

	if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
		var red = document.createElement('p')
		red.innerText = 'pls enter you marks ..<100'
		div.appendChild(red)

	} else {
		// total number
		let totalN = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5)
		div.innerText = `total number ${totalN}`


		// show percen
		const percen = (totalN / 500) * 100;
		const per = document.createElement('h4')
		per.innerText = `total % ${percen}`

		// gredes
		div.appendChild(per)
		let gredes = '';
		if (percen <= 100 && percen >= 80) {
			gredes = 'A'
		} else if (percen <= 79 && percen >= 60) {
			gredes = 'B'

		} else if (percen <= 59 && percen >= 49) {
			gredes = 'C'
		} else {
			gredes = 'D'

		}
		// show gredes
		const gred = document.createElement('h5')
		gred.innerText = ` ${gredes}`
		div.appendChild(gred)

	}

})



