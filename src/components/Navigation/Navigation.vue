<template>
  <div class="wrapper">
    <a v-smooth-scroll href="#main"><img class="logo" src="@/assets/img/moveom-logo.png"></a>
    <div :class="[{open}, 'hamburger']" @click="toggleMenu">
      <span />
      <span />
      <span />
    </div>
    <transition name="fade">
      <div v-if="open" class="menu menu--mobile">
        <a v-smooth-scroll href="#yogaclass" @click="toggleMenu">yoga class</a>
        <a v-smooth-scroll href="#teacher" @click="toggleMenu">teacher</a>
        <a v-smooth-scroll href="#oneonone" @click="toggleMenu">one-on-one</a>
        <a v-smooth-scroll href="#contact" @click="toggleMenu">contact</a>
      </div>
    </transition>
    <div class="menu menu--desktop">
      <a v-smooth-scroll href="#yogaclass">yoga class</a>
      <a v-smooth-scroll href="#teacher">teacher</a>
      <a v-smooth-scroll href="#oneonone">one-on-one</a>
      <a v-smooth-scroll href="#contact">contact</a>
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
