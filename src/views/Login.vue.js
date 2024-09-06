import { onMounted, ref } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const clave = ref("");
const claveInput = ref(null);
const showPassword = ref(false);
let keyboard;
function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
}
function shuffleArray(array) {
    const fixedKeys = ["{shift}"];
    const shuffledKeys = array.filter((key) => !fixedKeys.includes(key));
    const fixedKeysIndexes = array.map((key) => fixedKeys.includes(key) ? key : null);
    for (let i = shuffledKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
    }
    let index = 0;
    return array.map((key) => fixedKeysIndexes[index] ? fixedKeysIndexes[index++] : shuffledKeys.shift());
}
function fnViewKey() {
    if (keyboard.options.container.style.display === "none") {
        keyboard.options.container.style.display = "block";
    }
    else {
        keyboard.options.container.style.display = "none";
    }
}
// Función que se ejecuta cuando el input gana el foco
function handleFocus() {
    document.getElementById("keyboard").style.display = "block";
    document.getElementById("keyboard")?.removeAttribute("disabled");
    claveInput.value?.addEventListener("keydown", preventKeydown); // esto hace que el input no se pueda escribir desde el teclado fisico
}
// Función que se ejecuta cuando el input pierde el foco
function handleBlur() {
    document.getElementById("keyboard")?.setAttribute("disabled", "true");
    claveInput.value?.removeEventListener("keydown", preventKeydown); // elimina el evento para que no se pueda escribir
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
const shuffledLayoutOriginal = originalLayout.map((row) => shuffleArray(row.split(" ")).join(" "));
const shuffledLayoutShifted = shiftedLayout.map((row) => shuffleArray(row.split(" ")).join(" "));
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
        }
        else if (button === "{shift}") {
            keyboard.setOptions({
                layoutName: keyboard.options.layoutName === "default" ? "shift" : "default",
            });
        }
        else {
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
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
const __VLS_ctxBase = {};
const __VLS_ctx = __VLS_ctxBase;
let __VLS_name;
const __VLS_localComponents = {
    ...{},
    ...{},
    ...__VLS_ctxBase,
};
let __VLS_components;
let __VLS_styleScopedClasses;
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-screen") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 bg-[url('@/assets/login/triangulos-login.svg')] bg-repeat-y bg-left-top flex flex-col justify-center h-screen") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("m-auto") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./../assets/logo.svg"), alt: (""), ...{ class: ("mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("dni"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-4 md:py-2 w-20 sm:px-2 sm:py-1") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 relative") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("clave"), ...{ class: ("bg-credi-green text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-6 md:py-2") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onFocus: (__VLS_ctx.handleFocus) }, ...{ onBlur: (__VLS_ctx.handleBlur) }, type: ((__VLS_ctx.showPassword ? 'text' : 'password')), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, ref: ("claveInput"), readonly: (true), });
(__VLS_ctx.clave);
// @ts-ignore
__VLS_ctx.claveInput;
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.togglePasswordVisibility) }, type: ("button"), ...{ class: ("absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 bg-[#E5E7EB] rounded-md") }, });
if (__VLS_ctx.showPassword) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), width: ("24"), height: ("24"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), ...{ class: ("icon icon-tabler icons-tabler-outline icon-tabler-eye") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("none"), d: ("M0 0h24v24H0z"), fill: ("none"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"), });
}
if (!__VLS_ctx.showPassword) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), width: ("24"), height: ("24"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), ...{ class: ("icon icon-tabler icons-tabler-outline icon-tabler-eye-off") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("none"), d: ("M0 0h24v24H0z"), fill: ("none"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M10.585 10.587a2 2 0 0 0 2.829 2.828"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M3 3l18 18"), });
}
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-red-500") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("simple-keyboard hidden") }, id: ("keyboard"), ...{ style: ({}) }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ key: ("login"), ...{ class: ("px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mt-4") }, });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/register"), ...{ class: ("text-credi-blue hover:text-credi-green transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, }));
const __VLS_2 = __VLS_1({ to: ("/register"), ...{ class: ("text-credi-blue hover:text-credi-green transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_nonNullable(__VLS_5.slots).default;
const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden md:block md:flex-1 md:bg-[url('@/assets/login/img-senora.svg')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center") }, });
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['h-screen'];
__VLS_styleScopedClasses['flex-1'];
__VLS_styleScopedClasses['bg-[url(\'@/assets/login/triangulos-login.svg\')]'];
__VLS_styleScopedClasses['bg-repeat-y'];
__VLS_styleScopedClasses['bg-left-top'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['justify-center'];
__VLS_styleScopedClasses['h-screen'];
__VLS_styleScopedClasses['m-auto'];
__VLS_styleScopedClasses['mx-auto'];
__VLS_styleScopedClasses['mb-10'];
__VLS_styleScopedClasses['2xl:w-full'];
__VLS_styleScopedClasses['xl:w-10/12'];
__VLS_styleScopedClasses['lg:w-8/12'];
__VLS_styleScopedClasses['md:w-3/4'];
__VLS_styleScopedClasses['w-3/5'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['mt-4'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-32'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-20'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['bg-gray-200'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['md:ml-8'];
__VLS_styleScopedClasses['ml-2'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['mt-4'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-32'];
__VLS_styleScopedClasses['md:px-6'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['bg-gray-200'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['md:ml-8'];
__VLS_styleScopedClasses['ml-2'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['absolute'];
__VLS_styleScopedClasses['inset-y-0'];
__VLS_styleScopedClasses['right-0'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['text-gray-600'];
__VLS_styleScopedClasses['bg-[#E5E7EB]'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['icon-tabler'];
__VLS_styleScopedClasses['icons-tabler-outline'];
__VLS_styleScopedClasses['icon-tabler-eye'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['icon-tabler'];
__VLS_styleScopedClasses['icons-tabler-outline'];
__VLS_styleScopedClasses['icon-tabler-eye-off'];
__VLS_styleScopedClasses['text-red-500'];
__VLS_styleScopedClasses['simple-keyboard'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['ml-8'];
__VLS_styleScopedClasses['m-10'];
__VLS_styleScopedClasses['bg-credi-blue'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['hover:bg-credi-blue'];
__VLS_styleScopedClasses['transition'];
__VLS_styleScopedClasses['duration-500'];
__VLS_styleScopedClasses['ease-in-out'];
__VLS_styleScopedClasses['transform'];
__VLS_styleScopedClasses['hover:-translate-y-1'];
__VLS_styleScopedClasses['hover:scale-110'];
__VLS_styleScopedClasses['text-center'];
__VLS_styleScopedClasses['mt-4'];
__VLS_styleScopedClasses['text-credi-blue'];
__VLS_styleScopedClasses['hover:text-credi-green'];
__VLS_styleScopedClasses['transition'];
__VLS_styleScopedClasses['duration-500'];
__VLS_styleScopedClasses['ease-in-out'];
__VLS_styleScopedClasses['transform'];
__VLS_styleScopedClasses['hover:-translate-y-1'];
__VLS_styleScopedClasses['hover:scale-110'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['md:flex-1'];
__VLS_styleScopedClasses['md:bg-[url(\'@/assets/login/img-senora.svg\')]'];
__VLS_styleScopedClasses['md:bg-no-repeat'];
__VLS_styleScopedClasses['md:bg-cover'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['p-10'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['justify-center'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {
    "claveInput": __VLS_intrinsicElements['input'],
};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            clave: clave,
            claveInput: claveInput,
            showPassword: showPassword,
            togglePasswordVisibility: togglePasswordVisibility,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
