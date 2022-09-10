<script>
  //  on:tap={handleTap(index)}
  import { Motion, useTransform, useMotionValue } from 'svelte-motion'
  import { onMount } from 'svelte'
  import svelteHammer from 'svelte-hammer'
  import { slider0, slider1, slider2, slider3, slider4, slider5 } from './slidervalues'
  import { sliderArray } from './sliderarray'
  import { loop_guard } from 'svelte/internal'
  const map = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
  let area
  export let value
  export let color
  export let index
  export let name
  export let controller
  let converted = map(value, 0, 127, 113, -113)
  let y = useMotionValue(converted)
  let vavalueb
  const input = [0, 127]

  // $: xText = clamp(Math.round(map($x, -125, 125, 0, 127)), 0, 127) || 0
  // map(vavalue, 125, -125, 75, 325)
  $: yText = clamp(Math.round(map($y, 113, -113, 0, 127)), 0, 127) || 0
  // $: vavalue = map($y, 125, -125, 0, 127) || 0
  // $: vavalueb = map($y, 150, -150, 0, 127)
  //  on:click={handleTouch}
  $: vavalueb = $y

  onMount(() => {
    // let vavalueb = map($y, 150, -150, 150, -150)
    // map(vavalueb, 0, 127, 50, 350)
    // vavalueb = 150
    vavalueb = converted

    yText = Math.round(map(converted, 113, -113, 0, 127))
    // console.log(vavalueb)
    // console.log(y)
    // console.log(y)
    // if (index === 0) {
    //   slider0.set(Math.round(map(converted, 113, -113, 0, 127)))
    // } else if (index === 1) {
    //   slider1.set(Math.round(map(converted, 113, -113, 0, 127)))
    // } else if (index === 2) {
    //   slider2.set(Math.round(map(converted, 113, -113, 0, 127)))
    // } else if (index === 3) {
    //   slider3.set(Math.round(map(converted, 113, -113, 0, 127)))
    // } else if (index === 4) {
    //   slider4.set(Math.round(map(converted, 113, -113, 0, 127)))
    // } else if (index === 5) {
    //   slider5.set(Math.round(map(converted, 113, -113, 0, 127)))
    // }

    // sliderArray[index].value.set(Math.round(map(converted, 113, -113, 0, 127)))

    // $sliderArray[index].value.set(2)
    // console.log(Object.values($sliderArray[index])[1])
    // let slidervalue = Object.values(sliderArray[index])[1]
    // console.log(index)
    $sliderArray[index].value.set(Math.round(map(converted, 113, -113, 0, 127)))
  })

  function handleTouch() {
    // console.log(y)
    // console.log(vavalueb)
    // slider0.update(y)
  }

  // slider0.set(Math.round(map($y, 150, -150, 0, 127)))

  function handleTap(index) {
    // console.log('You tapped the pip!')
    vavalueb = converted
    y = useMotionValue(converted)
    yText = Math.round(map(converted, 113, -113, 0, 127))
    //here will transmit to socket.IO
    updateStores(index, converted)
  }

  function updateStores(index, y) {
    // if (index === 0) {
    //   slider0.set(Math.round(map(y, 113, -113, 0, 127)))
    // } else if (index === 1) {
    //   slider1.set(Math.round(map(y, 113, -113, 0, 127)))
    // } else if (index === 2) {
    //   slider2.set(Math.round(map(y, 113, -113, 0, 127)))
    // } else if (index === 3) {
    //   slider3.set(Math.round(map(y, 113, -113, 0, 127)))
    // } else if (index === 4) {
    //   slider4.set(Math.round(map(y, 113, -113, 0, 127)))
    // } else if (index === 5) {
    //   slider5.set(Math.round(map(y, 113, -133, 0, 127)))
    // }

    $sliderArray[index].value.set(Math.round(map(y, 113, -113, 0, 127)))
  }

  function touchevent(e) {
    console.log(e.changedTouches[0].identifier)
    console.log(e.changedTouches[0].clientY)
  }
</script>

<div class="background">
  <div class="drag-area" bind:this={area} />
  <Motion
    drag
    style={{ y }}
    dragConstraints={{ current: area }}
    dragDirectionLock={true}
    dragMomentum={false}
    dragElastic={false}
    let:motion
    onDrag={() => {
      updateStores(index, $y)
      handleTouch()
    }}
    whileTap={{ backgroundColor: '#222222' }}
  >
    <div class="box center unselectable" use:motion on:touchmove={touchevent}>
      <div class="label">{yText}</div>
    </div>
  </Motion>
  <div class="sliderbar" style="--minvalue:{map(vavalueb, 113, -113, 50, 275)}px;  background-color:{color}" />
  <div
    class="defaultpip"
    style="--startpip:{map(value, 0, 127, 20, 245)}px"
    use:svelteHammer.tap={{ event: 'tap', taps: 1 }}
    on:click={() => {
      handleTap(index)
    }}
  />
  <div class="name">{name} (CC{controller})</div>
</div>

<style>
  .background {
    position: relative;
    background-color: #231d2a;
    display: flex;
    flex-direction: column;
    height: 280px;
    border-radius: 9px;
    justify-content: center;
    align-items: center;
    touch-action: none;
    --webkit-touch-action: none;
    border: solid 2px #9c9c9c;
  }
  .box {
    z-index: 2;
    width: 70px;
    height: 50px;
    position: absolute;
    opacity: 1;
    border-radius: 8px;
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.4);
  }
  .drag-area {
    box-sizing: content-box;
    /* opacity: 0.2; */
    background: #434343;
    /* position: absolute; */
    width: 70px;
    height: 280px;
    border-radius: 7px;
    touch-action: none;
    --webkit-touch-action: none;
  }
  .unselectable {
    user-select: none;
  }
  .center {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .background > .sliderbar {
    z-index: 1;
    position: absolute;
    width: 70px;
    border-radius: 8px 8px 6px 6px;
    opacity: 0.25;
    bottom: 0px;
    height: var(--minvalue);
    touch-action: none;
    --webkit-touch-action: none;
  }
  .background > .defaultpip {
    z-index: 1;
    position: absolute;
    width: 35px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid black;
    border-right: 0;
    opacity: 0.25;
    background-color: green;
    bottom: var(--startpip);
    left: 50%;
    height: 10px;
  }
  .box > .label {
    font-size: 1.1em;
    margin-left: 0px;
    background-color: transparent;
    opacity: 0.75;
    position: absolute;
    width: 40px;
    touch-action: none;
    --webkit-touch-action: none;
  }
  .name {
    position: absolute;
    z-index: 2;
    left: calc(100% - 1.2em);
    bottom: -0.8em;
    font-size: 1em;
    line-height: 1;
    direction: ltr;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
    transform: rotate(-90deg);
    transform-origin: top left;
  }
</style>
