<template lang="pug">
  div.main-menu
    common-button Create
    common-button Record
    common-button Group
</template>

<script>
import CommonButton from './_common/CommonButton.vue';

export default {
  components: {
    CommonButton
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
