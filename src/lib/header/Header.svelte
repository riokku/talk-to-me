<script>

  //Images
  import Logo from "$lib/assets/logo-color.jpeg";

  //Components
  import { page } from "$app/stores";

</script>

<style>
  :root{
    --background: #DC1A22;
    font-family: 'Rubik', sans-serif;
  }
  .logo-wrapper img{
    width: 100px;
  }
  .active{
    font-weight: bold;
    border-bottom: 2px solid #fff;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background);
    padding: 0 1em;
    border-bottom: 2px solid #000;
  }
  nav{
    display: flex;
    justify-content: center;
		background: var(--background);
    font-size: 1.25em;
  }
  nav ul li:nth-child(-n+3){
      margin-right: 1em;
  }
  ul{
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  a:hover{
    border-bottom: 2px solid #fff;
  }
</style>


<header>
  <div class="logo-wrapper corner">
    <a sveltekit:prefetch href="/">
      <img src="{Logo}" alt="Talk to Met">
    </a>
  </div>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/chat'}><a sveltekit:prefetch href="/chat">Chat</a></li>
      <li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
      <li class:active={$page.url.pathname === '/account'}><a sveltekit:prefetch href="/account">Account</a></li>
    </ul>
  </nav>
</header>