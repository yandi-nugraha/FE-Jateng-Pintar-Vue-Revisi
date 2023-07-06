<template>
  <HomeBody/>
</template>

<script>
// @ is an alias to /src
import HomeBody from '@/components/HomeBody.vue'

export default {
  name: 'HomeView',
  beforeCreate: function() {
    document.body.className = 'home';
    console.log('Body class changed to home');
  },
  components: {
    HomeBody
  }
}
</script>
