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
  ]
</script>

<div class="header">Vln 1 Longs [SSS] - (SSS Vln1 Longs.dpartmap)</div>
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
    background-color: #000000;
    /* touch-action: none; */
    margin: 0;
    /* touch-action: pinch-zoom; */
    /* --webkit-touch-action: none; */
  }

  .header {
    height: 35px;
    padding: 5px;
    max-width: none;
    display: flex;
    background-color: black;
    font-size: 20px;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .grid {
    /* display: grid; */
    /* grid-template-areas: 'top top' 'bottom1 bottom2'; */
    /* grid-template-columns: 4fr 4fr; */
    /* grid-template-rows: 5fr 5fr; */
    display: flex;
    height: calc(100vh - 35px);
  }

  .controllergrid {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-rows: 2fr 2fr; */
    /* grid-auto-flow: row; */

    /* grid-gap: 0rem; */
    /* grid-column: 3; */
    width: 300px;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .fadergrid {
    touch-action: none;
    /* display: flex; */
    /* gap: 0px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* grid-template-columns: repeat(5, 1fr); */
    /* grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); */
    /* grid-area: 'top'; */
    /* grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); */
    /* flex-direction: column; */
    /* grid-template-columns: repeat(4, 1fr); */
    /* grid-template-columns: subgrid; */
    /* grid-column: 1 / 5; */
    /* grid-row: 1 / 5; */
    /* grid-gap: 0px; */
    /* grid-row: 5 / 5; */
    /* grid-column: 1 / 2; */
    /* gap: 70px; */
    /* margin-left: 0px; */
    /* margin-right: 150px; */
    /* height: 100px; */
    /* display: flex; */
    /* grid-column-start: 3; */
    /* justify-items: center; */
    display: flex;
    /* flex-flow: column wrap; */
    /* justify-content: space-evenly; */
    /* align-items: stretch; */
    column-gap: 70px;
    /* margin: 50px; */
    /* grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); */
  }
  .buttongrid {
    touch-action: none;
    /* margin-right: 150px; */
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-shrink: 0; */
    /* flex-wrap: wrap-reverse; */
    /* flex-flow: column wrap; */
    /* justify-content: flex-start; */
    /* flex-direction: column-reverse; */

    width: calc(100% - 400px);
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
  }
</style>
