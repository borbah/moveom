<template>
  <div id="main" class="hero">
    <div :class="sequence" class="background" @mousemove="runSequence">
      <h1 class="claim">
        move<br>
        and be<br>
        mov<span>e</span>d
      </h1>
      <MoveButton v-smooth-scroll class="move-button" href="#yogaclass" />
    </div>
  </div>
</template>
<script>
import MoveButton from '@/components/MoveButton/MoveButton.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'Hero',
  components: {
    MoveButton,
  },
  data() {
    return {
      sequence: 'background--5',
    };
  },
  methods: {
    // eslint-disable-next-line
    runSequence: debounce(function(e) {
      const width = window.innerWidth;
      const piece = width / 13;
      this.sequence = `background--${Math.ceil(e.clientX / piece)}`;
    }, 30),
  },
};
</script>
<style lang="scss" scoped src="./Hero.scss" />
