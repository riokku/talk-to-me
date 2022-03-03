<script>


</script>

<style>

  section{
    padding: 2em;
  }

  button {
    display: inline-flex;
    border: 2px solid #DC1921;
    color: #DC1921;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #fff;
    padding: 1em;
  }

  #start {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  
  #button-overlay {
    width: 100%;
    height: 100%;
    background: #DC1921;
    color: #fff;
    left: -200px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .15s ease-Out;
    bottom: 0;
  }

  #start:hover #button-overlay {
    left: 0;
  }

</style>

<svelte:head>
	<title>Talk to Me</title>
</svelte:head>

<section>
  <h1>
    Welcome to Talk to Me&trade;
  </h1>
  <h3>
    Start chatting now.
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac. Nam rhoncus erat ante, ut sodales est volutpat quis. Vestibulum ultricies luctus aliquam. Maecenas sodales ullamcorper augue tristique imperdiet. Curabitur interdum erat enim. Etiam vel sodales libero. Nulla nec erat lobortis, fermentum diam at, fermentum odio. Donec a cursus erat, a pretium ipsum. Nam fermentum sed justo quis congue. Aliquam rhoncus arcu diam, et scelerisque metus aliquet vel.
  </p>
  <button id="start" on:click|once|preventDefault={() => location.href = "/chat"}>
    <div id="button-overlay">
      Talk to Me!
    </div>
    Start chatting...
  </button>
</section>