<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Login</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="form.username"
              type="text"
              required
              placeholder="John"
            />
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              required
              placeholder="********"
            />
          </b-form-group>
          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const url = `http://localhost:5000/login?username=${this.form.username}&password=${this.form.password}`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.$emit("loggedIn", response);
        });
    }
  }
};
</script>
