<template>
  <header>
    <div class="header-img">
    <div class="page-title">
    <h1>Music Doctors</h1>
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>

    </div>
    

  </header>
  
  
</template>

<script>
export default {

}
</script>

<style scoped>
.page-title  {
 text-align: center;
 padding-top: 1em;
 font-size: 2em;
}

nav ul {
  list-style: none;
}

nav li {
  display: inline;
  margin-right: 20px;
}

.header-img {
  background: url('../assets/recordplayer.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #cccccc;
  height: 20vh;
}


</style>