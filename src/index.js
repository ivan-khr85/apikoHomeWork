
import isDomElement from './isDomElement';
import isObject from './isObject';
import isString from './isString';
import isUndefined from './isUndefined';

const createElement = (tag, props, children) => {
	let result = null;


	if (!isUndefined(tag)) {
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
		console.error('Don`t have value "tag"');
	}



	//work with child value
	if (isString(children)) {
		let textNode = document.createTextNode(`${children}`);
		result.appendChild(textNode);
	}

	if (isObject(children)) {
		children.forEach((item) => {
			if (isDomElement(item)) {
				result.appendChild(item);
			} else if (isString(item)) {
				let textNode = document.createTextNode(`${item}`);
				result.appendChild(textNode);
			}
		});
	}



	return result;
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
		React.createElement('div', { textContent: 'Text content' }),
	]);

React.render(
	app,
	document.getElementById('root')
);
