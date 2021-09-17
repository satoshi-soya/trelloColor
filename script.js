// 颜色检测工具
const timer = setInterval(() => {
	const titles = [...document.getElementsByClassName('list-header-name-assist')];
	if (titles.length === 0) return;
	const isColorTitle = /^(\#\w{3})\s/;
	titles.forEach(el => {
		const title = el.innerText;
		const match = title.match(isColorTitle);
		if (!match) return;
		const color = match[1];
		if (!color) return;
		el.parentElement.parentElement.style.backgroundColor=color;
	});
	clearInterval(timer);
}, 500);
