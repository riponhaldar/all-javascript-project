const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const sound = document.getElementById('boo')
// Add event listener
closedFace.addEventListener('click', () => {
	if (openFace.classList.contains('open')) {
		openFace.classList.add('active');
		closedFace.classList.remove('active');
	}
	// sound
	sound.play()
	// vibret
	navigator.vibrate(100)
	// dark mode
	document.body.classList.add('dark')
});




// Add event listener 2nd image
openFace.addEventListener('click', () => {
	if (closedFace.classList.contains('closed')) {
		closedFace.classList.add('active');
		openFace.classList.remove('active');
	}
	// sound pause
	sound.pause();
	// sound.currentTime = 0;
	// vibret
	navigator.vibrate(100)
	// dark mode off
	document.body.classList.remove('dark')
})


document.querySelector('p').addEventListener('click', () => {
	alert('click miku img')
})
