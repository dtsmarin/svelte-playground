<script>
  export let name
  export let color
  import { fade } from 'svelte/transition'
</script>

<div class="button" transition:fade>
  <div class="buttoncolor" style="background-color: {color}" />
  <span class="buttontext">{name}</span>
</div>

<style>
  .button {
    background-color: #434343;
    width: 150px;
    height: 100px;
    border-radius: 15px;
    border: solid 2px #9c9c9c;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttontext {
    margin: 10px;
    font-weight: bold;
    user-select: none;
  }
  .buttoncolor {
    position: absolute;
    top: 7%;
    left: 4%;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
  }
</style>
