<script>
	import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
	import { db } from "../../firebase";
  import { collectionData } from "rxfire/firestore";
	import { collection, addDoc, orderBy, limit, query, updateDoc, doc, getDoc } from "firebase/firestore"; 
	import Chatroom from "./chatroom/index.svelte";

	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	
	let participantCountRef = doc(db, "participantCount", "count");
	let participantCountRefSnap;
	let participantOutput; 

	export let person;

	const googleSignIn = () => signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// Assign data to global variable
			person = result.user;
			updateParticipantCount("add");
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});

	const googleSignOut = () => signOut(auth).then(() => {
		console.log("Sign out successful, later dude.");
		person = null;
		updateParticipantCount("remove");
	}).catch((error) => {
		alert('Sign out unsuccessful, help!')
	});

	async function updateParticipantCount(direction){
		participantCountRefSnap = getDoc(participantCountRef);
		participantOutput = (await participantCountRefSnap).data().count;
		if (direction === "add"){
			participantOutput = participantOutput + 1;
		} else if (direction === "remove"){
			participantOutput = participantOutput - 1;
		}		
		await updateDoc(participantCountRef, {
			count: participantOutput
		});
  }


</script>

<style>
	button{		
		padding: 0.5em 1em;
		border: none;
		border-radius: 0.25em;
		font-size: 1em;
		color: #fff;
		background-color: #DC1921;
		width: fit-content;
	}
	button:hover{
		cursor: pointer;
	}
	h2{
    animation: throb linear alternate infinite 3s;
  }
  @keyframes throb{
    0%{
      text-shadow: 3px 3px 3px #fff;
    }
    100%{
      text-shadow: 3px 3px 4px #DC1921;
    }
  }
	.chatroom-page-wrapper{
		display: flex;
		height: 100%;
	}
	.content-wrapper, .chat-wrapper{
		width: 50%;
		flex-grow: 1;
	}
	.content-wrapper{
		padding: 2em;
	}
	.chat-wrapper{
		max-height: 71.5vh;
	}
	.login-wrapper{
		padding: 4em;
	}
</style>

<svelte:head>
	<title>Talk to Me | Chat</title>
</svelte:head>

<div class="chatroom-page-wrapper">
	<section class="content-wrapper">
		<h2>
			Chatroom
		</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac. Nam rhoncus erat ante, ut sodales est volutpat quis. Vestibulum ultricies luctus aliquam. Maecenas sodales ullamcorper augue tristique imperdiet. Curabitur interdum erat enim. Etiam vel sodales libero. 
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum bibendum ligula, nec convallis sem porta ac. 
		</p>
		{#if person}
			<p>Hi there, {person.displayName}...</p>
		{/if}
		{#if participantOutput}
			<p>There are {participantOutput} chatters in here...</p>		
		{/if}
		{#if person}
			<button on:click={googleSignOut}>
				Logout
			</button>
		{/if}
	</section>
	<section class="chat-wrapper">
		{#if person}
			<!-- <p>There are {count} chatters in here...</p> -->
			<Chatroom user={person} logout={googleSignOut}/>
		{:else}
			<div class="login-wrapper">
				<h3>Looks like you&rsquo;re not logged in, let&rsquo;s change that...</h3>
				<button on:click={googleSignIn}>
					Login
				</button> 
			</div>
		{/if}
	</section>
</div>


