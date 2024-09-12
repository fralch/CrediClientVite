<template>
  <div id="app">
    <nav class="hidden">
      <router-link to="/">Home</router-link>
      <router-link to="/registrar">registrar</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
