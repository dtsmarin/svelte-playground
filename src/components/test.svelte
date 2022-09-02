<script>
  import { Motion, useDragControls } from 'svelte-motion'

  const dragControls = useDragControls()

  function startDrag(event) {
    dragControls.start(event, { snapToCursor: true })
  }
</script>

<Motion drag="x" let:motion {dragControls}>
  <div use:motion />
</Motion>
<div on:pointerdown={startDrag} />
