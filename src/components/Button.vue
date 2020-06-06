<template>
<div id="button-click">
    <h1>{{ msg }}</h1>

  <button v-on:click="counter += 1">Click Me</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
</template>

<script>
export default {
    name: 'Button',
  props: {
    msg: String
  }
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
