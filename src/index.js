import postWithComments from './components/postWithComments';
import renderUserArticle from './components/renderUserArticle';
import Article from './components/article';


const getJson = (url) => fetch(url).then((response) => response.json());

let users = [];
let posts = [];



const renderAllArticles = () => {
	window.history.pushState(null, '', 'articles');
	Promise.all([
		getJson('https://jsonplaceholder.typicode.com/posts'),
		getJson('https://jsonplaceholder.typicode.com/users')
	]).then((result) => {
		if (document.getElementById('loading')) {
			document.getElementById('loading').remove();
		}

		posts = result[0].slice();
		users = result[1].slice();

		posts.forEach((objPost) => {
			Article(objPost, users);
		});
	});
};




document.getElementById('root').onclick = function (event) {
	const target = event.target;
	if (target.className === 'comments') {
		postWithComments(target.id, posts, users);
	} else if (target.className === 'userName') {
		renderUserArticle(target.id);
	} else {
		return;
	}
};

renderAllArticles();