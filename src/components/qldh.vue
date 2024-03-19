<template class="container-fluid">
<body>
    <div class="container p-5">
        <h1 class="text-center p-2">QUẢN LÝ ĐƠN HÀNG</h1>
        <div
            class="table-responsive "
        >
            <table
                class="table table-bordered border-dark border-2 align-middle"
            >
                <thead>
                    <tr class="text-center fs-6" >
                        <th scope="col">MSĐH</th>
                        <th scope="col">TÊN KHÁCH HÀNG</th>
                        <th scope="col">SẢN PHẨM ĐƯỢC CHỌN</th>
                        <th scope="col">TỔNG SỐ TIỀN</th>
                        <th scope="col">SỐ LƯỢNG</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in listPrudcut" :key="index">
                    <tr class="" >
                        <td scope="row " class="text-center fw-bolder">{{index+1}}</td>
                        <td class="text-center fw-bolder">{{item.data.tenkh}}</td>
                        <td class="text-center fw-bolder">{{item.data.tendonhang}}</td>
                        <td class="text-center fw-bolder">{{item.data.tongtien}}</td>
                        <td class="text-center">{{item.data.soluong}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>


</body>

</template>

<script setup>
import { ref, onMounted } from 'vue';
  import { db } from '@/firebase';
  import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
  
  const listPrudcut = ref([]);


  onMounted(() => {
    loadData();
  });
  
  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "hoadon"));
      listPrudcut.value = []
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