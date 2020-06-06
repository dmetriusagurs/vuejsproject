<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/rebel-alliance.png">
   
    <HelloWorld msg="How you doing Mayvue!"/>
    <br>
    <Button msg="Click Me"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
