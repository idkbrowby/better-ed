export function handle({ event, resolve }) {
	const user = event.cookies.get('user');
	event.locals.user = user ? JSON.parse(atob(user)) : null;
	return resolve(event);
}