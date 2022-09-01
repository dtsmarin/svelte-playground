<script>
  import { Motion, useTransform, useMotionValue } from 'svelte-motion'
  let area
  let value = 0
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const input = [0, 127]
  const map = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
  $: xText = clamp(Math.round(map($x, -125, 125, 0, 127)), 0, 127) || 0
  $: yText = clamp(Math.round(map($y, 125, -125, 0, 127)), 0, 127) || 0
</script>

<main>
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
    >
      <div class="box center unselectable" use:motion />
    </Motion>
    <div class="label">{yText}</div>
  </div>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  .background {
    background-color: #231d2a;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }
  .box {
    /* background: white; */
    width: 70px;
    height: 50px;
    position: absolute;
    opacity: 0.2;
    border-radius: 9px;
    border-style: solid;
    border-width: 5px;
    border-color: #000000;
    /* box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 1); */
  }
  .drag-area {
    /* opacity: 0.2; */
    background: #434343;
    position: absolute;
    width: 70px;
    height: 350px;
    border-radius: 9px;
    outline: solid 2px #9c9c9c;
  }
  .unselectable {
    user-select: none;
  }
  .center {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .background > .label {
    font-size: 1.1em;
    margin-left: 0px;
    margin-top: calc(300px - 1.8em);
    background-color: transparent;
    opacity: 0.4;
    position: absolute;
    /* direction: rtl; */
    /* transform-origin: top right; */
    /* text-align: right; */
    width: 40px;
  }
</style>
