<template>
  <div>
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><router-link to="/">Login</router-link></li>
          <li><router-link to="/shoes">Shoes</router-link></li>
        </ul>
        <b-button>Button</b-button>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
