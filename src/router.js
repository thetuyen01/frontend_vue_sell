import { createRouter, createWebHistory } from 'vue-router';
import Amin from './components/qlsp.vue';
import Home from './components/home.vue';
import detail from './components/sanpham.vue'
import giohang from './components/giohang.vue'
import hoadon from './components/qldh.vue'
const routes = [      
{
    path: '/',
    name: 'Home',
    component: Home
    },
    
  {
    path: '/admin',
    name: 'Admin',
    component: Amin
  },
  {
    path: '/product/:id',
    name: 'DetailNam',
    component: detail
    },
    {
        path: '/cart/:id',
        name: 'Giohang',
        component: giohang
        },
        {
            path: '/invoice',
            name: 'Hoadon',
            component: hoadon
            }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;