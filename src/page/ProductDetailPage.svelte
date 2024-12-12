<main>
    <Header />
    {#await product}
        <p>Loading...</p>
    {:then product}
        <p>{product.Name}</p>
        <p>{product.Description}</p>
        <p>{product.Price}</p>
        <p>{product.Quantity}</p>
        <img src={product.Images} alt={product.Name} />
    {:catch error}
        <p>Connection Fail</p>
    {/await}
{id}
</main>

<script lang="ts">
    import Header from '@/components/Header.svelte'
    const {id} = $props();

    const API_URL = import.meta.env.VITE_API_URL;

    async function getProduct() {
        const response = await fetch(`${API_URL}api/Product/GetProduct?id=${id}`);
        const product = await response.json();
        return product;
    }

    let product = getProduct();
</script>