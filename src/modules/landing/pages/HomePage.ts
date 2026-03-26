import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup');

    const counter = ref(0);

    onMounted(() => console.log('mounted'));
    onUpdated(() => console.log('updated'));
    onUnmounted(() => console.log('unmounted'));
    onBeforeMount(() => console.log('beforeMount'));
    onBeforeUpdate(() => console.log('beforeUpdate'));
    onBeforeUnmount(() => console.log('beforeUnmount'));
    onErrorCaptured(() => console.log('errorCaptured'));
    onRenderTracked(() => console.log('renderTracked'));
    onRenderTriggered(() => console.log('renderTriggered'));
    onActivated(() => console.log('activated'));
    onDeactivated(() => console.log('deactivated'));

    return {
      counter,
    };
  },
});
