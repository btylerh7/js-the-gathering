<script setup lang="ts">
// TODO - handleSubmit runs before submit?
import { ActionButton } from '#components';
import { InsertDeck } from '~~/server/db/schema';
import { FormatList } from '~~/shared/types/Format';

const { handleSubmit, errors } = useForm({
	validationSchema: toTypedSchema(InsertDeck)
});
const deckName = ref("");
const deckDescription = ref("");
const deckFormat = ref<Format | "">("");
const deckBracket = ref<0 | 1 | 2 | 3 | 4 | 5>(0);

const addDeck = handleSubmit((values) => {
	console.log(values)
})

</script>
<template>
	<header>
		<h1>Add New Deck</h1>
	</header>
	<main>
		<form class="form-group" @submit.prevent="addDeck">
			<FormInput label="Deck Name" name="deckName">
				<Field :class="{ 'invalid': errors.name }" type="text" name="deckName" id="deckName"
					v-model="deckName" />
				<!-- <p class="hint" v-if="errors.name">Required</p> -->
			</FormInput>
			<FormInput label="Description" name="deckDescription">
				<Field type="textarea" name="deckDescription" id="deckDescription" v-model="deckDescription" />
				<p>{{ deckDescription.length }}/1000</p>
			</FormInput>
			<FormInput label="Format" name="deckFormat">
				<Field as="select" name="deckFormat" id="deckFormat" v-model="deckFormat">
					<option value="">Select a Format</option>
					<option v-for="format of FormatList" :value=format.value>
						{{ format.title }}
					</option>
				</Field>
			</FormInput>
			<FormInput v-if="deckFormat == 'Commander'" label="Commander Bracket" name="deckBracket">
				<Field type="number" name="deckBracket" id="deckBracket" v-model="deckBracket" />
			</FormInput>
			<ActionButton type="submit">Add Deck</ActionButton>


		</form>
	</main>
</template>
<style scoped>
.form-group {
	display: grid;
	gap: 1rem;
}

.hint {
	font-size: 0.75rem;
}
</style>
