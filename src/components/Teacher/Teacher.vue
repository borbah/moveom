<template>
  <div id="teacher" class="wrapper">
    <transition name="fade">
      <div v-if="first" class="slide first">
        <p>
          <span>
            Anna is certified by Yoga Alliance to teach Ashtanga Vinyasa and Vinyasa Flow.
            She teaches Vinyasa Flow
          </span>
          classes, designed to take the body through a series of physically involving postures
          allowing the stagnant energy to flow. She emphasises the rythem of sequencing and the
          technique of building up the heat by connecting the breath with movement. This helps
          to built strength and flexibility before integrating and grounding towards the end
          of the practice. Anna invites her students to play on the edge and explore their
          flow with a correct alignment and curiosity.
        </p>
        <MoveButton class="move-button" @click.native="toggleSlide">more</MoveButton>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!first" class="slide second">
        <p>
          Anna has spent 16 years of her professional life working with her own body and with other
          peoples bodies as a professional Dance Artist and Teacher. She feels at home with the
          subject of movement, body awareness, injuries and playing with ones own limitations.
          She trained with many wonderful Yoga Teachers in India, USA, Canada and Europe practicing
          in many styles, studying Pranayama and various Mediation techniques. She believes yoga is
          a deeply transformative practice, which she feels grateful to share with others.
        </p>
        <MoveButton reverse class="move-button" @click.native="toggleSlide">back</MoveButton>
      </div>
    </transition>
  </div>
</template>
<script>
import MoveButton from '@/components/MoveButton/MoveButton.vue';

export default {
  name: 'Teacher',
  components: {
    MoveButton,
  },
  data() {
    return {
      first: true,
    };
  },
  methods: {
    toggleSlide() {
      this.first = !this.first;
    },
  },
};
</script>
<style lang="scss" scoped src="./Teacher.scss"/>
