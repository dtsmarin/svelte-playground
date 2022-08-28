<script>
  // import {onMount} from "svelte";
  import {Motion, useTransform, useMotionValue} from 'svelte-motion';
  let area;
	let value = 0;
	const x = useMotionValue(0);
  const y = useMotionValue(0);
  const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
   const input = [0, 127];
  $: xText = Math.round(map($x, -75, 175, 0, 127))||0;
  // $: yText = Math.round($y)||0;
  $: yText = Math.round(map($y, 125, -125, 0, 127))||0;
</script>

<main>
  <div class="background" >	
    <div class="drag-area" bind:this={area}  />
    <Motion drag style={{x, y}}
    dragConstraints={{current:area}}
    let:motion>
      <div id="handle" class="box center unselectable" 
          
           style="--top:{value}" 		 use:motion >
  
    </div>
    </Motion>
     {xText},{yText}
  </div>
  
</main>

<style>
	:global(*) {
  box-sizing: border-box;
}
	.background{
		background-color: #231D2A;
		color: rgba(255, 255, 255, 0.8);
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		touch-action:none;
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
	box-shadow: 0px 0px 0px 8px rgba(0,0,0,1);
/*   top: calc(50% - 150px / 2); */
/* 	top: calc(50% - 150px / 2); */
	top: --top;
  left: calc(50% - 150px / 2);
}
	.drag-area {
  opacity: 0.2;
  background: white;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
}
	.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
	.center {
    justify-content:center;
		align-items:center;
		display:flex;
	}
</style>
