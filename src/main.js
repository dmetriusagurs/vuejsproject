import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// const input = document.querySelector('input');
// const log = document.getElementById('values');

// input.addEventListener('input', updateValue);
// new Vue({
//   el: '#'
// })
// function updateValue(e) {
//   log.textContent = e.target.value;

