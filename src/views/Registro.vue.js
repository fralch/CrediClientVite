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
function Registrando() {
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Se ha realizado el registro exitosamente",
        confirmButtonText: "OK",
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
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden md:block md:flex-1 md:bg-[url('@/assets/login/lady.jpg')] md:bg-no-repeat md:bg-cover text-white p-10 flex flex-col justify-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 bg-[url('@/assets/login/trianngulos.svg')] bg-repeat-y bg-right-top flex flex-col justify-center") }, id: ("registrar"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("m-auto") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-circle mx-auto mb-10 2xl:w-full xl:w-10/12 lg:w-8/12 md:w-3/4 w-3/5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("30"), height: ("30"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), ...{ class: ("icon icon-tabler icons-tabler-outline icon-tabler-user") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("none"), d: ("M0 0h24v24H0z"), fill: ("none"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#838181] text-3xl font-bold") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("dni"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-44 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, value: ("45530278"), readonly: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("paterno"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-44 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1 hidden md:block") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("paterno"), ...{ class: ("bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, value: ("Cairampoma"), readonly: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("materno"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1 hidden md:block") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("materno"), ...{ class: ("bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, value: ("Castro"), readonly: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("nombres"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("input bg-gray-200 px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2") }, value: ("Frank"), readonly: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("dni"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-28 sm:px-2 sm:py-1") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("input px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 border-gray-300 border-2") }, placeholder: ("ingresar clave"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("paterno"), ...{ class: ("bg-credi-green text-white px-6 py-3 rounded-md focus:outline-none inline-block md:w-48 md:px-4 md:py-2 w-24 sm:px-2 sm:py-1 hidden md:block") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("paterno"), ...{ class: ("bg-credi-green text-white px-4 py-2 rounded-md focus:outline-none inline-block w-28 sm:px-2 sm:py-1 md:hidden") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("input px-6 py-3 rounded-md focus:outline-none md:ml-8 ml-2 md:px-4 md:py-2 border-gray-300 border-2") }, placeholder: ("repetir clave"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("simple-keyboard hidden") }, id: ("keyboard"), ...{ style: ({}) }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.Registrando) }, key: ("login"), ...{ class: ("px-6 py-3 rounded-md focus:outline-none ml-8 m-10 bg-credi-blue text-white hover:bg-credi-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110") }, });
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['h-screen'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['md:flex-1'];
__VLS_styleScopedClasses['md:bg-[url(\'@/assets/login/lady.jpg\')]'];
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
__VLS_styleScopedClasses['icon-circle'];
__VLS_styleScopedClasses['mx-auto'];
__VLS_styleScopedClasses['mb-10'];
__VLS_styleScopedClasses['2xl:w-full'];
__VLS_styleScopedClasses['xl:w-10/12'];
__VLS_styleScopedClasses['lg:w-8/12'];
__VLS_styleScopedClasses['md:w-3/4'];
__VLS_styleScopedClasses['w-3/5'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['icon-tabler'];
__VLS_styleScopedClasses['icons-tabler-outline'];
__VLS_styleScopedClasses['icon-tabler-user'];
__VLS_styleScopedClasses['text-center'];
__VLS_styleScopedClasses['text-[#838181]'];
__VLS_styleScopedClasses['text-3xl'];
__VLS_styleScopedClasses['font-bold'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['mt-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-44'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-28'];
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
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-44'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-28'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['w-28'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['md:hidden'];
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
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-48'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-24'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['w-28'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['md:hidden'];
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
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-48'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-28'];
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
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-48'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-28'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['md:ml-8'];
__VLS_styleScopedClasses['ml-2'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['border-gray-300'];
__VLS_styleScopedClasses['border-2'];
__VLS_styleScopedClasses['mt-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['md:w-48'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['w-24'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['hidden'];
__VLS_styleScopedClasses['md:block'];
__VLS_styleScopedClasses['bg-credi-green'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['inline-block'];
__VLS_styleScopedClasses['w-28'];
__VLS_styleScopedClasses['sm:px-2'];
__VLS_styleScopedClasses['sm:py-1'];
__VLS_styleScopedClasses['md:hidden'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['px-6'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['rounded-md'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['md:ml-8'];
__VLS_styleScopedClasses['ml-2'];
__VLS_styleScopedClasses['md:px-4'];
__VLS_styleScopedClasses['md:py-2'];
__VLS_styleScopedClasses['border-gray-300'];
__VLS_styleScopedClasses['border-2'];
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
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Registrando: Registrando,
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
