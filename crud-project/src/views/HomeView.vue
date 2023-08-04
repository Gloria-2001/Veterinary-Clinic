<template>
  <div class="options">
    <router-link to="/add-books"><p class="user-options">Agregar Libro</p></router-link> |
    <router-link to="/delete-books"><p class="user-options">Eliminar Libro</p></router-link> |
    <router-link to="/update-books"><p class="user-options">Editar Libro</p></router-link>
  </div>

  <div class="products">
    <div class="book">
      <img src="../assets/conde.jpg" alt="" class="book-image">
      <h1 class="price">$ 490.00</h1>
      <h2 class="book-title">El Conde de Montecristo</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
    <div class="book">
      <img src="../assets/cien-anos.png" alt="" class="book-image">
      <h1 class="price">$ 388.00</h1>
      <h2 class="book-title">Cien años de Soledad</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
    <div class="book">
      <img src="../assets/narnia.jpg" alt="" class="book-image">
      <h1 class="price">$ 268.00</h1>
      <h2 class="book-title">Las Crónicas de Narnia: El León, La Bruja y El Ropero</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
    <div class="book">
      <img src="../assets/conde.jpg" alt="" class="book-image">
      <h1 class="price">$ 490.00</h1>
      <h2 class="book-title">El Conde de Montecristo</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
    <div class="book">
      <img src="../assets/cien-anos.png" alt="" class="book-image">
      <h1 class="price">$ 388.00</h1>
      <h2 class="book-title">Cien años de Soledad</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
    <div class="book">
      <img src="../assets/narnia.jpg" alt="" class="book-image">
      <h1 class="price">$ 268.00</h1>
      <h2 class="book-title">Las Crónicas de Narnia: El León, La Bruja y El Ropero</h2>
      <h3 class="short-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatem, corporis earum eaque ea dolorum odio illum deleniti, architecto temporibus eveniet sequi eum quam aut aliquid vero, non tempora delectus?</h3>
      <button class="details">Ver más</button>
    </div>
  </div>
  <div class="img-final"></div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.user-options{
  display: inline-block;
  margin: 20px;
  color: black;
}
.user-options:hover{
  text-decoration: underline;
  cursor: pointer;
}
/**PRODUCTOS */
.products{
  display: grid;
  grid-template-columns: auto auto auto;
}
.book{
  margin: 10px;
}
.book-image{
  width: 200px;
  height: 300px;
}
.price{
  color: red;
  font-size: large;
}
.book-title{
  font-size: 24px;
  font-family: 'Zeyada', cursive;
  color: black;
}
.short-text{
  font-size: 16px;
  text-align: justify;
  font-family: 'Montserrat', sans-serif;
  color: black;
}
.details, .save, .delete{
  background-color: rgb(41, 59, 221);
  border-color: rgb(41, 59, 221);
  font-size: 16px;
  padding: 10px;
  width: 120px;
  border-radius: 40px;
  color: white;
  margin-top: 20px;
}
.details:hover, .save:hover, .delete:hover{
  cursor: pointer;
  background-color: rgb(100, 115, 251);
  border-color: rgb(100, 115, 251);
}
.img-final{
  background-image: url('@/assets/mancha-de-cafe.jpg');
  background-size: cover;
  width: 350px;
  height: 350px;
  display: block;
  float: right;
  margin-top: -350px;
}
</style>