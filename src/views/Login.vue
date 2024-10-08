<template>
  <div class="flex h-screen">
    <div
      class="flex-1 bg-[url('@/assets/login/triangulos-login.svg')] bg-repeat-y bg-left-top flex flex-col justify-center h-screen"
    >
      <form @submit.prevent="handleSubmit" class="m-auto">
        <img
          src="./../assets/logo.svg"
          alt=""
          class="mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5"
        />
        <div class="flex flex-col">
          <div class="mt-4">
            <label
              for="dni"
              class="bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-4 md:py-2 w-20 sm:px-2 sm:py-1"
            >
              DNI
            </label>
            <input
              type="number"
              class="bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
            />
          </div>
          <div class="mt-4 relative">
            <label
              for="clave"
              class="bg-credi-green text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-6 md:py-2"
            >
              CLAVE
            </label>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2"
              v-model="clave"
              @focus="handleFocus"
              @blur="handleBlur"
              ref="claveInput"
              readonly
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 bg-[#E5E7EB] rounded-md"
              @click="togglePasswordVisibility"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path
                  d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                />
              </svg>
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                <path
                  d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
                />
                <path d="M3 3l18 18" />
              </svg>
            </button>
          </div>
          <label class="text-red-500">Error message</label>
          <div
            class="simple-keyboard hidden"
            id="keyboard"
            style="display: none"
          ></div>
          <button
            key="login"
            class="px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            @click="Logear"
          >
            Iniciar sesión
          </button>
          <div class="text-center mt-4">
            <router-link
              to="/validardni"
              class="text-credi-blue hover:text-credi-green transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Crear cuenta
            </router-link>
          </div>
        </div>
      </form>
    </div>

    <!-- Esta es la imagen que se ocultará en móviles -->
    <div
      class="hidden md:block md:flex-1 md:bg-[url('@/assets/login/img-senora.svg')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import Swal from "sweetalert2";

const clave = ref("");
const claveInput = ref<HTMLInputElement | null>(null);
const showPassword = ref(false);

let keyboard: Keyboard;

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function shuffleArray(array: string[]) {
  const fixedKeys = ["{shift}"];
  const shuffledKeys = array.filter((key) => !fixedKeys.includes(key));
  const fixedKeysIndexes = array.map((key) =>
    fixedKeys.includes(key) ? key : null
  );

  for (let i = shuffledKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
  }

  let index = 0;
  return array.map((key) =>
    fixedKeysIndexes[index] ? fixedKeysIndexes[index++] : shuffledKeys.shift()
  );
}

function fnViewKey() {
  if (keyboard.options.container.style.display === "none") {
    keyboard.options.container.style.display = "block";
  } else {
    keyboard.options.container.style.display = "none";
  }
}

// Función que se ejecuta cuando el input gana el foco
function handleFocus() {
  const keyboardElement = document.getElementById("keyboard");
  if (keyboardElement) {
    keyboardElement.style.display = "block";
    keyboardElement.removeAttribute("disabled");
  }

  if (claveInput.value) {
    // Solo si está definido
    const inputElement = claveInput.value;
    inputElement.addEventListener("keydown", preventKeydown);
  }
}

function handleBlur() {
  const keyboardElement = document.getElementById("keyboard");
  if (keyboardElement) {
    keyboardElement.setAttribute("disabled", "true");
  }

  if (claveInput.value) {
    // Solo si está definido
    const inputElement = claveInput.value;
    inputElement.removeEventListener("keydown", preventKeydown);
  }
}

function preventKeydown(event: KeyboardEvent) {
  event.preventDefault();
}

// Layout original del teclado
const originalLayout = [
  "1 2 3 4 5 6 7 8 9 0",
  "q w e r t y u i o p",
  "a s d f g h j k l",
  "{shift} z x c v b n m",
  "{bksp}",
];

const shiftedLayout = [
  "1 2 3 4 5 6 7 8 9 0",
  "Q W E R T Y U I O P",
  "A S D F G H J K L",
  "{shift} Z X C V B N M",
  "{bksp}",
];

// Layout barajado
const shuffledLayoutOriginal = originalLayout.map((row) =>
  shuffleArray(row.split(" ")).join(" ")
);

const shuffledLayoutShifted = shiftedLayout.map((row) =>
  shuffleArray(row.split(" ")).join(" ")
);

onMounted(() => {
  keyboard = new Keyboard({
    layout: {
      default: shuffledLayoutOriginal,
      shift: shuffledLayoutShifted,
    },
    display: {
      "{bksp}": "⌫",
      "{space}": " ",
      "{shift}": "⇧",
    },
    buttonTheme: [
      {
        class: "hg-button-special",
        buttons: "{arrowleft} {space} {shift}",
      },
    ],
    onChange: (input) => onChange(input),
    onKeyPress: (button) => onKeyPress(button),
  });

  function onChange(input: string) {
    clave.value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button: string) {
    console.log("Button pressed", button);
    if (button === "{bksp}") {
      clave.value = clave.value.slice(0, -1);
      keyboard.setInput(clave.value);
    } else if (button === "{shift}") {
      keyboard.setOptions({
        layoutName:
          keyboard.options.layoutName === "default" ? "shift" : "default",
      });
    } else {
      clave.value += button;
      keyboard.setInput(clave.value);
    }
  }
});

// Definición de la función handleSubmit
function handleSubmit() {
  console.log("Form submitted with clave:", clave.value);
  // Aquí puedes agregar la lógica para manejar el envío del formulario
}

function Logear() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Usuario y/o contraseña incorrectos!",
    confirmButtonText: "OK",
    confirmButtonColor: "#254C97",
    footer:
      '<a href="#" id="restaurar-clave" style="color: #254C97; text-decoration: underline;">Olvide mi contraseña</a>',
  });

  // Agrega un listener al enlace del footer cuando se cargue la alerta
  const footer = Swal.getFooter();
  if (footer) {
    const link = footer.querySelector("#restaurar-clave");
    if (link) {
      // Verifica si el enlace no es null
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        RestaurarClave(); // Llamar a la función RestaurarClave
      });
    }
  }
}

function RestaurarClave() {
  Swal.fire({
    icon: "warning",
    title: "Restaurar contraseña",
    text: "Hemos enviado un mensaje a su correo para que pueda restaurar la contraseña",
    confirmButtonText: "OK",
    confirmButtonColor: "#254C97",
  });
}
</script>
