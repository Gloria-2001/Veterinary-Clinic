import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBook from '../views/AddBook.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-books',
    name: 'AddView',
    component: AddBook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
