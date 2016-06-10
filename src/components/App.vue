<template>
  <welcome></welcome>
  <div>
    <config></config>
    <sidebar></sidebar>
  </div>
</template>

<script>

import welcome from './Welcome.vue'
import config from './Config.vue'
import sidebar from './Sidebar.vue'

export default {
  components: { welcome, config, sidebar },

  data () {
    return {}
  },
  
  methods: {
  }
}

</script>

<style>

html, body {
  padding: 0; margin: 0;
  font-family: 'Lato';
}

.config, .sidebar {
  display: inline-block;
}

.config {
  width: 70%;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 70%;
  right: 0;
  bottom: 0;
  background-color: #eee;
}

</style>
