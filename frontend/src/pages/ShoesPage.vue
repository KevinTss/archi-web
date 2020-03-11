<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1>Shoes</h1>
      </b-col>
      <b-col>
        <b-button variant="success">Add shoes</b-button>
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
      shoes: [
        { name: "Addidas", Quantity: 42, Category: "Children" },
        { name: "Nike", Quantity: 2, Category: "Male" },
        { name: "Puma", Quantity: 122, Category: "Female" }
      ]
    };
  }
};
</script>
