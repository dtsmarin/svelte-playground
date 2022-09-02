<script>
  import { Motion, useTransform, useMotionValue } from 'svelte-motion'
  import { onMount } from 'svelte'
  import svelteHammer from 'svelte-hammer'
  const map = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
  let area
  export let value
  export let color
  let converted = map(value, 0, 127, 150, -150)
  let y = useMotionValue(converted)
  let vavalueb
  const input = [0, 127]

  // $: xText = clamp(Math.round(map($x, -125, 125, 0, 127)), 0, 127) || 0
  // map(vavalue, 125, -125, 75, 325)
  $: yText = clamp(Math.round(map($y, 150, -150, 0, 127)), 0, 127) || 0
  // $: vavalue = map($y, 125, -125, 0, 127) || 0
  // $: vavalueb = map($y, 150, -150, 0, 127)
  //  on:click={handleTouch}
  $: vavalueb = $y
  onMount(() => {
    // let vavalueb = map($y, 150, -150, 150, -150)
    // map(vavalueb, 0, 127, 50, 350)
    // vavalueb = 150
    vavalueb = converted
    yText = Math.round(map(converted, 150, -150, 0, 127))
    // console.log(vavalueb)
    // console.log(y)
    // console.log(y)
    // use:svelteHammer.pan={{}}
    //     on:panup={handleTouch}
    //     on:pandown={handleTouch}
  })

  function handleTouch() {
    // console.log(y)
    console.log(vavalueb)
  }

  function handleTap() {
    console.log('You tapped the pip!')
    vavalueb = converted
    y = useMotionValue(converted)
    yText = Math.round(map(converted, 150, -150, 0, 127))
    //here will transmit to socket.IO
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
    whileDrag={handleTouch}
    whileTap={{ backgroundColor: '#222222' }}
  >
    <div class="box center unselectable" use:motion>
      <div class="label">{yText}</div>
    </div>
  </Motion>
  <div class="sliderbar" style="--minvalue:{map(vavalueb, 150, -150, 50, 349)}px;  background-color:{color}" />
  <div
    class="defaultpip"
    style="--startpip:{map(value, 0, 127, 20, 320)}px"
    use:svelteHammer.tap={{ event: 'tap', taps: 1 }}
    on:tap={handleTap}
  />
</div>

<style>
  .background {
    position: relative;
    background-color: #231d2a;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 9px;
    justify-content: center;
    align-items: center;
    touch-action: none;
    --webkit-touch-action: none;
    border: solid 2px #9c9c9c;
  }
  .box {
    /* background: white; */
    z-index: 2;
    /* margin-left: 6px; */
    /* margin-right: 6px; */
    width: 70px;
    height: 50px;
    position: absolute;
    opacity: 1;
    border-radius: 8px;
    /* align-self: center; */
    /* margin-top: -0.5px; */
    /* border-style: solid; */
    /* border-width: 5px; */
    /* border-color: #000000; */
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.4);
  }
  .drag-area {
    box-sizing: content-box;
    /* opacity: 0.2; */
    background: #434343;
    /* position: absolute; */
    width: 70px;
    height: 350px;
    border-radius: 9px;

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
    border-radius: 8px;
    opacity: 0.25;

    /* background-color: red; */
    bottom: 0px;
    /* left: 25px; */
    /* --initial: 200px */
    height: var(--minvalue);
    touch-action: none;
    --webkit-touch-action: none;
  }
  .background > .defaultpip {
    z-index: 1;
    position: absolute;
    width: 35px;
    border-radius: 5px 0px 0px 5px;
    opacity: 0.25;
    background-color: green;
    bottom: var(--startpip);
    left: 50%;
    height: 10px;
  }
  .box > .label {
    /* z-index: -3; */
    font-size: 1.1em;
    margin-left: 0px;
    background-color: transparent;
    opacity: 0.75;
    position: absolute;
    width: 40px;
    touch-action: none;
    --webkit-touch-action: none;
  }
</style>
