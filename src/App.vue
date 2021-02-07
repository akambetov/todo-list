<template>
  <div id="app">
    <TodoForm />
  </div>
</template>
<script>
import TodoForm from '@/components/TodoForm.vue';

export default {
  name: 'App',
  components: {
    TodoForm,
  },
};
</script>
