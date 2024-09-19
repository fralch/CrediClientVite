import { ref } from "vue";
import Swal from "sweetalert2";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const mostrarCelular = ref(false);
const dniInput = ref(null);
const celularInput = ref(null);
function mostrarCelularFun() {
    if (dniInput.value && dniInput.value.value !== "") {
        mostrarCelular.value = true;
    }
    else {
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
    }).then((result) => { });
}
function handleSubmit() {
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
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-screen") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden md:block md:flex-1 md:bg-[url('@/assets/login/img-senor.png')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 bg-[url('@/assets/login/trianngulos.svg')] bg-repeat-y bg-right-top flex flex-col justify-center") }, id: ("validarDNI"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("m-auto") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./../assets/logo.svg"), alt: (""), ...{ class: ("mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("dni"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, ref: ("dniInput"), });
// @ts-ignore
__VLS_ctx.dniInput;
if (__VLS_ctx.mostrarCelular) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("clave"), ...{ class: ("bg-credi-green text-white px-4 py-3 rounded-md focus:outline-none inline-block md:w-32 md:px-6 md:py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, ref: ("celularInput"), });
    // @ts-ignore
    __VLS_ctx.celularInput;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 bg-[#E5E7EB] rounded-md") }, });
}
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-gray-500") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-red-500") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("simple-keyboard hidden") }, id: ("keyboard"), ...{ style: ({}) }, });
if (!__VLS_ctx.mostrarCelular) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.mostrarCelularFun) }, key: ("login"), ...{ class: ("px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, });
}
if (__VLS_ctx.mostrarCelular) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.validarDNI) }, key: ("login"), ...{ class: ("px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, });
}
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['h-screen'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['md:flex-1'];
__VLS_styleScopedClasses['md:bg-[url(\'@/assets/login/img-senor.png\')]'];
__VLS_styleScopedClasses['md:bg-no-repeat'];
__VLS_styleScopedClasses['md:bg-cover'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['p-10'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['justify-center'];
__VLS_styleScopedClasses['flex-1'];
__VLS_styleScopedClasses['bg-[url(\'@/assets/login/trianngulos.svg\')]'];
__VLS_styleScopedClasses['bg-repeat-y'];
__VLS_styleScopedClasses['bg-right-top'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['justify-center'];
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
__VLS_styleScopedClasses['w-24'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
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
__VLS_styleScopedClasses['text-gray-500'];
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
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {
    "dniInput": __VLS_intrinsicElements['input'],
    "celularInput": __VLS_intrinsicElements['input'],
};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            mostrarCelular: mostrarCelular,
            dniInput: dniInput,
            celularInput: celularInput,
            mostrarCelularFun: mostrarCelularFun,
            validarDNI: validarDNI,
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
