<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Edit shoe</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Name:" label-for="name">
            <b-form-input id="name" v-model="form.name" type="text" placeholder="Addidas" />
          </b-form-group>

          <b-form-group id="input-group-2" label="Quantity:" label-for="quantity">
            <b-form-input id="quantity" v-model="form.quantity" type="text" placeholder="19" />
          </b-form-group>

          <b-form-group id="input-group-3" label="Category:" label-for="category">
            <b-form-select id="category" v-model="form.category" :options="categoriesOptions"></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Comment:" label-for="comment">
            <b-form-textarea
              id="comment"
              v-model="form.comment"
              placeholder="Comment..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Edit</b-button>
          <b-button variant="danger" @click="deleteShoe">Delete</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      listShoes: [],
      form: {
        name: "",
        quantity: "",
        category: null,
        comment: ""
      },
      categoriesOptions: []
    };
  },
  props: {
    token: String
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const url = `http://localhost:5000/shoes?id=${
        this.$route.params.id
      }&cat=${this.form.category}&brand=${this.form.name}&quantity=${
        this.form.quantity
      }&comment=${this.form.comment || ""}&token=${this.token}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.$router.push("/shoes");
        });
    },
    deleteShoe(e) {
      e.preventDefault();
      const url = `http://localhost:5000/shoes?id=${this.$route.params.id}&token=${this.token}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.$router.push("/shoes");
        });
    }
  },
  created() {
    if (this.token) {
      const url = `http://localhost:5000/categories?token=${this.token}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          this.categoriesOptions = response.map(item => ({
            value: item.id_categorie,
            text: item.name
          }));

          const url2 = `http://localhost:5000/shoes?token=${this.token}`;
          fetch(url2, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(shoes => {
              const shoe = shoes.find(item => {
                return item.id_product === Number(this.$route.params.id);
              });
              this.form = {
                name: shoe.name,
                quantity: shoe.quantity,
                category: shoe.cat_id,
                comment: shoe.comment
              };
            });
        });
    } else {
      this.$router.push("/");
    }
  }
};
</script>
