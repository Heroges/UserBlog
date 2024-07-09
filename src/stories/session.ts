import { type Writable, writable } from "svelte/store";
import { account } from "$lib/appwrite";
import type { Models } from "appwrite";

export const session:Writable<Models.Session | null> = writable(null);