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
        <b-table striped hover :items="shoes"></b-table>
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
  created() {
    const url = "http://localhost:5000/shoes";
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
  }
};
</script>
