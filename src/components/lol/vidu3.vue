<template>
    <html lang="en">
    
    <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS v5.2.1 -->
    
    </head>
    <h1>concac </h1>
<input type="text" v-model="search" placeholder="Tim kiem" name="" id="">
<ul>
    <li v-for="(item,index) in filteredlist" :key="index" >{{ item }}</li>
</ul>
    </html>
    
</template>

<script>

export default {
    name: 'ViDu3',
    data(){
        return{
            item:['Muc 1','Muc 2','Muc 3','Muc 4'],
            search:'',
        };
    },
    computed:{
        filteredlist(){
            return this.item.filter(item=>
            item.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    }

}
</script>
