<script lang="ts">
    import Header from "@/components/Header.svelte";
    import Tea from '@/assets/tea.webp';
    const API_URL = import.meta.env.VITE_API_URL; 

    let email = $state('');
    let password = $state('');

    async function loginHandler() {
        const response = await fetch(`${API_URL}api/User/Login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email,
                Password: password
            })
        });
        console.log(response);
    }
</script>

<main>
    <Header />
    <div class="flex justify-end items-center relative">
        <img src={Tea} alt="tea" class="w-auto h-screen fill bg-auto"/>
        <div class="absolute backdrop-blur-3xl rounded-l-3xl bg-white/30 w-96 h-4/5 p-8 pt-40">
            <p class="text-2xl font-bold mb-4">Login</p>
            <form class="flex flex-col space-y-2" on:submit|preventDefault={loginHandler}>
                <label for="email" class="text-lg">Email</label>
                <input bind:value={email} type="email" id="email" name="email" placeholder="xxxxxxx@email.com" class="rounded-md p-2 border border-gray-300"/>
                <label for="password" class="text-lg">Password</label>
                <input bind:value={password} type="password" id="password" name="password" class="rounded-md p-2 border border-gray-300" placeholder="enter your password"/>
                {#if email === '' || password === ''}
                <button disabled={true} class="bg-sky-500 rounded-md bg-opacity-40 px-8 text-slate-100/60 h-8 mt-4">Login / Register</button>
                {:else}
                <button class="bg-blue-500 bg-opacity-100 rounded-md px-8 text-slate-100/60 h-8 mt-4">Login / Register</button>
.                {/if}
                
            </form>
        </div>
    </div>
</main>
