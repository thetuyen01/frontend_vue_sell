<template>
    <div class="container  mb-5">
        <h1 class="text-center p-5 fs-1">Thanh toán</h1>
      <div class=" row border-top border-bottom border-2">
        <div class="col-8 p-2">
            <div>
            <h2 class="text-center p-2">Thông tin khách hàng</h2>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-dark  ">Tên khách hàng</label>
            <input type="text" v-model="form.ten" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-dark ">Địa chỉ</label>
            <input type="text" v-model="form.diachi" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-dark ">Số điện thoại</label>
            <input type="text" v-model="form.sodienthoai" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-dark ">Ghi chú</label>
            <input type="text" v-model="form.ghichu" class="form-control" >
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-warning" v-on:click="addCart()">mua</button>
          </div>
      </div>
        </div>
        <div class="col-4 border-start border-2 text-center ">
            <img :src="productDetail?.data?.hinh" class="img-fluid" style="width: 400px ; height:300px;"  alt="">
          <h3>{{ productDetail?.data?.tensp }}</h3>
          <h4>Giá: {{ productDetail?.data?.gia }} VNĐ</h4>
          <input type="number" v-model="form.soluong">
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '@/firebase';
  import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
  import { useRoute } from 'vue-router';
  
  
  const route = useRoute(); // Sử dụng useRoute để truy cập thông tin của route
  const productDetail = ref(null); // Sử dụng ref để lưu trữ chi tiết sản phẩm
  const form = ref({
    ten: '',
    diachi: '',
    sodienthoai: '',
    ghichu: '',
    soluong:1
  });
  onMounted(async () => {
    const productId = route.params.id; // Lấy id của sản phẩm từ route
    await getProductDetail(productId);
  });
  
  const getProductDetail = async (productId) => {
    try {
      const docRef = doc(db, "sanpham", productId); // Tạo tham chiếu đến tài liệu sản phẩm
      const docSnap = await getDoc(docRef); // Lấy dữ liệu của tài liệu
      if (docSnap.exists()) {
        productDetail.value = { id: docSnap.id, data: docSnap.data() };
        console.log(productDetail.value);
      } else {
        console.log("Không tìm thấy sản phẩm có id =", productId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async() =>{
        try{
            const tendonhang = productDetail.value?.data?.tensp || '';
            console.log(productDetail?.value.data?.gia,form.value.soluong);
            const tongtien = parseInt(productDetail?.value.data?.gia) * parseInt(form.value.soluong)
            console.log(tongtien);
            const docRef = await addDoc(collection(db, "hoadon"), {
                tenkh: form.value.ten,
                sdt: form.value.sodienthoai,
                diachi: form.value.diachi,
                tongtien: tongtien,
                soluong: form.value.soluong,
                tendonhang: tendonhang
            });
            alert("Mua hàng thành công")
            window.location.href = '/';
        }catch(error){
            console.log(error);
        }
  }
  </script>
  
  
  <style scoped>
  </style>
  