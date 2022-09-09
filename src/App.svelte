<script>
  import MediaQuery from 'svelte-media-query'
  import XyPad from './components/XYPad.svelte'
  import Slider from './components/Slider.svelte'
  import SliderMini from './components/SliderMini.svelte'
  import ButtonAlt from './components/ButtonAlt.svelte'
  import RecordButton from './components/RecordButton.svelte'
  import SettingButton from './components/SettingButton.svelte'
  import TransmitButton from './components/TransmitButton.svelte'
  import { Modals, closeModal, openModal, modals } from 'svelte-modals'
  import { fade } from 'svelte/transition'
  import Modal from './components/Modal.svelte'
  // import { selectedArt, slider0, slider1, slider2, slider3, slider4, slider5 } from './components/slidervalues'
  import { sliderArray } from './components/sliderarray'
  import faders from './ccdata'
  import { get } from 'svelte/store'
  let articulations = [
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
    { name: 'Tremolo CS', color: '#00634B' },
  ]

  function transmitCurrentValues() {
    // console.log('Yo' + currentvalue)
    for (var i = 0; i < faders.length; i++) {
      if (faders[i].cc != undefined) {
        // console.log(`Fader ${i} = ${sliderArray[i]}`)
        // console.log(`Fader ${i} = ${get(sliderArray[i])}`)
        // console.log(`Fader ${i} = ${Object.values(zevalue[i].value)}`)
        // console.log($sliderArray)
        console.log(get($sliderArray[i].value))
      }
    }
  }
</script>

<navbar class="header">
  <SettingButton />
  <div class="title">Vln 1 Longs [SSS] - (SSS Vln1 Longs.dpartmap)</div>
</navbar>
<div class="grid">
  <div class="articulationgrid">
    <ButtonAlt {articulations} />
  </div>
  <div class="controllergrid">
    <div class="fadergrid">
      {#each faders as { cc, n, range, init, clr }, i}
        {#if cc != undefined}
          <MediaQuery query="(min-height: 1100px)" let:matches>
            {#if matches}
              <Slider value={init} controller={cc} name={n} color={clr} index={i} />
            {:else}
              <SliderMini value={init} controller={cc} name={n} color={clr} index={i} />
            {/if}
          </MediaQuery>
        {/if}
      {/each}
    </div>

    <!-- <XyPad /> -->
    {#each faders as { xy, name, range, clr }, i}
      {#if xy != undefined}
        <XyPad />
      {/if}
    {/each}
    <div class="buttongrid">
      <div class="transmitbutton" on:click={transmitCurrentValues}>Transmit current values</div>
      <RecordButton />
      <!-- <TransmitButton /> -->
    </div>
  </div>
</div>

<Modals>
  <div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<!-- <div>{$selectedArt}</div> -->
<style>
  :global(body) {
    background-color: #000000;
    margin: 0;
  }
  .header {
    height: 50px;
    padding: 5px;
    max-width: 100vw;
    display: flex;
    background-color: black;
    font-size: 20px;
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .grid {
    display: flex;
    height: calc(100vh - 50px);
  }
  .controllergrid {
    width: 300px;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
  }
  .fadergrid {
    touch-action: none;
    display: flex;
    flex-basis: 25%;
    width: 300px;
    flex-wrap: wrap-reverse;
    height: 354px;
    justify-content: flex-end;
  }
  .articulationgrid {
    touch-action: none;
    width: calc(100% - 300px);
    height: calc(100vh - 50px);
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    /* margin: 5px; */
  }
  .buttongrid {
    touch-action: none;
    /* width: calc(100% - 300px); */
    width: 300px;
    height: 75px;
    display: flex;
    justify-content: flex-start;
    /* flex-wrap: wrap-reverse; */
    align-content: flex-start;
    /* margin: 5px; */
  }
  .transmitbutton {
    /* box-sizing: content-box; */
    background-color: #1a1a1a;
    width: 150px;
    height: 75px;
    font-weight: bold;
    border-radius: 8px;
    border: solid 2px #9c9c9c;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
    user-select: none;
    position: relative;
    -webkit-user-select: none;
  }
  .transmitbutton:active {
    background-color: #232323;
  }
  .title {
    /* margin-right: 30vw; */
    margin-left: auto;
    margin-right: auto;
    justify-self: center;
    align-self: center;
  }
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
