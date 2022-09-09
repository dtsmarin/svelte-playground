<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import IoSettingsSharp from 'svelte-icons-pack/io/IoSettingsSharp'
  import { Modals, closeModal, openModal, modals } from 'svelte-modals'
  import Modal from './Modal.svelte'
  function handleOpen() {
    console.log('Modal opening was handled')
    openModal(Modal, { title: 'Settings', message: 'This is an alert' })
  }
</script>

<div class="button" on:click={handleOpen}>
  <Icon src={IoSettingsSharp} className="custom-icon" size="20" color="#c8c8c8" />
</div>

<style>
  .button {
    margin-right: 5px;
    background-color: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    height: 30px;
    width: 30px;
    border-radius: 25%;
    border: 2px solid #c8c8c833;
    /* user-select: none; */
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
