<template>
  <div class="hero">
    <div class="background">
      <h1 class="claim">
        move<br>
        and be<br>
        mov<span>e</span>d
      </h1>
      <MoveButton class="move-button" href="#" />
    </div>
  </div>
</template>
<script>
import MoveButton from '@/components/MoveButton/MoveButton.vue';

export default {
  name: 'Hero',
  components: {
    MoveButton,
  },
};
</script>
<style lang="scss" scoped src="./Hero.scss" />
