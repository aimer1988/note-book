<template lang="pug">
  div.main-menu
    account-panel
    common-button Create
    common-button Record
    common-button Group
</template>

<script>
import CommonButton from './_common/CommonButton.vue';
import AccountPanel from './AccountPanel.vue';

export default {
  components: {
    CommonButton, AccountPanel
  }
}
</script>

<style lang="scss" scoped>
  .main-menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
  }
</style>
