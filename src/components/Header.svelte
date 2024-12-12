<main class="flex items-center justify-between bg-stone-500 h-16">
    <button class="ml-8 min-w-32 flex items-center" on:click={goHomeHandler}>
        <img src={Logo} alt="Logo" class="size-8 mb-1"/>
        <p class="ml-4 text-lg font-bold text-stone-800">OOTD</p>
    </button>
    <SearchBar />
    <div class="flex space-x-8 mr-8">
        <button on:click={cartHandler}>
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="inline">Cart</p>
        </button>
        <button on:click={goToLogin}>
            <i class="fa-solid fa-user"></i>
            <p class="inline">Login</p>
        </button>
    </div>
</main>

<script lang="ts">
    import Logo from '@/assets/logo.png';
    import SearchBar from '@/components/SearchBar.svelte';
    import { cartState } from '@/stores/cart';
    import { navigate } from 'svelte-routing';

    async function goHomeHandler() {
        navigate('/');
    }

    async function goToLogin() {
        navigate('/login');
    }

    function cartHandler() {
        if ($cartState === false) {
            alert('Please login first');
        } else {
            navigate('/cart');
        }
    }
</script>