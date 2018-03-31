<template>
  <a :href="href">
    <div class="wrapper">
      <p class="text"><slot>let's move</slot></p>
      <MoveIcon class="icon" />
    </div>
  </a>
</template>
<script>
import MoveIcon from '@/assets/img/arrow.svg';

export default {
  name: 'MoveButton',
  components: {
    MoveIcon,
  },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./MoveButton.scss" />
