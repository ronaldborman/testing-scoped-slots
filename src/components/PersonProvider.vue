<template>
  <div>
    <slot :fullName="fullName"></slot>
  </div>
</template>

<script>
export default {
  name: 'PersonProvider',
  data: function() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>

</style>
