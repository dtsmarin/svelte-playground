<script>
  import XyPad from './components/XYPad.svelte'
  import Slider from './components/Slider.svelte'
</script>

<div class="grid">
  <XyPad />
  <Slider />
</div>

<style>
  .grid {
    touch-action: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 310px;
  }
</style>
