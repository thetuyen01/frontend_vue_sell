<template>
    <div class="container mt-5">
      <h1 class="text-center">Danh sách sản phẩm</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Số thứ tự</th>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá sản phẩm</th>
            <th scope="col">Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in productList" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ formatCurrency(product.price) }}</td>
            <td>
              <span v-for="star in 5" :key="star" @click="rateProduct(product.id, star)" :class="{ 'rated': star <= product.rating }">&#9733;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LabB2',
    data() {
      return {
        productList: [
          { id: 1, code: 'SP001', name: 'Sản phẩm 1', price: 50000, rating: 0 },
          { id: 2, code: 'SP002', name: 'Sản phẩm 2', price: 75000, rating: 0 },
          { id: 3, code: 'SP003', name: 'Sản phẩm 3', price: 30000, rating: 0 },
          { id: 4, code: 'SP004', name: 'Sản phẩm 4', price: 100000, rating: 0 },
          { id: 5, code: 'SP005', name: 'Sản phẩm 5', price: 25000, rating: 0 }
        ]
      };
    },
    methods: {
      rateProduct(productId, rating) {
        const product = this.productList.find(product => product.id === productId);
        if (product) {
          product.rating = rating;
        }
      },
      formatCurrency(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
      }
    }
  };
  </script>
  
  <style>
  .rated {
    color: orange;
  }
  </style>