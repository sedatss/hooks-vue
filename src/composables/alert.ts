import { ref } from 'vue';

export default function useAlert() {
    const alertIsVisible = ref(false);

    function showAlert() :void  {
        alertIsVisible.value = true;
    }

    function hideAlert(): void {
        alertIsVisible.value = false;
    }

    return {
        alertIsVisible,
        showAlert,
        hideAlert
    };
}
