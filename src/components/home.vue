<template class="container-fluid">

<body>
<div class="container p-5">
  <div class="text-center p-3">
    <h1>CÁC SẢN PHẨM HIỆN CÓ</h1>
  </div>
  <hr class="p-3">
  <div class="row row-cols-4 justify-content-center gap-3" >
    <div class="col-2" v-for="(item, index) in listPrudcut" :key="index">
        <a class="card" v-bind:href="'/product/'+item.id">
          <img :src="item.data.hinh" class="card-img-top" alt="" width="150px" height="150px">
          <div class="card-body text-center">
            <h5 class="card-title">{{item.data.tensp}}</h5>
            <p class="card-text"></p>
          </div>
          <div class="card-footer text-center">
            <a
              class="btn "
              data-bs-toggle="a"
              aria-pressed="false"
              autocomplete="off"
              style="background-color: #e3f2fd;"
              v-bind:href="'/product/'+item.id"
            >
              Xem
            </a>
            
          </div>
        </a>
    </div>
  </div>
</div>
</body>

</template>

<script setup>

  import { ref, onMounted } from 'vue';
  import { db } from '@/firebase';
  import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
  
  const listPrudcut = ref([]);
  const form = ref({
    tensp1: '',
    gia1: '',
    mota1: '',
    hinh1: ''
  });
  const isCheck = ref({
    status: false,
    id:''
  });
  
  onMounted(() => {
    loadData();
  });
  
  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sanpham"));
      querySnapshot.forEach((doc) => {
        listPrudcut.value.push({ id: doc.id, data: doc.data() });
      });
    } catch (error) {
      console.log(error);
    }
  };


</script>

<style scoped>
</style>