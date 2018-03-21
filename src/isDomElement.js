export default function isDomElement(obj) {
	if ((typeof obj === 'object') &&
		(obj.nodeType === 1) && (typeof obj.style === 'object') &&
		(typeof obj.ownerDocument === 'object')) {
		return true;
	}
	return false;
}