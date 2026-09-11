<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore';
defineProps({
	newUser: Boolean
});
const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const name = ref("");
async function signIn(e: Event) {
	e.preventDefault();
	await authStore.signIn(email.value, password.value);
}
async function signUp(e: Event) {
	e.preventDefault();
	await authStore.signUp(name.value, email.value, password.value);
}

</script>
<template>
	<form>
		<label v-if="newUser == true" for="name">
			Name
			<input type="text" name="name" id="name" v-model="name" />
		</label>
		<label for="email">
			Email
			<input type="text" name="email" id="email" v-model="email" />
		</label>
		<label for="password">
			Password
			<input type="password" name="password" id="password" v-model="password" />
		</label>
		<button type="button" v-if="newUser == false" @click="signIn">Sign In</button>
		<button type="button" v-if="newUser == true" @click="signUp">Sign Up</button>
		<NuxtLink to="/sign-in" v-if="newUser">Already have an account? Sign In</NuxtLink>
		<NuxtLink to="/sign-up" v-if="!newUser">Don't have an account? Sign Up</NuxtLink>
	</form>
</template>
<style scoped>
form {
	--min-height: 2em;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	width: 100%;
	max-width: 500px;
	margin: auto;
}

input {
	border-radius: 5px;
	min-height: var(--min-height);
}

label {
	display: grid;
	grid-template-columns: 1fr 3fr;
	align-items: center;
}

button {
	min-height: var(--min-height);
	padding-block: 0.5em;
	background: skyblue;
	border-radius: 5px;
}
</style>
