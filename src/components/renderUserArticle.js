import takeNumberFromInjectStr from './takeNumberFromInjectStr';
import User from './user';
import removeElem from './removeElem';


export default function renderUserArticle(userId) {


	window.history.pushState(null, null, `/userId=${userId}`);

	const getURLjson = (id) => `https://jsonplaceholder.typicode.com/posts?userId=${takeNumberFromInjectStr(id)}`;

	const root = document.getElementById('root');


	fetch(getURLjson(userId))
		.then(response => response.json())
		.then(json => {

			removeElem(document.getElementsByClassName('post'));
			removeElem(document.getElementsByClassName('comment'));
			removeElem(document.getElementsByClassName('commentsTitle'));

			User(userId);

			json.forEach((nextArticle) => {
				const { id: postId, title, body } = nextArticle;

				const toUpperCaseFirstLetter = str => str[0].toUpperCase() + str.slice(1);


				let newPost = document.createElement('div');
				newPost.className = 'post';

				newPost.innerHTML = (`
					<div>
						<h4 class='userPostTitle'>${toUpperCaseFirstLetter(title)}</h4 >
						<p class='userPostBody'>${toUpperCaseFirstLetter(body)}</p>
						<div class='comments' id='Id=${postId}'>
							Open post with coments
						</div>
					</div>
				`);
				root.appendChild(newPost);

			});
		});
}