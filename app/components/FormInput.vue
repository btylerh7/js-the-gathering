<script setup lang="ts">
const { label, name } = defineProps<{
    label: string;
    name: string;
}>();
</script>
<template>
    <div class="form-input">
        <label :for="name">{{ label }}</label>
        <slot />
    </div>
</template>

<style>
.form-input {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.invalid {
    outline: 1px solid crimson;
}
</style>
