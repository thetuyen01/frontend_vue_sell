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
    <h1>{{ message1 }}</h1>

  </div>


</body>
</html>

</template>
<script>
export default {
  name: 'ChildCpn',
  props: {
    message1: String
  },
  data() {
    return {
        a: '',

        }
    }






}
</script>