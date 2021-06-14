const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
btn.addEventListener('click', () => {
	nav.classList.toggle('active')
	btn.classList.toggle('active')

	// dark mode hehehe -_+
	document.body.classList.toggle('dark')
})
