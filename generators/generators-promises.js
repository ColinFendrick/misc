
const apiCall = ({ timeout, name }) => new Promise(res =>
	setTimeout(() => res({ name }), timeout)
);


function* fetchUser(action) {
	yield apiCall(action);
	yield new Promise(res => res({ name: 'untimed colin' }));
	yield apiCall(action);
	yield { name: 'Colin is not promised' };
}

const fetched = fetchUser({ timeout: 1000, name: 'colin' });
fetched.next() // { value: Promise {<pending>}, done: false }
	.value.then(v => console.log(v)); // { name: 'colin' } after three seconds

fetched.next().value.then(v => console.log(v)); // This will return untimed colin BEFORE promise resolves
fetched.next().value.then(v => console.log(v)); // second promise yield
console.log(fetched.next().value); // This returns even before the untimed promise
