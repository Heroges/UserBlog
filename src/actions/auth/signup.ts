import {account, ID} from "$lib/appwrite";
import {session} from "../../stories/session";

export async function Signup(name: string, email: string, password: string) {
    account.create(
        ID.unique(),
        email,
        password,
        name
    )
        .then(() => {
            account.createEmailPasswordSession(email, password)
                .then((respSess) => {
                    session.update(() => respSess)
                })
                .catch(err => {
                    alert(err)
                })
        })
        .catch((err) => {
            alert(err)
        })
}
