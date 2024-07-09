<script lang="ts">
    import {ActionIcon, Button, Container, Flex, Title} from "@svelteuidev/core";
import {account} from "$lib/appwrite";
import {Logout} from "../actions/auth/logout";
import {app} from "../stories/app";
    import {LogOut, Plus} from "lucide-svelte";


function handleExit() {
    Logout()
}
</script>

<svelte:head>
    <title>DaiApp | {$app.title}</title>
</svelte:head>
<Container>
    <Flex justify="space-between" class="items-center p-1">
        <Flex class="items-center gap-1">
            <Title size="xl" class="text-center">DaiApp</Title>
            <Button variant="subtle" on:click={() => app.set({title: "Свежее"}) }>Свежее</Button>
            <Button variant="subtle" on:click={() => app.set({title: "Лучшее"}) }>Лучшее</Button>
            <Button variant="subtle" on:click={() => app.set({ title: "Пользователи"}) }>Пользователи</Button>
        </Flex>
        <Flex class="items-center gap-4">
            <Button color="blue" variant="filled">
                Добавить
            </Button>
            <ActionIcon size="lg" color="blue" variant="light">
                <LogOut />
            </ActionIcon> <!-- add logout button-->
        </Flex>
    </Flex>
</Container>