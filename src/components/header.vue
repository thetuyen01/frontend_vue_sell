<template class="container-fluid">
    <!-- header -->
    <nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand fs-4" href="#">Wheatt<i class="bi bi-cake"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bolder" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="/invoice">Đơn hàng đã đặt</a>
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
    </nav>
    <!-- header -->
</template>

<script setup>
import { ref } from 'vue';


</script>

<style scoped>
</style>