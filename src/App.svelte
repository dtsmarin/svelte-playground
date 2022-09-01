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
    { name: 'Tremolo', color: '#FF7A00' },
    { name: 'Tremolo', color: '#00634B' },
    { name: 'Tremolo', color: '#23668B' },
    { name: 'Tremolo', color: '#FF00D6' },
    { name: 'Tremolo', color: '#EBFF00' },
    { name: 'Tremolo', color: '#EBFF00' },
    { name: 'Tremolo', color: '#EBFF00' },
    { name: 'Tremolo', color: '#EBFF00' },
    { name: 'Tremolo', color: '#EBFF00' },
  ]
</script>

<div class="grid">
  <div class="buttongrid">
    {#each cats as { name, color }, i}
      <Button {name} {color} />
    {/each}
  </div>
  <div class="controllergrid">
    <div class="fadergrid">
      <Slider value={100} color="#23668B" />
      <Slider value={15} color="#EBFF00" />
      <Slider value={52} color="#00DBA6" />
      <Slider value={52} color="#9347AD" />
    </div>
    <XyPad />
  </div>
</div>

<style>
  :global(body) {
    background-color: black;
  }

  .controllergrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row dense;
    /* grid-gap: 0.5rem; */
    grid-column-start: 1;
  }
  .fadergrid {
    touch-action: none;
    display: grid;
    /* grid-template-columns: repeat(5, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-gap: 0px;

    /* gap: 70px; */
    /* margin-left: 0px; */
    /* margin-right: 150px; */
  }
  .buttongrid {
    touch-action: none;
    gap: 10px;
    /* margin-right: 150px; */
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    flex-wrap: wrap-reverse;
    /* flex-flow: column wrap; */
    justify-content: flex-start;
    /* flex-direction: column-reverse; */
  }
</style>
