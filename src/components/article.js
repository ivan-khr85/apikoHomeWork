import '../css/article.css';



export default function (article, users) {

	const { userId, id: postId, title, body } = article;

	const user = users.find(user => userId === user.id);
	const { name } = user;

	const toUpperCaseFirstLetter = str => str[0].toUpperCase() + str.slice(1);


	let newPost = document.createElement('div');
	newPost.className = 'post';

	newPost.innerHTML = (`
		<div>
			<div class='userName' id='${userId}'>${name}</div>
			<div>
				<h4 class='postTitle'>${toUpperCaseFirstLetter(title)}</h4 >
				<p class='postBody'>${toUpperCaseFirstLetter(body)}</p>
			</div>

			<div class='comments' id='Id=${postId}'>
				Open post with coments
			</div>
		</div>
	`);

	const root = document.getElementById('root');
	root.appendChild(newPost);

}	