<main class="bg-stone-700 bg-opacity-70">
    <Header />
    <div class="h-screen w-screen flex flex-col justify-center items-center" >
        <p class="text-cyan-800 w-full">What is Oh Online Tea Delivery</p>
        <p>Oh Online Tea Delivery is a web application that allows users to order tea online. Users can browse through the available tea products, add them to their cart, and proceed to checkout. Users can also create an account to save their personal information and view their order history.</p>
        <button class="bg-sky-800 rounded-md bg-opacity-50 px-8 text-slate-100/60 h-8" on:click={goToShopping}>Go to Shopping</button>
    </div>
</main>

<script lang="ts">
    import Header from '@/components/Header.svelte'
    import { navigate } from 'svelte-routing';

    function goToShopping() {
        navigate('/shopping');
    }
</script>

<style lang="postcss">
    
</style>