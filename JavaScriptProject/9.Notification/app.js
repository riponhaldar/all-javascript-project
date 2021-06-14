const btn = document.getElementById('btn')
const notifi = document.getElementById("notifi");

btn.addEventListener('click', creatNotifi)

function creatNotifi() {
	const notif = document.createElement('div');
	notif.classList.add("notification");

	notif.innerText = "oh! noooo 🥺";

	notifi.appendChild(notif);

	setTimeout(() => {
		notif.remove()
	}, 2000);
};

