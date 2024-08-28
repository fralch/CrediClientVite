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
              class="input bg-gray-200 px-6 py-3 rounded-md focus:outline-none ml-8 md:px-4 md:py-2"
              v-model="clave"
              @focus="handleFocus"
              @blur="handleBlur"
              ref="claveInput"
            />
          </div>
          <label class="text-red-500">Error message</label>
          <div
            class="simple-keyboard"
            id="keyboard"
            style="display: none"
          ></div>
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
      <button key="viewKeyboard" @click="fnViewKey">View Keyboard</button>
    </div>
    <div
      class="flex-1 bg-[url('@/assets/login/img-senora.svg')] bg-no-repeat bg-cover text-white p-10 flex flex-col justify-center"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const clave = ref("");
const claveInput = ref(null);

let keyboard;

function shuffleArray(array) {
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
  if (keyboard.style.display == "none") {
    keyboard.style.display = "block";
  } else {
    keyboard.style.display = "none";
  }
}

// Función que se ejecuta cuando el input gana el foco
function handleFocus() {
  document.getElementById("keyboard").style.display = "block";
  claveInput.value.addEventListener("keydown", preventKeydown); // esto hace que el input no se pueda escribir desde el teclado fisico
}

// Función que se ejecuta cuando el input pierde el foco
function handleBlur() {
  claveInput.value.removeEventListener("keydown", preventKeydown); // elimina el evento para que no se pueda escribir
}

function preventKeydown(event) {
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

  function onChange(input) {
    clave.value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button) {
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
</script>
