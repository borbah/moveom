<template>
  <a :href="href">
    <div :class="[{ reverse }, 'wrapper']">
      <p class="text"><slot>let's move</slot></p>
      <MoveIcon :class="[{ reverse }, 'icon']" />
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
      default: null,
    },
    clickAction: {
      type: Function,
      default: null,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped src="./MoveButton.scss" />
