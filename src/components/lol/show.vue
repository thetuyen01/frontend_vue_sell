<template>
  <html lang="en">
  
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <!-- Bootstrap CSS v5.2.1 -->
  
  </head>
  
  <div id="app">
<p v-if="isShown">Nội dung chỉ hiển thị nếu isShown là true.</p>
<button @click="toggleVisibility">Toggle Visibility</button>
</div>
  </html>
  
</template>

<script>
export default {
  name: 'LabB2',
  data() {
  return{
    isShown: true // Ban đầu, phần tử sẽ được hiển thị vì isShown là true
  }
},
methods: {
  toggleVisibility: function() {
    this.isShown = !this.isShown; // Khi click button, giá trị của isShown sẽ đảo ngược 
  }
}
}
</script>
