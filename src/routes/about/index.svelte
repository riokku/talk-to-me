<script>
	
</script>


<style>
	section{
		padding: 2em;
	}
	h2{
		margin-bottom: 0.75em;
	}
	ol {
		list-style: none;
		counter-reset: steps;
		padding: 0;
		max-width: 90%;
	}
	ol li {
		counter-increment: steps;
		margin-bottom: 2em;
		font-size: 1.5em;
	}
	ol li strong{
		display: inline-block;
		margin-bottom: 0.5em;
		font-size: 1.5em;
	}
	ol li::before {
		content: counter(steps);
		margin-right: 0.5rem;
		background: #DC1921;
		padding: 0.5em;
		color: #fff;
		width: 1em;
		height: 1em;
		display: inline-grid;
		place-items: center;
	}
	@media (min-width: 1000px){
		ol{
			max-width: 70%;
		}
	}
</style>

<svelte:head>
	<title>Talk to Me | About</title>
</svelte:head>

<section>
	<h2>
		Frequently Asked Questions
	</h2>
	<ol>
		<li>
			<strong>
				Here is a question for you
			</strong><br />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac.
		</li>
		<li>
			<strong>
				Here is a question for you
			</strong><br />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac.
		</li>
		<li>
			<strong>
				Here is a question for you
			</strong><br />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac.
		</li>
		<li>
			<strong>
				Here is a question for you
			</strong><br />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac.
		</li>
	</ol>
</section>