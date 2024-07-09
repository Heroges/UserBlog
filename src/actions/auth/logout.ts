import {account} from "$lib/appwrite";
import {session} from "../../stories/session";

export async function Logout() {
    await account.deleteSession("current");
    session.set(null)
    window.location.reload(); // i dont know another way to do this // Sveltekit not update store if value null|undefined // I can listen set by null|undefined, but I dont want to, Im lazy
}
