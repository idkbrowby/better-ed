import { redirect } from '@sveltejs/kit';
import * as api from "../../lib/api";


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals ,cookies}) {
	if (!locals.user) { throw redirect(307, '/') };
    const unparsedCookie = cookies.get("user");
    let headers;
    const cookie = JSON.parse(atob(unparsedCookie));
    headers = new Headers();
    headers.set("user-id", cookie.user.id);
    headers.set("session-id", cookie.session_id);
    const res = await api.post(`user/logout`, {}, headers);
    cookies.delete('user', { path: '/' });
}
