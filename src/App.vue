<template lang="pug">
  div.rootContainer
    menu-panel.menu-panel
    router-view.main-view
</template>

<script>
import MenuPanel from './components/MenuPanel.vue';

export default {
  components: {
    MenuPanel
  }
}
</script>

<style lang="scss" scoped>
.rootContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  min-height: 100%;
}
.menu-panel {
  flex-basis: 15%;
  background-color: rgb(70, 70, 70);
}
.main-view {
  flex-basis: 85%;
  background-color: rgb(30, 30, 30);
}
</style>
