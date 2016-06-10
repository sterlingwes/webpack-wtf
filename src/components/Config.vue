<template>
  <div class="config">
    <div class="microlight">module.exports = {{ export }}</div>
  </div>
</template>

<script>

require('microlight')

import service from '../config.service'

export default {
  components: {},

  data () {
    var json = service([])
    var jsonStr = JSON.stringify(json, null, '  ')
    // add some new lines between root keys
    jsonStr = jsonStr.replace(/^\s\s"/mg, '\n  "').replace(/^\s\s\}/mg, '  }\n')
    return {
      export: jsonStr
    }
  },
  
  methods: {
  }
}

</script>

<style>

.microlight {
  font-family : monospace;
  white-space : pre;
  background-color: #333;
  color: #eee;
  padding: 10px;
}

</style>
