<script lang="ts">
    import "../app.css";
    import {Loader, SvelteUIProvider, Text} from "@svelteuidev/core";
    import {onMount} from "svelte";
    import {account} from "$lib/appwrite.ts";
    import {session} from "../stories/session";

    let loading = true;

    let isExistsSession = null

    const unsubscribe = session.subscribe((value) => {
        isExistsSession = value;
        checkSession()
    })

    function checkSession() {
        if(isExistsSession !== null)
            if(window.location.pathname.startsWith("/auth"))
                location.href = "/";


        account.get()
            .then(() => {
                if(window.location.pathname.startsWith("/auth")) {
                    location.href = "/";
                }
            })
            .catch(() => {
                if(!window.location.pathname.startsWith("/auth")) {
                    location.href = "/auth";
                }
            })
            .finally(() => {
                loading = false;
            })
    }

    onMount(() => {
        checkSession()
    })
</script>

{#if loading}
    <div class="h-96 w-full flex flex-col justify-center gap-2 items-center">
        <Loader/>
        <Text size="lg" weight="semibold">Случилась загрузка...</Text>
    </div>
{:else}
    <SvelteUIProvider>
        <slot/>
    </SvelteUIProvider>
{/if}