<template>
  <div class="spinner">
  </div>
</template>
<style scoped>
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 16px solid gray;
  border-top: 16px solid skyblue;
  animation: spinner 1s linear infinite;
}
</style>
