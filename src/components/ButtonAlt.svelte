<script>
  export let articulations
  let selectedArticulation
  import { selectedArt } from './slidervalues'
  function setActive(index) {
    selectedArt.set(index)
    selectedArticulation = index
  }
</script>

<div class="buttongrid">
  {#each articulations as { name, color }, index}
    <div
      class:selected={index === selectedArticulation}
      class:button={index !== selectedArticulation}
      on:click={() => {
        setActive(index)
      }}
      style="text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;"
    >
      <span class="buttontext">{name}</span>
      <span class="buttoncolor" style="background-color: {color}" />
    </div>
  {/each}
</div>

<style>
  .buttongrid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    gap: 5px;
  }
  .selected {
    box-sizing: border-box;
    background-color: #6b6b6b;
    width: 150px;
    height: 100px;
    border-radius: 15px;
    border: solid 2px rgba(156, 223, 30, 1);
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    position: relative;
  }
  .button {
    box-sizing: border-box;
    background-color: #434343;
    position: relative;
    width: 150px;
    height: 100px;
    border-radius: 15px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    box-shadow: inset 0px 0px 0px 2px rgba(156, 156, 156, 0);
    border: solid 2px #9c9c9c;
  }
  .buttontext {
    font-weight: bold;
    user-select: none;
    word-wrap: normal;
  }
  .buttoncolor {
    height: 18px;
    width: 18px;
    background-color: green;
    position: absolute;
    left: 7px;
    top: 6px;
    margin: 0px;
    padding: 0px;
    border: solid 3px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
</style>
