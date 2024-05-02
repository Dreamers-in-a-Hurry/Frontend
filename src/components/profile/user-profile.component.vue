<script setup>
import { onMounted ,ref } from 'vue';
import {UsersApiService} from "@/services/users-api.service.js";
import { useRoute } from 'vue-router';
const route = useRoute();

const userService = new UsersApiService();

let user = ref({})

const fetchUserData = async () => {
  user.value = await userService.getUserById(1);
}



onMounted(async () => {
  fetchUserData();
})
</script>

<template>
  <pv_card class="card-container">
    <template #content>
        <div class="form-container">
          <div class="title-text">Mi Perfil</div>
          <div>
            <div class="subtitle-text">Nombre Completo</div>
            <div class="info-container">{{user.name}}</div>
            <div class="subtitle-text">Correo</div>
            <div class="info-container">{{user.email}}</div>
            <div class="subtitle-text">N°Contacto </div>
            <div class="info-container">{{user.number1}}</div>
            <div class="subtitle-text">N°Contacto Adicional</div>
            <div class="info-container">{{user.number2}}</div>
            <div class="subtitle-text">Dni o Ruc</div>
            <div class="info-container">{{user.document}}</div>
            <div class="subtitle-text">Dirección</div>
            <div class="info-container">{{user.shipment_address}}</div>
          </div>
        </div>
        <div class="button-container">
          <router-link to="/edit-profile">
            <pv_button class="button-style">Editar Perfil</pv_button>
          </router-link>
          <router-link to="/edit-password">
            <pv_button class="button-style">Editar Contraseña</pv_button>
          </router-link>
          <router-link to="/edit-payment-method">
            <pv_button class="button-style">Añadir/Editar Metodo de Pago</pv_button>
          </router-link>



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
  width: 250px;
  margin-bottom: 8px;
}
</style>