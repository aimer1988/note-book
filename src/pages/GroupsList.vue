<template lang="pug">
  div.groups-list
    group-item(v-for="groupItem in groupsList" :key="groupItem.id")
</template>

<script>
import { mapGetters } from 'vuex';
import GroupItem from '../components/GroupItem.vue';

export default {
  components: {
    GroupItem
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('common', [
      'groupsList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.groups-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  box-sizing: border-box;
  padding: 10px 0;
  margin: -1%;
}

@media screen and (min-width: 320px) {
  .groups-list {
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .groups-list {
    justify-content: flex-start;
  }
}
@media screen and (min-width: 1224px) {
  .group-item {
    justify-content: flex-start;
  }
}
</style>
