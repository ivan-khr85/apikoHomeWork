export default function renderComments(comments) {

	let commentsTitle = document.createElement('div');
	commentsTitle.className = 'commentsTitle';
	commentsTitle.innerHTML = '<h2>Comments</h2>';
	const root = document.getElementById('root');



	root.appendChild(commentsTitle);


	comments.forEach(comment => {


		const toUpperCaseFirstLetter = str => str[0].toUpperCase() + str.slice(1);


		let newComment = document.createElement('div');
		newComment.className = 'comment';

		newComment.innerHTML = (`
		<div>
			<div class='commentUserName'><h4>${comment.email}</h4></div>

			<div>
				<p class='commentBody'>${toUpperCaseFirstLetter(comment.body)}</p>
			</div>
		</div>
	`);

		root.appendChild(newComment);


	});
}