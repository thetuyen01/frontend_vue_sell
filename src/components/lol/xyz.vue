<template>
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue.js Example</title>
  
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>   -->
</head>
<body>
<childcpn message1="aaab"/>
<div>{{ message }}</div>
<!-- <div>{{ aaa }}</div> -->


</body>
</html>

</template>
<script>

import childcpn from './childcpn.vue';
export default {
    name: 'XyzAbc',
  components: {
    childcpn
},

data() {
    return {
        message: 'Hello Vue!',
        aaa: 'hi'
    }
},
}
</script>