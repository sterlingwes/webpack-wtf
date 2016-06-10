<template>
  <div class="welcome">
    <h1>webpack.<span class="wtf">wtf</span></h1>
  </div>
</template>

<script>

export default {
  components: {},

  data () {
    return {}
  },
  
  methods: {
  }
}

</script>

<style scoped>

.welcome {
  background-color: #222;
  padding: 10px;
  height: 40px;
}

h1 {
  margin: 0;
  padding: 0;
  font-family: 'Averia Sans Libre';
  font-weight: 400;
  color: #A0BCE6;
}

h1 > .wtf {
  font-weight: 700;
  font-style: italic;
  color: #EA7600;
}

</style>
