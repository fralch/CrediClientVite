import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const count = ref(0);
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
__VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.msg);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
            __VLS_ctx.count++;
        } }, type: ("button"), });
(__VLS_ctx.count);
__VLS_styleScopedClasses['card'];
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
            count: count,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
