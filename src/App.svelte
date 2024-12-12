<script lang="ts">
  import path from 'path';
  import {Router, Link, Route} from 'svelte-routing';

  import Login from '@/page/Login.svelte';
  import MainPage from '@/page/MainPage.svelte';
  import ShoppingPage from '@/page/ShoppingPage.svelte';
  import ProductDetailPage from '@/page/ProductDetailPage.svelte';
</script>

<main>
  <Router>
    <Route path="/" component={MainPage} />
    <Route path="/shopping" component={ShoppingPage} />
    <Route path="/login" component={Login} />
    <Route path="/product/:id" let:params> 
      <ProductDetailPage id={params.id} />
    </Route>
  </Router>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
