<script>
  import { Motion, useTransform, useMotionValue } from 'svelte-motion'
  import { onMount } from 'svelte'
  let area
  let value = 0
  let x = useMotionValue(0)
  let y = useMotionValue(0)
  const input = [0, 127]
  const map = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
  $: xText = clamp(Math.round(map($x, -125, 125, 0, 127)), 0, 127) || 0
  $: yText = clamp(Math.round(map($y, 125, -125, 0, 127)), 0, 127) || 0

  onMount(() => {
    x = useMotionValue(-125)
    y = useMotionValue(125)
  })
</script>

<main>
  <div class="background">
    <div class="drag-area" bind:this={area} />
    <Motion drag style={{ x, y }} dragConstraints={{ current: area }} dragElastic={0} let:motion>
      <div class="box center unselectable" use:motion />
    </Motion>
    <div class="label">{xText},{yText}</div>
  </div>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  .background {
    /* background-color: #231d2a; */
    display: inline-flex;
    flex-direction: column;
    /* height: 0%; */
    /* position: relative; */
    /* opacity: 1; */
    justify-content: center;
    align-items: center;
    touch-action: none;
  }
  .box {
    background: white;
    width: 50px;
    height: 50px;
    position: absolute;
    opacity: 0.5;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 1);
  }
  .drag-area {
    opacity: 0.2;
    background: white;
    width: 300px;
    height: 300px;
    border-radius: 20px;
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
    margin-left: calc(300px - 4em);
    margin-top: calc(300px - 1.8em);
    background-color: transparent;
    opacity: 0.4;
    position: absolute;
    direction: rtl;
    transform-origin: top right;
    text-align: right;
    width: 40px;
  }
</style>
