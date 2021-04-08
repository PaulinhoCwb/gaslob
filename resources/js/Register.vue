<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>Cadastro de usúarios</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="isFormValid">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Titulo"
                :rules="[(v) => !!v || 'Campo obrigatório']"
                v-model="workshop.title"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="workshop.user_id"
                :rules="[(v) => !!v || 'Selecione um usúario']"
                :items="users"
                item-value="id"
                item-text="name"
                label="Usuário"
              />
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-textarea label="Descrição" v-model="workshop.description" />
          </v-col>
          <v-col cols="10" />
          <v-col>
            <v-btn color="primary" @click="submit">Salvar</v-btn>
          </v-col>
        </v-form>
      </v-card-text>
    </v-card>
    <v-snackbar top v-model="snackbar" :timeout="timeout">
      Cadastro realizado com Sucesso
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: () => ({
    isFormValid: false,
    workshop: {},
    users: [],
    loading: false,
    id: null,
    snackbar: false,
    timeout: 5000,
  }),
  created() {
    this.getUsers();
    if (this.$route.params.id) {
      this.id = parseInt(this.$route.params.id);
      this.getWorkshop(this.id);
    }
  },
  methods: {
    submit() {
      if (!this.isFormValid) {
        return;
      }
      let method = this.id ? "PUT" : "POST";
      let url = this.id ? `${process.env.MIX_URL}/workshops/${this.id}` : `${process.env.MIX_URL}/workshops`;

      this.loading = true;
      axios({
          url,
          method,
          data: this.workshop,
        })
        .then((response) => {
          this.snackbar = true;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    getUsers() {
      axios
        .get(`${process.env.MIX_URL}/users`)
        .then(({ data }) => (this.users = data))
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    getWorkshop(id) {
      axios
        .get(`${process.env.MIX_URL}/workshops/${id}`)
        .then(({ data }) => (this.workshop = data))
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>