<template>
  <div class="app">
    <Navigation />
    <Hero />
    <YogaClass />
    <Teacher />
    <OneOnOne />
    <Contact />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Hero from '@/components/Hero/Hero.vue';
import YogaClass from '@/components/YogaClass/YogaClass.vue';
import Teacher from '@/components/Teacher/Teacher.vue';
import OneOnOne from '@/components/OneOnOne/OneOnOne.vue';
import Contact from '@/components/Contact/Contact.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    YogaClass,
    Teacher,
    OneOnOne,
    Contact,
  },
};
</script>

<style lang="scss" src="./App.scss" />
