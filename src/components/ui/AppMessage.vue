<template>
<div :class="['alert', 'danger']">
    <pre>{{ message }}</pre>
    <p class="alert-title">Title</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <span class="alert-close">&times;</span>
</div>   
</template>

<script>
import { computed } from 'vue';
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore();
        const message = computed(() => store.state.message);

        return {
            message
        }
    }
}
</script>

<style scoped>
.alert {
  position: relative;
  padding: 20px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  background-color: #f8d7da;
  color: #721c24;
  margin: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.alert.danger {
  border-color: #f5c6cb;
  background-color: #f8d7da;
  color: #721c24;
}

.alert .alert-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.alert p {
  margin: 5px 0;
}

.alert .alert-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #721c24;
  background: none;
  border: none;
  outline: none;
}

.alert .alert-close:hover {
  color: #d9534f;
}
</style>
