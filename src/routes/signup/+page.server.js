import { invalid, redirect } from '@sveltejs/kit';
import { COOKIE_MAX_AGE } from '$lib/constants';
import * as api from '../../lib/api';


export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}


export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const res = await api.post('user/signup', {
            email: data.get('email'),
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