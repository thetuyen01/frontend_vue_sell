<template>
    <html lang="en">
    
    <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS v5.2.1 -->
    
    </head>
    
<h1>{{ message }}</h1>
<input type="text" v-model="inputvalue" name="" id="">
<button @click="updateMessage()">Cap nhat</button>
    </html>
    
</template>

<script>
import ref from 'vue';
export default {
    name: 'ViDu2',
  setup() {
    const message=ref('Hello World');
    const inputvalue=ref('')
    const updateMessage=()=>{
        message.value=inputvalue.value;
    }
    return{
        message,
        inputvalue,
        updateMessage
    }
    },

}
</script>
