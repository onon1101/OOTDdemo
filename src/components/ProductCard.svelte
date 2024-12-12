<button type="button" class="my-4 m-8 h-80 w-64 px-8 rounded-2xl bg-slate-300 hover:bg-sky-700" onclick={goToProductDetail}>
    <img class="size-48 rounded-lg mx-auto my-8" alt="Product img" src={imgPath} />
    <div class="w-48 mx-auto">
        <p class="text-center">{name}</p>
        <div class="flex justify-around">
            <p>{price}$</p>
            <p>當前數量：{quantity}</p>
        </div>  
    </div>
</button>

<script lang="ts">
    import { navigate } from 'svelte-routing';
    let {id, name, description, price, quantity, imgPath} = $props();

    async function goToProductDetail() {
        navigate(`/product/${id}`);
    }
</script>