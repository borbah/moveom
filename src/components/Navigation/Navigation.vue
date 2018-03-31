<template>
  <div class="wrapper">
    <img class="logo" src="@/assets/img/moveom-logo.png">
    <div :class="[{open}, 'hamburger']" @click="toggleMenu">
      <span />
      <span />
      <span />
    </div>
    <transition name="fade">
      <div v-if="open" class="menu menu--mobile">
        <a>yoga class</a>
        <a>teacher</a>
        <a>one-on-one</a>
        <a>contact</a>
      </div>
    </transition>
    <div class="menu menu--desktop">
      <a>yoga class</a>
      <a>teacher</a>
      <a>one-on-one</a>
      <a>contact</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    },
  },
};
</script>
<style lang="scss" scoped src="./Navigation.scss" />
