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
  flex: 0 0;

  //min-width: 200px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  margin: 1%;
  cursor: pointer;
  box-sizing: border-box;
  //border: 3px solid white;
}

@media screen and (min-width: 320px) {
  .group-item {
    flex-basis: 98%;
  }
}
@media screen and (min-width: 768px) {
  .group-item {
    flex-basis: 48%;
  }
}
@media screen and (min-width: 1224px) {
  .group-item {
    flex-basis: 18%;
  }
  .group-item:hover {
    transform: scale(1.05);
    transition: .2s;
  }
}
</style>

