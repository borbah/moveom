<template>
  <div id="contact" class="wrapper">
    <p>
      Perhaps you would like to be doing something with friends?
      Small groups of 2-4 can be arranged and it’s a great way to
      get benefits of a private session without the hussle of busy
      studios and big groups.
    </p>
    <div class="information">
      <a class="info" href="mailto:contact@annanowak.uk">
        <MailIcon class="icon" />
        <span>contact@annanowak.uk</span>
      </a>
      <a class="info" href="tel:+447523589329">
        <PhoneIcon class="icon" />
        <span>7523 589 329</span>
      </a>
      <a class="info" href="https://goo.gl/iRNdTr" target="_blank">
        <PlaceIcon class="icon" />
        <span>East Dulwich</span>
      </a>
    </div>
    <p class="call-to-action">
      Please, feel free to write me an e-mail and we'll
      schedule a session for you and your friends. You can also
      check my FB page, where you'll find fresh
      information about my classess and activities.
    </p>
    <a href="https://www.facebook.com/moveomyoga" target="_blank"><button class="write">check schedule</button></a>
    <img
      src="../../assets/img/yapo-teacher-associate.png"
      alt="Yoga Alliance Certificate"
      class="certificate"
    >
  </div>
</template>
<script>
import MailIcon from '@/assets/img/icons/mail.svg';
import PhoneIcon from '@/assets/img/icons/phone.svg';
import PlaceIcon from '@/assets/img/icons/place.svg';

export default {
  name: 'Contact',
  components: {
    MailIcon,
    PhoneIcon,
    PlaceIcon,
  },
};
</script>
<style lang="scss" scoped src="./Contact.scss" />
