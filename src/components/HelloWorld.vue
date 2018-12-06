<template>
  <div class="hello">
    <person-provider>
      <div slot-scope="{fullName}">
        <greeter :fullName="fullName"></greeter>
      </div>
    </person-provider>
  </div>
</template>

<script>
import PersonProvider from './PersonProvider'
import Greeter from './Greeter'

export default {
  name: 'HelloWorld',
  components: {PersonProvider, Greeter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
