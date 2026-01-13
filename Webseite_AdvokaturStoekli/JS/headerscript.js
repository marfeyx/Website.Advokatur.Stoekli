(function () {
	const nav = document.querySelector('.nav');
	const toggle = document.querySelector('.nav__toggle');
	const navLinks = document.getElementById('nav-links');
	if (!nav || !toggle || !navLinks) {
		return;
	}
	nav.classList.add('supports-toggle');
	toggle.addEventListener('click', function () {
		const expanded = toggle.getAttribute('aria-expanded') === 'true';
		const nextState = !expanded;
		toggle.setAttribute('aria-expanded', String(nextState));
		nav.classList.toggle('is-open', nextState);
	});
	navLinks.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', function () {
			toggle.setAttribute('aria-expanded', 'false');
			nav.classList.remove('is-open');
		});
	});
})();
