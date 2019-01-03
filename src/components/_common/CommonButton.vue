<template lang="pug">
  button.button
    slot
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button {
  flex: 0 0;
  min-width: 100px;
  min-height: 30px;

  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
}
</style>
