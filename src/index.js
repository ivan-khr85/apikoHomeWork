import isDomElement from './isDomElement';
import isObject from './isObject';
import isString from './isString';
import isUndefined from './isUndefined';

const createElement = (tag, props, children) => {
	let result = null;

	try {

		if (isString(tag)) {
			result = document.createElement(`${tag}`);

			if (!isUndefined(props) && props !== null) {
				Object.keys(props).forEach((prop) => {

					switch (typeof props[prop]) {
						case 'string':
							result[prop] = props[prop];
							break;
						case 'object':
							Object.assign(result[prop], props[prop]);
							break;
						default:
							break;
					}
				});
			}
		} else {
			throw new SyntaxError('Value incorrect');
		}



		//work with child elements
		if (isString(children)) {
			const textNode = document.createTextNode(`${children}`);
			result.appendChild(textNode);
		}

		if (isObject(children)) {
			children.forEach((item) => {
				if (isDomElement(item)) {
					result.appendChild(item);
				} else if (isString(item)) {
					const textNode = document.createTextNode(`${item}`);
					result.appendChild(textNode);
				}
			});
		}
		return result;




	} catch (error) {
		alert(error);
	}
	return '<></>';
};

const render = (element, DomElem) => {

	if (isDomElement(element)) {
		DomElem.appendChild(element);
	} else {
		console.error('input value is not DOM Element');
	}
};


const React = {
	createElement,
	render,
};

const app =
	React.createElement('div', { style: { backgroundColor: 'red' } }, [

		React.createElement('span', undefined, 'Hello world'),

		React.createElement('br'),

		'This is just a text node',
		React.createElement('div', { textContent: 'Text content' })
	]);

React.render(
	app,
	document.getElementById('root')
);
