export default function removeElem(elems) {
	return [...elems].forEach(el => el.remove());
}