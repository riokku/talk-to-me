<script>
  import { db } from "../../../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { collection, addDoc, orderBy, limit, query } from "firebase/firestore"; 
	import IconSend from "$lib/assets/icon-send.png";
  import IconSendNull from "$lib/assets/icon-send-null.png";

  export let user;
  
  let message = "";

  const colRef = collection(db, "chats");
  const sortedQuery = query(colRef, orderBy("sentAtRaw", "asc"));
  const chats = collectionData(sortedQuery, "id").pipe(startWith([]));  

  async function sendMessage(){
    
    let dater = new Date();
    let finalDate = dater.toUTCString();

    await addDoc(colRef, {
      uid: user.uid,
      name: user.displayName,
      message: message,
      avatar: user.photoURL,
      sentAtRaw: +new Date(),
      sentAtFinal: finalDate  
    });
    message = "";
  }
</script>

<style>
  .form{ 
    display: flex;
    text-align: center;
    align-items: center;
    padding: 0.25em 0.25em 0.28em 1em;
    background-color: #fff;
    border-left: 3px solid #000;
  }
  input{
    padding: 1em;
    border: none;
    flex-grow: 1;
    margin-right: 0.25em;
  }
  .messages-wrapper{
    padding: 0.5em 1em;
    background-color: #2f2f2f;
    color: #fff;    
    border-left: 1px solid #000;
    height: 100%;
  }  
  .messages-wrapper p{
    color: #fff;
  }
  .messages-windows{
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    max-height: 73.6vh;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #DC1921;
  }
  .text{
    color: #fff;
    padding: 0.5em;
  }
  .chat-avatar{
    border-radius: 50%;
    max-width: 22px;
  }
  .message{
    width: fit-content;
    align-items: center;
    font-size: 1em;
    border-radius: 1em;
    margin-bottom: 0.5em;
    color: #fff;
    border: 3px solid #fff;
  }
  .message:not(:last-child){
    margin-bottom: 0.5em;
  }
  .my-message{
    background-color: green;     
  }
  .my-message .chat-avatar{
    margin-left: 1em;
  }
  .my-message .message-info{
    justify-content: flex-end;
  }
  .my-message .text{
    text-align: right;
  }
  .other-message .text{
    text-align: left;
  }
  .other-message{
    background-color: #DC1921;
  }
  .other-message .chat-avatar{
    margin-right: 1em;
  }
  .my-message-wrapper{
    display: flex;
    justify-content: flex-end;
  }
  .other-message-wrapper{
    display: flex;
    justify-content: flex-start;
  }  
  .message-info{
    color: #2f2f2f;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 1em 1em 0 0;
    padding: 0.5em 1em;
    font-weight: bold;
  }
  .send-icon, .null-icon{
    width: 40px;
    height: 40px;    
    padding: 0.45em;
  }
  .send-icon:hover{
    cursor: pointer;
    background-color: #fceded;
    border-radius: 20%;
  }
  .null-icon:hover{
    cursor: not-allowed;
  }
  @media (min-width: 1000px){

  }
  small{
    display: block;
    text-align: right;
    background-color: #000;
    padding: 1em;
    color: #fff;
  }
</style>

<small>
  Total messages: {$chats.length}
</small>

<div class="messages-windows">
  <div class="messages-wrapper">
    {#if $chats.length === 0}
      <p>It's quiet in here...</p>
      {:else}
      {#each $chats as chat}
        {#if user.uid == chat.uid}
          <div class="my-message-wrapper">
            <div class="message my-message">
              <div class="message-info">
                {chat.name}&nbsp;&nbsp;|&nbsp;&nbsp;{chat.sentAtFinal} <img class="chat-avatar" src={chat.avatar} alt="">
              </div>
              <div class="text">
                {chat.message}
              </div>
            </div>
          </div>
        {:else}
          <div class="other-message-wrapper">
            <div class="message other-message">
              <div class="message-info">
                <img class="chat-avatar" src={chat.avatar} alt="">{chat.name}&nbsp;&nbsp;|&nbsp;&nbsp;{chat.sentAtFinal}
              </div>
              <div class="text">
                {chat.message}
              </div>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>
<div class="form">
  <input type="text" placeholder="Type something..." bind:value={message}>
  {#if message != ""}
    <img class="send-icon" src="{IconSend}" alt="Send message" on:click={sendMessage} />
    {:else}
    <img class="null-icon" src="{IconSendNull}" alt="Empty message" />
  {/if}
</div>