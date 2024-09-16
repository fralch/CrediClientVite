<template>
  <div class="flex h-screen">
    <!-- Esta es la imagen que se ocultará en móviles -->
    <div
      class="hidden md:block md:flex-1 md:bg-[url('@/assets/login/lady.jpg')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center"
    ></div>

    <div
      class="flex-1 bg-[url('@/assets/login/trianngulos.svg')] bg-repeat-y bg-right-top flex flex-col justify-center"
      id="registrar"
    >
      <form class="m-auto" @submit.prevent="handleSubmit">
        <div
          class="icon-circle mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <div class="text-center">
          <span class="text-[#838181] text-3xl font-bold"
            >COMPLETA TUS DATOS</span
          >
        </div>

        <div class="flex flex-col">
          <div class="mt-4 flex items-center">
            <label
              for="dni"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-44 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1"
            >
              DNI
            </label>
            <input
              type="number"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              value="45530278"
              readonly
            />
          </div>
          <div class="mt-4 flex items-center">
            <label
              for="paterno"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-44 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1 hidden md:block"
            >
              APELLIDO PATERNO
            </label>
            <label
              for="paterno"
              class="bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden"
            >
              A.PATERNO
            </label>
            <input
              type="text"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              value="Cairampoma"
              readonly
            />
          </div>
          <div class="mt-4 flex items-center">
            <label
              for="materno"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1 hidden md:block"
            >
              APELLIDO MATERNO
            </label>
            <label
              for="materno"
              class="bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden"
            >
              A.MATERNO
            </label>
            <input
              type="text"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              value="Castro"
              readonly
            />
          </div>
          <div class="mt-4 flex items-center">
            <label
              for="nombres"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1"
            >
              NOMBRES
            </label>
            <input
              type="text"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              value="Frank"
              readonly
            />
          </div>
          <div class="mt-4 flex items-center">
            <label
              for="dni"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1"
            >
              CLAVE
            </label>
            <input
              type="text"
              class="input px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 border-gray-300 border-2"
              placeholder="ingresar clave"
            />
          </div>
          <div class="mt-4 flex items-center">
            <label
              for="paterno"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1 hidden md:block"
            >
              REPETIR CLAVE
            </label>
            <label
              for="paterno"
              class="bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden"
            >
              REPETIR
            </label>
            <input
              type="text"
              class="input px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 border-gray-300 border-2"
              placeholder="repetir clave"
            />
          </div>

          <div
            class="simple-keyboard hidden"
            id="keyboard"
            style="display: none"
          ></div>

          <button
            key="login"
            class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Registrar
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
.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #f0f0f0; /* Color de fondo del círculo */
  border-radius: 50%;
}
</style>
