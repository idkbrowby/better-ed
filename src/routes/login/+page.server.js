import { invalid, redirect } from '@sveltejs/kit';
import { COOKIE_MAX_AGE } from '$lib/constants';
import * as api from '../../lib/api';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}


/** @type {import('../../../.svelte-kit/types/src/routes/login/$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const res = await api.post('user/login', {
            username: data.get('username'),
            password: data.get('password')
        });
        const responseData = await res.json();
        if (!res.ok) {
            return invalid(400, responseData);
        }
        console.log(responseData);
        const value = btoa(JSON.stringify(responseData));
        cookies.set('user', value, { path: '/', maxAge: COOKIE_MAX_AGE });
        throw redirect(307, '/');
    }
};