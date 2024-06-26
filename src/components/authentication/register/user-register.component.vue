<script setup>
import { ref } from 'vue';
import {useI18n} from "vue-i18n";
import { AccountApiService } from "@/services/account-api.service";
import router from "@/routes";

let userRegistration = ref({
  "name": "",
  "lastname": "",
  "birthdate": "2000-01-01",
  "username": "",
  "password": "",
  "confirmPassword": "",
  "email": "",
  "cellphone": ""
});

const accountService = new AccountApiService();

let registrationError = ref("");
const validateRegistration = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JS son 0-indexados
  const day = String(today.getDate()).padStart(2, '0');
  const maxDate = `${year}-${month}-${day}`;

  const birthDate = new Date(userRegistration.value.birthdate);
  const ageDiff = today - birthDate;
  const ageDate = new Date(ageDiff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userRegistration.value.birthdate>maxDate) {
    registrationError.value = "Birthdate must be an actual date";
    return false;
  }
  if (age<18) {
    registrationError.value = "You must be at least 18 years old."
    return false;
  }
  if (userRegistration.value.username.length < 6) {
    registrationError.value = "Username must be at least 6 characters long";
    return false;
  }
  if (userRegistration.value.password.length < 8) {
    registrationError.value = "Password must be at least 8 characters long";
    return false;
  }
  if (userRegistration.value.password !== userRegistration.value.confirmPassword) {
    registrationError.value = "Passwords do not match";
    return false;
  }
  if (!reEmail.test(userRegistration.value.email)) {
    registrationError.value = "Invalid email format";
    return false;
  }
  if (userRegistration.value.cellphone.length !== 9) {
    registrationError.value = "Cellphone must be 9 digits long";
    return false;
  }
  registrationError.value = "";
  return true;
};




const i18nLocale = useI18n();
const changeLanguage = () => {
  if (i18nLocale.locale.value == 'en') {
    i18nLocale.locale.value='es'
  }
  else {
    i18nLocale.locale.value='en'
  }
}

const handleRegistration = async () => {
  let isCorrectRegistrationRequest = validateRegistration();
  if (isCorrectRegistrationRequest) {
    try {
      let response = await accountService.register(userRegistration.value);

      router.push('/login');

    } catch (error) {
      if (error === 409) {
        registrationError.value="Username, email or phone number is already registered";
      }
      else {
        registrationError.value="Invalidate tokens. Try again";
      }
    }
  }
  //console.log(userRegistration.value);
}

</script>

<template>
  <div class="card-container">
    <div>
      <img src="/images/LogoFitShirt.png" alt="profile-Image" class="img-container">
      <div class="description-container">
        <p class="app-description"> {{ $t('login.description') }}</p>
      </div>
    </div>
    <div class ="register-card">
      <p class="title-container">{{ $t('register.title') }}</p>
      <p class="cwhite">{{ $t('register.name') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.name" aria-label="Enter a username" />

      <p class="cwhite">{{ $t('register.lastname') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.lastname" aria-label="Enter a username" />

      <p class="cwhite">{{ $t('register.birthdate') }}</p>
      <input class="date-input"
             type="date"
             id="date"
             aria-label="Birthday input"
             v-model="userRegistration.birthdate" />

      <p class="cwhite">{{ $t('register.user') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.username" aria-label="Enter a username" />

      <p class="cwhite">{{ $t('register.password') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.password" aria-label="Enter a password" />

      <p class="cwhite">{{ $t('register.confirmP') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.confirmPassword" aria-label="Confirm the password"/>

      <p class="cwhite">{{ $t('register.email') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.email" aria-label="Enter a email" />

      <p class="cwhite">{{ $t('register.phone') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.cellphone" aria-label="Enter a phone" />

      <p class="cwhite mb100 tac">{{ registrationError }}</p>

      <pv-button :label="$t('register.button')" severity="info" class="button-container" @click="handleRegistration" />
      <router-link to="/catalogue">
      </router-link>

      <p class="cwhite login">{{ $t('register.oldmsg') }} <router-link to="/login">{{ $t('register.signin') }}</router-link>
      </p>
      <div class="changelanguage">
        <pv-button @click="changeLanguage" class="language-button">
          <i class="pi pi-globe"></i>
          {{ i18nLocale.locale.value }}
        </pv-button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.login {
  text-align: center;
}
@media (max-width: 900px) {
  .app-description{
    display: none;
  }
  .img-container{
    display: none;
  }
  .description-container{
    display: none;
  }
}
@media (min-width: 670px) {
  .img-container{
    width: 400px;
  }
  .description-container{
    width: 400px;
  }
}

.card-container {
  display: flex;
  flex-direction: row;
  background-color: #dadada;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  padding: .4em 0;
}
.register-card {
  background-color: #333333;
  border-radius: 20px;
  padding: 2.2em 3.2em;
  display:flex;
  flex-direction: column;
}
.app-description{
  text-align: justify;
  font-family: Roboto, sans-serif;
}
.title-container{
  text-align: center;
  align-items: center;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: bolder;
  margin-bottom: 20px;
  color: white;
}
.button-container{
  width: 360px;
  background-color: #4d94ff;
  color: white;
  margin-bottom: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.cwhite{
  color: white;
}
.login {
  margin-top: .8em;
}
.login:hover {
  text-decoration: underline;
}
.mb10{
  margin-bottom: 10px;
}
.date-input {
  padding: .8em;
  font-size: 1.1em;
  border-radius: 8px;
  margin-bottom: 10px;
}
.changelanguage {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.language-button {
  background-color: #4d94ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.language-button .pi-globe {
  margin-right: 5px;
}
</style>