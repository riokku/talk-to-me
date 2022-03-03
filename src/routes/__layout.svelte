<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "../app.css";

</script>

<style>
  *{
    display: flex;
    flex-direction: column;
  }
  main{
    /* padding: 2em; */
    background: url('$lib/assets/background-snow.png');   
    min-height: 82.8vh;
  }
</style>

<Header />
<main>
  <slot />
</main>
<Footer />