<template>
  <div class="flex h-screen">
    <!-- Esta es la imagen que se ocultará en móviles -->
    <div
      class="hidden md:block md:flex-1 md:bg-[url('@/assets/login/img-senor.png')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center"
    ></div>

    <div
      class="flex-1 bg-[url('@/assets/login/trianngulos.svg')] bg-repeat-y bg-right-top flex flex-col justify-center"
      id="validarDNI"
    >
      <form class="m-auto" @submit.prevent="handleSubmit">
        <img
          src="./../assets/logo.svg"
          alt=""
          class="mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5"
        />
        <div class="flex flex-col">
          <div class="mt-4">
            <label
              for="dni"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1"
            >
              DNI
            </label>
            <input
              type="number"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              ref="dniInput"
            />
          </div>
          <div class="mt-4 relative" v-if="mostrarCelular">
            <label
              for="clave"
              class="bg-credi-green text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-6 md:py-2"
            >
              CELULAR
            </label>
            <input
              type="number"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              ref="celularInput"
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 bg-[#E5E7EB] rounded-md"
            ></button>
          </div>
          <label class="text-gray-500"
            >Tu celular termina con *****164 completalo</label
          >
          <label class="text-red-500">Error message</label>
          <div
            class="simple-keyboard hidden"
            id="keyboard"
            style="display: none"
          ></div>
          <button
            v-if="!mostrarCelular"
            key="login"
            class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            @click="mostrarCelularFun"
          >
            Comprobar
          </button>
          <button
            v-if="mostrarCelular"
            key="login"
            class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            @click="validarDNI"
          >
            Validar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";

const mostrarCelular = ref(false);
const dniInput = ref<HTMLInputElement | null>(null);
const celularInput = ref<HTMLInputElement | null>(null);

function mostrarCelularFun() {
  if (dniInput.value && dniInput.value.value !== "") {
    mostrarCelular.value = true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor ingresa tu dni",
    });
  }
}

function validarDNI() {
  Swal.fire({
    icon: "success",
    title: "Validando",
    text: "Hemos enviado un mensaje de whatsapp al numero de celular principal que tenemos registrado, por favor completar el registro desde alli.",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#254C97",
  }).then((result) => {});
}

function handleSubmit() {
  // Aquí puedes agregar la lógica para manejar el envío del formulario
}
</script>

<style>
</style>
