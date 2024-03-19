<template>
    <html lang="en">
    
    <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS v5.2.1 -->
    
    </head>
    
<input type="text" v-model="num1" placeholder="Enter number 1">
<input type="text" v-model="num2"  placeholder="Enter number 2">
<p>Sum:{{ sum }}</p>
<p>Product: {{ product }}</p>
    
    </html>
    
</template>

<script>
export default {
    name: 'ViDu',
  data() {
    return {
        num1: 0,
        num2: 0,

        }
    },
    computed: {
        sum() {
            return parseInt(this.num1) + parseInt(this.num2)
        },
        product() {
            return parseInt(this.num1)  * parseInt(this.num2)
        }
    }
}
</script>
