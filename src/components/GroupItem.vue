<template lang="pug">
  div.group-item
    h3 Имя группы
    h5 иконка группы
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.group-item {
  flex: 0 0 200px;

  min-width: 200px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  box-sizing: border-box;
  border: 3px solid white;
}
.group-item:hover {
  border: 3px solid blue;
}
</style>

