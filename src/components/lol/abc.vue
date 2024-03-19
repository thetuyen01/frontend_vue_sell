<template>
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue.js Example</title>
  
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>   -->
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <input v-model="inputText" type="text">
    <button @click="changeMessage">Change Message</button>
  </div>


</body>
</html>

</template>
<script>
export default {
  name: 'VueAbc',
  props: {
    cc: Number,
    a:Number,
    b:Number,
},

data() {
    return {
        message: 'Hello Vue!',
        inputText: ''
    }
},


methods: {
          changeMessage () {
          this.message = this.inputText;
          this.inputText = ''; // Reset input
        }
},

}
</script>