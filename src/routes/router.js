import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';
import UserProfileComponent from '@/components/profile/user-profile.component.vue';
import EditProfileComponent from '@/components/profile/edit-profile.component.vue';
import EditPaymentMethod from "@/components/profile/edit-payment-method.component.vue";
import EditPassword from "@/components/profile/edit-password.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: UserProfileComponent },
  { path: '/profile', component: UserProfileComponent },
  { path: '/edit-profile', component: EditProfileComponent },
  { path: '/edit-password', component: EditPassword },
  { path: '/edit-payment-method', component: EditPaymentMethod },
  { path: '/catalogue', component: ShirtsCatalogueComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;