import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBook from '../views/AddBook.vue'
import DeleteBook from '../views/DeleteBook.vue'
import UpdateBook from '../views/UpdateBook.vue'

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
  },
  {
    path: '/delete-books',
    name: 'DeleteBook',
    component: DeleteBook
  }
  ,
  {
    path: '/update-books',
    name: 'UpdateBook',
    component: UpdateBook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
