<script>
  export let name
  export let color
  // export let styleName
  import { fade } from 'svelte/transition'
</script>

<div class="button">
  <div class="buttoncolor" style="background-color: {color}" />
  <span class="buttontext">{name}</span>
</div>

<style>
  .button {
    box-sizing: content-box;
    background-color: #434343;
    width: 150px;
    height: 100px;
    border-radius: 15px;
    border: solid 2px #9c9c9c;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
    user-select: none;
    position: relative;
    -webkit-user-select: none;
    /* margin: 0px; */
    /* margin: -2px -2px; */
    /* padding: -2px -2px; */
  }
  .button:active {
    background-color: #232323;
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
    height: 18px;
    width: 18px;
    box-shadow: inset 0px 0px 0px 3px rgba(0, 0, 0, 0.3);
  }
</style>
