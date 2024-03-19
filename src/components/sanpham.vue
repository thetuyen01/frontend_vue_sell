<template>
  <div class="container m-3">
    <div class=" row" style="margin-left:310px ;">
      <div class="col-4">
        <img :src="productDetail?.data?.hinh" class="img-fluid" style="width: 600px ; height:400px;"  alt="">
      </div>
      <div class="col-5 border-start border-2 ps-5">
        <h1 class="pt-3 pb-3">{{ productDetail?.data?.tensp }}</h1>
        <hr>
        <div class="fs-4 text-decoration-underline mt-2">Mô tả:</div>
        <div class="fs-5  mb-2">{{ productDetail?.data?.mota }}</div>
        <hr>
        <h3 class="text-danger text-decoration-underline p-3">{{ productDetail?.data?.gia }}VNĐ</h3>
        <a class="btn btn-warning fs-5" v-bind:href="'/cart/'+productDetail?.id">Mua<i class="bi bi-cart-fill"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useRoute } from 'vue-router';

const route = useRoute(); // Sử dụng useRoute để truy cập thông tin của route
const productDetail = ref(null); // Sử dụng ref để lưu trữ chi tiết sản phẩm

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
</script>


<style scoped>
</style>
