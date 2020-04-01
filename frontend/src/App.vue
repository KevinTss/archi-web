<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-if="user && token">
              <router-link to="/shoes">Shoes</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav v-if="user && token" class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{ user.username }}</em>
              </template>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-nav v-else>
            <router-link to="/">
              <b-button>Login</b-button>
            </router-link>
          </b-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main>
      <router-view @loggedIn="setUser" :token="token" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      token: null
    };
  },
  methods: {
    setUser(data) {
      this.user = data.user;
      this.token = data.token;
      this.$router.push("/shoes");
    },
    logout() {
      const url = `http://localhost:5000/logout?token=${this.token}`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.user = null;
          this.token = null;
          this.$router.push("/");
        });
    }
  }
};
</script>
