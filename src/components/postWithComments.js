import Article from './article';
import removeElem from './removeElem';
import renderComments from './renderComments';
import '../css/comment.css';


export default function postWithComments(postId, posts, users) {
	let post = {};

	window.history.pushState(null, null, `/post${postId}`);



	const getSingelPost = (id, articles) => {
		articles.forEach((article) => {
			if (`Id=${article.id}` === postId) {
				post = { ...article };
			}
		});
	};

	removeElem(document.getElementsByClassName('post'));

	const root = document.getElementById('root');
	while (root.hasChildNodes()) {
		root.removeChild(root.firstChild);
	}



	const getJson = (url) => fetch(url).then((response) => response.json());

	if (posts && users) {
		const renderPost = () => {
			Promise.all([
				getJson('https://jsonplaceholder.typicode.com/posts'),
				getJson('https://jsonplaceholder.typicode.com/users')
			]).then((result) => {
				if (document.getElementById('loading')) {
					document.getElementById('loading').remove();
				}

				posts = result[0].slice();
				users = result[1].slice();

				getSingelPost(postId, posts);

				Article(post, users);
				removeElem(document.getElementsByClassName('comments'));
				fetch(`https://jsonplaceholder.typicode.com/comments?post${postId}`)
					.then(response => response.json())
					.then(comments => {

						renderComments(comments);
					});
			});
		};
		renderPost();
	} else {
		fetch(`https://jsonplaceholder.typicode.com/comments?post${postId}`)
			.then(response => response.json())
			.then(comments => {


				Article(post, users);
				removeElem(document.getElementsByClassName('comments'));

				renderComments(comments);
			});
	}
}
