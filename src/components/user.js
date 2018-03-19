import '../css/user.css';

export default function User(userId) {

	let user = {};
	const root = document.getElementById('root');


	const getUser = (users, id) => {
		users.forEach((item) => {
			if (item.id === +id) {
				user = item;
			}
		});
	};


	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => {
			getUser(json, userId);
			const { name, email, address, phone, website } = user;



			let userInfo = document.createElement('div');
			userInfo.className = 'userInfo';

			userInfo.innerHTML = (`
				<div class='user'>
				<h3>${name}</h3>
					<div class='display'>
					<p>email: ${email}</p>
					<p>phone: ${phone}</p>
					</div>
					<div class='display'>
						<p>city: ${address.city}</p >
						<p>street: ${address.street}</p>
					</div>
					<a href='http://${website}/'>${website}</a>
						
				</div >

				<h3>Articles:</h3>
			`);


			const first = root.childNodes[0];
			root.insertBefore(userInfo, first);
		});
}