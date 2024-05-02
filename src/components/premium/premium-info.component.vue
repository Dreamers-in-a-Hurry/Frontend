<script setup>
</script>

<template>
  <pv-card class="card-container">
    <template #content>
        <div class="form-container">
          <div class="title-text">Mejora a Premium</div>
          <div class="version_container">
            <div class="border_color">
              <div class="title-text">Versión Gratuita</div>
              <div class="w200">
                <div>Permite realizar compras de los diversos diseños</div><br>
                <div>Permite subir tus diseños y ponerlos a la venta</div>
              </div>
            </div>
            <div class="border_color">
              <div class="title-text">Versión Premium</div>
              <div class="w200">
                <div>Permite realizar compras de los diversos diseños</div><br>
                <div>Permite subir tus diseños y ponerlos a la venta</div><br>
                <div>Incrementa la cantidad de diseños que puedes ofrecer</div><br>
                <div>Te permite destacar tus diseños y que sean más vistos</div><br>
                <div>S/50.00 al mes</div>
              </div>
            </div>
          </div>
        </div>
        <div class="button-container">
          <router-link to="/premium-confirmation">
            <pv-button class="button-style">Adquirir Membresía</pv-button>
          </router-link>
        </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-container{
  background-color: #dadada;
  height: 100%;
}
.border_color{
  border: 2px solid #4d94ff;
  padding: 2rem;
}
.w200{
  width: 200px;
  margin-left: 2rem;
}
.version_container{
  display: flex;
  flex-direction: row;

}
.form-container {
  background-color: #dadada;
  padding: 20px;
  flex-direction: column;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #4d94ff;
}
.button-container {
  margin-top: 30px;
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