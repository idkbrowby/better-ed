import { redirect } from '@sveltejs/kit';

export async function load({ locals,params }) {
	// if (!locals.user) {
	// 	throw redirect(307, '/login');
	// }
	
	return {project:params.project,milestone:params.milestone}
}