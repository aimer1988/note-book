<template lang="pug">
  div.rootContainer
    div.sidebar
      account-panel.sidebar__account
      main-menu.sidebar__main-menu
    div.main-view
      header-panel.main-view__header
      router-view.main-view__router-view
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import HeaderPanel from './components/HeaderPanel.vue';
import AccountPanel from './components/AccountPanel.vue';

export default {
  components: {
    MainMenu, HeaderPanel, AccountPanel
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
.sidebar {
  flex-basis: 15%;
  background-color: rgb(70, 70, 70);

  display: flex;
  flex-direction: column;
}
.main-view {
  flex-basis: 85%;
  background-color: rgb(30, 30, 30);
  padding: 0 30px;

  display: flex;
  flex-direction: column;
}
.sidebar__account {
  flex-basis: 10%;
}
.main-view__header {
  box-sizing: border-box;
  flex-basis: 10%;
}
</style>
