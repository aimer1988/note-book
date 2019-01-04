<template lang="pug">
  div.groups-list
    group-item(v-for="groupItem in groupsList" :key="groupItem.id")
</template>

<script>
import GroupItem from '../components/GroupItem.vue';

export default {
  components: {
    GroupItem
  },
  data () {
    return {
      groupsList: [
        {
          id: 0,
          title: 'group1'
        },
        {
          id: 1,
          title: 'group2'
        },
        {
          id: 2,
          title: 'group2'
        },
        {
          id: 3,
          title: 'group2'
        },
        {
          id: 4,
          title: 'group2'
        },
        {
          id: 5,
          title: 'group2'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.groups-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 10px 0;
  margin: -10px;
}
</style>
