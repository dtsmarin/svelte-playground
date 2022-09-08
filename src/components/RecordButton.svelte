<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import BsRecordFill from 'svelte-icons-pack/bs/BsRecordFill'
</script>

<div class="button">
  <Icon src={BsRecordFill} className="custom-icon" size="52" color="rgba(255,69,49,0.3)" />
</div>

<style>
  .button {
    background-color: #2f0f0f;
    display: flex;
    justify-content: center;
    height: 75px;
    width: 75px;
    border-radius: 12px;
    border: 2px solid rgba(200, 200, 200, 0.2);
  }
  .button:active {
    background-color: #3e1a1a;
  }
  :global(.custom-icon) {
    justify-self: center;
    justify-content: center;
    align-self: center;
  }
</style>
