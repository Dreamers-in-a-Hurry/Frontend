<script setup>
</script>

<template>
  <pv-card >
    <template #content>
      <div class="card-container">
        <div class="form-container">
          <div class="title-text">Realizar Mejora</div>
          <div class="w200">
            <div>Estimado cliente ¿Está seguro que desea realizar esta mejora?</div><br>
          </div>
        </div>
        <div class="button-container">
          <router-link to="/catalogue">
            <pv-button class="button-style">Aceptar</pv-button>
          </router-link>
          <router-link to="/premium">
            <pv-button class="button-style">Cancelar</pv-button>
          </router-link>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-container{
  background-color: #dadada;
  height: 100%;
  padding: 3rem;
}
.w200{
  width: 200px;
}
.form-container {
  background-color: #dadada;
  padding: 20px;
  flex-direction: column;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-container {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: .8em 0;
}
.button-style {
  padding: .4em 1.8em;
  margin: .2em 0;
  border-radius: 6px;
  font-size: .9em;
  cursor: pointer;
  background-color: #4D94FF;
  color: #E5E5E5;
}
.title-text {
  font-size: 2em;
  font-weight: 600;
  font-family: Roboto,math;
  color: #000000;
  margin-bottom: 30px;

}
</style>