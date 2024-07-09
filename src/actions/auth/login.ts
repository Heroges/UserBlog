import {account, ID} from "$lib/appwrite";
import {session} from "../../stories/session";

export async function Login(email: string, password: string) {
    account.createEmailPasswordSession(email, password)
        .then((respSess) => {
            session.update(() => respSess)
        })
        .catch(err => {
            alert(err)
        })
}
