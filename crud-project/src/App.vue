<template>
  <nav>
    <h1 id="nav-title">Biblioteca</h1>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
  background-color: #2c3e50;
}

#nav-title{
  color: white;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 5px;
}
</style>
