<template>
  <div class="flex h-screen">
    <div
      class="flex-1 bg-[url('@/assets/login/triangulos-login.svg')] bg-repeat-y bg-left-top flex flex-col justify-center h-screen"
    >
      <form @submit.prevent="handleSubmit" class="m-auto">
        <img
          src="./../assets/logo.svg"
          alt=""
          class="mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4"
        />
        <div class="flex flex-col">
          <div class="mt-4">
            <label
              for="dni"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block w-40 md:w-32 md:px-4 md:py-2"
            >
              DNI
            </label>
            <input
              type="text"
              class="bg-gray-200 px-6 py-3 rounded-md focus:outline-none ml-8 md:px-4 md:py-2"
            />
          </div>
          <div class="mt-4">
            <label
              for="clave"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block w-40 md:w-32 md:px-4 md:py-2"
            >
              CLAVE
            </label>
            <input
              type="text"
              class="bg-gray-200 px-6 py-3 rounded-md focus:outline-none ml-8 md:px-4 md:py-2"
            />
          </div>

          <!-- error message -->

          <label class="text-red-500">Error message</label>
          <!-- error message -->
          <button
            key="login"
            class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Iniciar sesión
          </button>
          <div class="text-center">
            <router-link
              to="/register"
              class="text-credi-blue hover:text-credi-green transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Crear cuenta
            </router-link>
          </div>
        </div>
      </form>
    </div>
    <div
      class="flex-1 bg-[url('@/assets/login/img-senora.svg')] bg-no-repeat bg-cover text-white p-10 flex flex-col justify-center"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const handleSubmit = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("Remember Me:", rememberMe.value);
};
</script>
