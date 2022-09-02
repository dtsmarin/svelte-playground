<script>
  import XyPad from './components/XYPad.svelte'
  import Slider from './components/Slider.svelte'
  import Button from './components/Button.svelte'

  let cats = [
    { name: 'Legato', color: '#59BB1D' },
    { name: 'Staccato', color: '#9347AD' },
    { name: 'Spiccato', color: '#B15704' },
    { name: 'Sul Tasto', color: '#00DBA6' },
    { name: 'Con Sord', color: '#00C2FF' },
    { name: 'Tremolo', color: '#EBFF00' },
    { name: 'Long CS Blend', color: '#FF7A00' },
    { name: 'Long Harmonics', color: '#00634B' },
    { name: 'Marcato Attack', color: '#23668B' },
    { name: 'Trill (Major 2nd)', color: '#FF00D6' },
    { name: 'Trill (Major 3rd)', color: '#30B700' },
    { name: 'Trill (Minor 2nd)', color: '#BB1D1D' },
    { name: 'Tremolo', color: '#00634B' },
  ]

  let selectedArt = null

  $: console.log('Articulation selected', selectedArt)
</script>

<div class="header">Vln 1 Longs [SSS] - (SSS Vln1 Longs.dpartmap)</div>
<div class="grid">
  <div class="buttongrid">
    {#each cats as { name, color }, i}
      <div class="buttonwrap" class:selected={i === selectedArt} on:click={() => (selectedArt = i)}>
        <Button {name} {color} />
      </div>
    {/each}
  </div>
  <div class="controllergrid">
    <div class="fadergrid">
      <Slider value={100} color="#23668B" />
      <Slider value={15} color="#EBFF00" />
      <Slider value={52} color="#00DBA6" />
      <Slider value={34} color="#9347AD" />
    </div>
    <!-- <div class="xypad" /> -->
    <XyPad />
  </div>
</div>

<style>
  :global(body) {
    background-color: #000000;
    margin: 0;
  }

  .header {
    height: 35px;
    padding: 5px;
    max-width: none;
    display: flex;
    background-color: black;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .grid {
    display: flex;
    height: calc(100vh - 35px);
  }
  .controllergrid {
    width: 300px;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .fadergrid {
    touch-action: none;
    display: flex;
    justify-content: space-evenly;
  }
  .buttongrid {
    touch-action: none;
    width: calc(100% - 300px);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    z-index: 10;
  }
  .buttonwrap {
    z-index: initial;
    margin: 15px;
    position: relative;
  }

  .selected {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 13px;
    transition: 0.5s all;
    box-shadow: 0px 0px 0px 2px rgba(119, 255, 0, 1);
    white-space: nowrap;
    overflow: visible;
  }
</style>
