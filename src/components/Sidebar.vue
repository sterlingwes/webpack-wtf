<template>
  <div class="sidebar">
    <div class="section">
      <h2>Basics</h2>
      <text-input label="Entry File" id="entry">entry.js</text-input>
    </div>
    <hr/>
  </div>
</template>

<script>

import textInput from './inputs/TextInput.vue'

export default {
  components: { textInput },

  data () {
    return {}
  },

  methods: {
  }
}

</script>

<style scoped>

.sidebar {
  padding: 10px;
}

h2 {
  font-size: 1.5em;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
}

hr {
  border-top: 1px solid #ccc;
  border-left: 0px;
}

</style>