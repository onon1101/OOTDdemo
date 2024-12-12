<main>
    <Header />
    <p class="mt-8 ml-16 font-thin text-lg">
            <a href="#" class="text-blue-600 font-normal underline" on:click|preventDefault={goHomeHandler} on:keydown|preventDefault={e => e.key === 'Enter' && goHomeHandler()}>
                Home
            </a>
         > Shopping</p>

    <div class="flex mt-5">
        <Sidebar/>
        <div class = "grid grid-cols-3">
            {#await products}
                <p class="">Loading...</p>
            {:then products}
                {#each products as product}
                    <ProductCard id={product.ID} name={product.Name} description={product.Description} price={product.Price} quantity={product.Quantity} imgPath={product.Images}/>
                {/each}
            {:catch error}
                <p>Connection Fail</p>
            {/await}
        </div>
    </div>
</main>

<script lang="ts">
    import Header from '@/components/Header.svelte'
    import ProductCard from '@/components/ProductCard.svelte'    
    import Sidebar from '@/components/Sidebar.svelte';
    import { navigate } from 'svelte-routing';
    const API_URL = import.meta.env.VITE_API_URL;

    async function getTeaProducts() {
        const response = await fetch(`${API_URL}/api/Product/GetAllProducts`);
        const products = await response.json();
        return products;
    }

    let products = getTeaProducts();

    async function goHomeHandler() {
        navigate('/');
    }
</script>