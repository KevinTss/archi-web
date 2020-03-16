<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Add shoe</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Addidas"
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Quantity:"
            label-for="quantity"
          >
            <b-form-input
              id="quantity"
              v-model="form.quantity"
              type="text"
              placeholder="19"
            />
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Category:"
            label-for="category"
          >
            <b-form-select
              id="category"
              v-model="form.category"
              :options="categoriesOptions"
            ></b-form-select>
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

          <b-button type="submit" variant="primary">Add</b-button>
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
        name: "",
        quantity: "",
        category: ""
      },
      categoriesOptions: []
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("submit");
    }
  }
};
</script>
