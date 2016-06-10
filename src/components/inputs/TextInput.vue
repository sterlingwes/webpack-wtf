<template>
  <div class="field">
    <div class="field-left">
      <label for="{ id }">{{ label }}</label>
    </div>
    <div class="field-right">
      <input type="text" name="{ id }" />
    </div>
  </div>
</template>

<script>

export default {
  components: {},

  props: ['id', 'label'],

  data () {
    return {}
  },

  methods: {
  }
}

</script>

<style scoped>

.field-left, .field-right {
  display: inline-block;
}

.field-left {
  width: 20%;
}

.field-right {
  width: 75%;
}

label {
  font-size: 0.7em;
  text-transform: uppercase;
}

input {
  width: 100%;
}

</style>