export default function addLoad() {
	const load = document.createElement('div');
	load.id = 'loading';
	load.innerHTML = ('Loading...');

	document.getElementById('addLoad').appendChild(load);
}