<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Shoes</h1>
      </b-col>
      <b-col>
        <router-link to="/shoes/add">
          <b-button variant="success">Add shoes</b-button>
        </router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="shoes" @row-clicked="item=>itemClick(item)"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      shoes: []
    };
  },
  props: {
    token: String
  },
  created() {
    if (this.token) {
      const url = `http://localhost:5000/shoes?token=${this.token}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.shoes = response;
        });
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push("/shoes/" + item.id_product);
    }
  }
};
</script>
