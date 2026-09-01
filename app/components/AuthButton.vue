<script setup lang="ts">
import { authClient } from '#shared/auth-client';
defineProps({
	newUser: Boolean
});
const email = ref("");
const password = ref("");
const name = ref("");
async function signIn() {
	await authClient.signIn.email({
		email: email.value,
		password: password.value,
		callbackURL: "/"
	})

}
async function signUp() {
	await authClient.signUp.email({
		email: email.value,
		password: password.value,
		name: name.value,
		callbackURL: "/"
	}, {
		onError: (ctx) => {
			alert(ctx.error.message)
		}
	})

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
			<input type="text" name="password" id="password" v-model="password" />
		</label>
		<button v-if="newUser == false" @click="signIn()">Sign In</button>
		<button v-if="newUser == true" @click="signUp()">Sign Up</button>
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
