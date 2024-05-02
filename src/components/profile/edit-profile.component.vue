<script setup>
import { nextTick } from 'vue';
import { onMounted ,ref } from 'vue';
import {UsersApiService} from "@/services/users-api.service.js";
import { useRoute } from 'vue-router';
const route = useRoute();

const userService = new UsersApiService();

let user = ref({})

const fetchUserData = async () => {
  user.value = await userService.getUserById(1);
}

const editUser = async () =>{
  await userService.editUser(user.value);
  console.log(user.value);
}
const renderComponent = ref(true);

const forceRerender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

onMounted(async () => {
  fetchUserData();
})
</script>

<template>
  <pv_card v-if="renderComponent" class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">Editar Perfil</div>
        <div>
          <div class="subtitle-text">Nombre Completo</div>
          <pv_inputText v-model="user.name" class="info-container"></pv_inputText>
          <div class="subtitle-text">Correo</div>
          <pv_inputText v-model="user.email" class="info-container"></pv_inputText>
          <div class="subtitle-text">N°Contacto </div>
          <pv_inputText v-model="user.number1" class="info-container"></pv_inputText>
          <div class="subtitle-text">N°Contacto Adicional</div>
          <pv_inputText v-model="user.number2" class="info-container"></pv_inputText>
          <div class="subtitle-text">Dni o Ruc</div>
          <pv_inputText v-model="user.document" class="info-container"></pv_inputText>
          <div class="subtitle-text">Dirección</div>
          <pv_inputText :value="user.shipment_address" class="info-container"></pv_inputText>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/profile"><pv_button class="button-style">Cancelar</pv_button></router-link>
        <router-link to="/profile"><pv_button @click="editUser(); forceRerender()" class="button-style">Continuar</pv_button></router-link>
      </div>
    </template>
  </pv_card>
</template>

<style scoped>
.card-container{
  background-color: #dadada;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.form-container {
  background-color: #dadada;
  padding: 20px;
  flex-direction: column;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.button-container {
  margin-top: 30px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.button-style {
  width: 263px;
}

.title-text {
  font-size: 70px;
  font-family: Roboto,math;
  color: #000000;
  margin-bottom: 30px;
}
.subtitle-text {
  font-size: 20px;
  font-family: Roboto,math;
  color: #000000;
}
.info-container {
  border-radius: 4px;
  background-color: #ffffff;
  height: 20px;
  width: 300px;
  margin-bottom: 8px;
}
</style>