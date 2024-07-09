<script>
    import {ActionIcon, Button, Card, Container, Flex, Input, PasswordInput, Tabs, Title} from "@svelteuidev/core";
    import {account} from "$lib/appwrite.ts";
    import {Login} from "../../actions/auth/login.ts";
    import {KeyRound} from "lucide-svelte";
    import {Signup} from "../../actions/auth/signup.ts";

    let name = ""
    let email = ""
    let password = ""

    function handleLogin() {
        return Login(email, password)
    }

    function handleSignup() {
        return Signup(name, email, password)
    }

</script>

<Container class="h-screen flex justify-center items-center" size="sm">
    <Card class="w-96">
        <Tabs>
            <Tabs.Tab label="Вход" class="w-44">
                <Flex direction="column" gap="sm">
                    <Title class="my-2 mx-auto mb-[56px] font-medium">Вход</Title>
                    <Input bind:value={email} placeholder="Электронный адрес" type="email" required min="8"/>
                    <PasswordInput bind:value={password} placeholder="Пароль" />
                    <Flex justify="flex-end">
                        <Button on:click={handleLogin}>Войти</Button>
                    </Flex>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab label="Регистрация" class="w-44">
                <Flex direction="column" gap="sm">
                    <Title class="my-2 mx-auto font-medium">Регистрация</Title>
                    <Input bind:value={name} placeholder="Имя" type="name"/>
                    <Input bind:value={email} placeholder="Электронный адрес" type="email" required min="8"/>
                    <PasswordInput bind:value={password} placeholder="Пароль" />
                    <Flex justify="flex-end">
                        <Button on:click={handleSignup}>Зарегистрироваться</Button>
                    </Flex>
                </Flex>
            </Tabs.Tab>
        </Tabs>
    </Card>
</Container>