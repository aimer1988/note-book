<template lang="pug">
  div.group-item(v-if="!addNewItem")
    h3.group-item__title Имя группы
  div.group-item.group-item_add-new(v-else="")
    h1.group-item__title.group-item__title_add-new +
</template>

<script>
export default {
  props: {
    addNewItem: Boolean
  }
}
</script>

<style lang="scss" scoped>
.group-item {
  display: flex;
  align-items: center;
  flex: 0 0;

  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  margin: 1%;
  cursor: pointer;
  box-sizing: border-box;

  @media screen and (min-width: 320px) {
    flex-basis: 98%;
  }
  @media screen and (min-width: 768px) {
    flex-basis: 48%;
  }
  @media screen and (min-width: 1224px) {
    flex-basis: 18%;
  }

  &:hover {
    @media screen and (min-width: 1224px) {
      transform: scale(1.05);
      transition: .2s;
    }
  }

  &_add-new {
    border: 3px solid green;
    background-color: transparent;
    color: green;
  }
}

.group-item__title {
  width: 100%;
  text-align: center;
  
  &_add-new {
    font-size: 3em;
  }
}
</style>

