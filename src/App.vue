<template>
  <div class="app">
    <Navigation />
    <Hero />
    <YogaClass />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Hero from '@/components/Hero/Hero.vue';
import YogaClass from '@/components/YogaClass/YogaClass.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    YogaClass,
  },
};
</script>

<style lang="scss" src="./App.scss" />
