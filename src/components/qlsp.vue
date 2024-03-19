<template>
    <div class="container-fluid">
      <div class=" row">
        <div class="col-8">
          <div class="container p-5">
            <h1 class="text-center p-2">QUẢN LÝ SẢN PHẨM</h1>
            <div class="table-responsive">
              <table class="table table-bordered border-dark border-2">
                <thead>
                  <tr class="text-center fs-6">
                    <th scope="col">MSSP</th>
                    <th scope="col">HÌNH</th>
                    <th scope="col">TÊN BÁNH</th>
                    <th scope="col">GIÁ</th>
                    <th scope="col">MÔ TẢ</th>
                    <th scope="col">TÙY CHỌN</th>
                  </tr>
                </thead>
                <tbody v-for="(item, index) in listPrudcut" :key="index">
                  <tr class="align-middle ">
                    <td scope="row" class="text-center fw-bolder">{{ index+1 }}</td>
                    <td class="text-center"><img :src="item.data.hinh" class="img-fluid" alt="" width="150px" height="150px"></td>
                    <td class="text-center fw-bolder">{{ item.data.tensp }}</td>
                    <td class="text-center fw-bolder">{{ item.data.gia }}</td>
                    <td>{{ item.data.mota.slice(0, 5) }}....</td>
                    <td class="text-center" >
                      <span class="p-2 m-auto"><button type="button" v-on:click="Delete(item.id)" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></span>
                      <span class="p-2 m-auto"><button type="button" v-on:click="edit(item.id)" class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-4 border-start border-2 ">
          <h3 class="p-5 fs-2 text-center">{{ isCheck.status ? 'Sửa sản phẩm' : 'Thêm sản phẩm' }}</h3>
          <div class="mb-3">
            <label class="form-label text-dark ms-2  ">Tên bánh:</label>
            <input type="text" v-model="form.tensp1" class="form-control" >
          </div>
          <div class="mb-3">
            <label class="form-label text-dark ms-2 ">Hình:</label>
            <input type="text" v-model="form.hinh1" class="form-control" >
          </div>
          <div class="mb-3">
            <label class="form-label text-dark ms-2 ">Giá:</label>
            <input type="text" v-model="form.gia1" class="form-control" >
          </div>
          <div class="mb-3">
            <label class="form-label text-dark ms-2 ">Mô tả:</label>
            <input type="text" v-model="form.mota1" class="form-control" >
          </div>
          <div class="mb-3 d-grid gap-2" v-if="!isCheck.status">
            <button class="btn btn-success " v-on:click="AddProduct()">Thêm sản phẩm</button>
          </div>
          <div class="mb-3 d-grid gap-2" v-if="isCheck.status">
            <button class="btn btn-success" v-on:click="submit_edit()">Lưu</button>
          </div>
        </div>
      </div>
    </div>
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

  const setValue = () =>{
    form.value.tensp1 = "";
    form.value.gia1 = "";
    form.value.mota1 ="";
    form.value.hinh1 = ""
  }
  
  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sanpham"));
      listPrudcut.value = []
      querySnapshot.forEach((doc) => {
        listPrudcut.value.push({ id: doc.id, data: doc.data() });
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const AddProduct = async () => {
  try {
    if (form.value.hinh1?.trim() !== '') {
      const docRef = await addDoc(collection(db, "sanpham"), {
        hinh: form.value.hinh1,
        mota: form.value.mota1,
        tensp: form.value.tensp1,
        gia: form.value.gia1
      });
      loadData()
      // Sau khi thêm sản phẩm, gọi lại hàm loadData() để cập nhật danh sách sản phẩm

      alert('Thêm sản phẩm thành công');
      setValue()
    } else {
      alert('Vui lòng điền thông tin hình sản phẩm');
    }
  } catch (error) {
    alert('Thêm sản phẩm thất bại');
    console.log(error);
  }
};
  
  const Delete = async (id) => {
    isCheck.value.id = id
    if (confirm("Bạn muốn xóa không?")) {
      try {
        await deleteDoc(doc(db, "sanpham", id));
        listPrudcut.value = listPrudcut.value.filter(item => item.id !== id);
        alert("Xóa thành công");
      } catch (error) {
        console.log(error);
        alert("Xóa thất bại");
      }
    }
  };
  
  const edit = (id) => {
  const detail_pr = listPrudcut.value.find(item => item.id === id);
  if (detail_pr) {
    form.value.tensp1 = detail_pr.data.tensp;
    form.value.gia1 = detail_pr.data.gia;
    form.value.mota1 = detail_pr.data.mota;
    form.value.hinh1 = detail_pr.data.hinh;
    isCheck.value = { status: true, id }; // Thiết lập isCheck.id
  } else {
    console.log("Không tìm thấy sản phẩm có id =", id);
  }
};

const submit_edit = async () => {
  try {
    await setDoc(doc(db, "sanpham", isCheck.value.id), {
      hinh: form.value.hinh1,
      mota: form.value.mota1,
      tensp: form.value.tensp1,
      gia: form.value.gia1
    });
    const index = listPrudcut.value.findIndex(item => item.id === isCheck.value.id);
    if (index !== -1) {
      listPrudcut.value[index].data = {
        hinh: form.value.hinh1,
        mota: form.value.mota1,
        tensp: form.value.tensp1,
        gia: form.value.gia1
      };
    }
    isCheck.value = { status: false, id: '' }; // Thiết lập lại isCheck
    alert('Chỉnh sửa sản phẩm thành công');
    setValue()
  } catch (error) {
    alert('Chỉnh sửa sản phẩm thất bại');
    console.log(error);
  }
};

  </script>
  
  <style scoped>
  </style>
  