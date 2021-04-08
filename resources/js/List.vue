<template>
  <v-card>
    <v-card-title>
      <h4>Listagem de workshops</h4>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="workshops">
        <template #item.created_at="{ value }">
          {{ new Date(value).toLocaleString("pt-BR") }}
        </template>
        <template #item.id="{ value }">
          <v-btn :to="`/register/${value}`" class="mx-2" fab dark small color="primary">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="destroy(value)" class="mx-2" fab dark small color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data: () => ({
    headers: [
      {
        text: "Titulo",
        value: "title",
      },
      {
        text: "Descrição",
        value: "description",
      },
      {
        text: "Data criação",
        value: "created_at",
      },
      {
        text: "",
        value: "id",
      },
    ],
    workshops: [],
  }),
  created() {
    this.load();
  },
  methods: {
    async load() {
      const { data } = await axios.get(`${process.env.MIX_URL}/workshops`);
      this.workshops = data;
    },
    destroy(id) {
      axios.delete(`${process.env.MIX_URL}/workshops/${id}`)
      .then(response => this.load())
      .catch(error => console.error(error));
    }
  },
};
</script>

<style lang="scss" scoped>
</style>