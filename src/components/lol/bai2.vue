<template>
    <html lang="en">
    
    <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS v5.2.1 -->
    
    </head>
    
    <div
        class="table-responsive
                "
    >
        <table
            class="table table-bordered "
        >
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product</th>
                    <th scope="col">Code</th>
                    <th scope="col">Available</th>
                    <th scope="col">Price</th>
                    <th scope="col">5 star rating</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr  class="" v-for="item in sp" :key="item">
                    <td><img :src="require(`@/assets/images/${ item.image }.jpg`)" alt=""></td>
                    <td>{{item.prd}}</td>
                    <td>{{item.code}}</td>
                    <td>{{item.avail}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.rate}}</td>
                    <td>{{item.point1}}</td>
                    <td>{{item.point2}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    
    </html>
    
</template>

<script>
export default {
    name: 'LabB2',
  data() {
    return {
        sp:[
            {image:'hinh5',prd:1,code:'Leaf Rake',avail:'GDN-0011',date:'March 19,2016',rate:'Leaf rake with 48-inch wooden handl.',point1:'19.95',point2:'3.2'},
            {image:'hinh1',prd:2,code:'Garden Cart',avail:'GDN-0023',date:'March 18,2016',rate:'15 gallon capacity rolling garden cart',point1:'39.99',point2:'4.2'},
            {image:'hinh2',prd:5,code:'Hammer',avail:'TBX-0048',date:'May 21,2016',rate:'Curved claw steel hammer',point1:'8.9',point2:'4.8'},
            {image:'hinh3',prd:8,code:'Saw',avail:'TBX-0022',date:'May 15,2016',rate:'15-inch steel blade hand saw',point1:'11.55',point2:'3.7'},
            {image:'hinh4',prd:10,code:'Video Game Controller',avail:'GMG-0042',date:'October 15,2015',rate:'Standard two-button video game controller',point1:'35.95',point2:'4.6'}
            ]
        }
    },
}
</script>
