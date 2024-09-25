<template>
  <div class="flex h-screen">
    <div
      class="flex-1 bg-[url('@/assets/login/triangulos-login.svg')] bg-repeat-y bg-left-top flex flex-col justify-center h-screen"
    >
      <div
        class="bg-[url('@/assets/recuperar.jpg')] bg-no-repeat bg-cover p-10 flex flex-col items-center justify-center sm:h-[80vh] h-[100vh]"
        id="recuperar"
      >
        <!-- Ajustes para el logo -->
        <img
          src="../assets/logo-blanco.png"
          alt=""
          class="sm:self-start sm:w-64 w-48 self-center sm:mt-5 mt-10"
        />
        <form @submit.prevent="handleSubmit" class="m-auto">
          <div class="flex flex-col">
            <h3
              key="title"
              class="text-3xl sm:font-bold text-center text-white mb-10"
            >
              Recuperar clave web
            </h3>
            <div class="mt-4">
              <label
                for="nueva_clave"
                class="text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-36 md:px-6 md:py-2"
              >
                Nueva clave
              </label>
              <input
                type="text"
                class="bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 w-48"
                ref="nueva_clave"
              />
            </div>
            <div class="mt-4 relative">
              <label
                for="repetir_clave"
                class="text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-36 md:px-6 md:py-2"
              >
                Repetir clave
              </label>
              <input
                class="bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 w-48"
                ref="repetir_clave"
              />
            </div>
            <label class="text-red-500">Error message</label>
            <div
              class="simple-keyboard hidden"
              id="keyboard"
              style="display: none"
            ></div>
            <button
              key="login"
              class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 sm:bg-credi-blue bg-credi-green text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";
</script>