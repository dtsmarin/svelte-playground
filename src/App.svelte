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
    { name: 'Con Sord', color: '#00C2FF' },
  ]
</script>

<div class="grid">
  <div class="buttongrid">
    {#each cats as { name, color }, i}
      <Button {name} {color} />
    {/each}
  </div>
  <div class="padgrid">
    <XyPad />
  </div>
  <div class="fadergrid">
    <Slider />
    <Slider />
    <Slider />
  </div>
</div>

<style>
  .grid {
    touch-action: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    /* gap: 60px; */
  }
  .fadergrid {
    touch-action: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
  }
  .padgrid {
    touch-action: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
  }
  .buttongrid {
    position: relative;
    /* left: 10px; */
    /* bottom: 10px; */
    touch-action: none;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    margin-right: 150px;
  }
</style>
