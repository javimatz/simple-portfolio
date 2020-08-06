
const themeDots = document.getElementsByClassName('theme-dot');

const setTheme = (mode) => {
	switch (mode) {
		case 'blue':
			document.getElementById('theme-style').href = 'blue.css';
			break;
		case 'green':
			document.getElementById('theme-style').href = 'green.css';
			break;
		case 'purple':
			document.getElementById('theme-style').href = 'purple.css';
			break;
		default:
			document.getElementById('theme-style').href = '';
	}

	localStorage.setItem('theme', mode);
}

let theme = localStorage.getItem('theme');
(theme == null)? setTheme('light') : setTheme(theme);

for (let el of themeDots) {
	el.addEventListener('click', () => {
		let mode = el.dataset.mode;
		setTheme(mode);
	});
}

