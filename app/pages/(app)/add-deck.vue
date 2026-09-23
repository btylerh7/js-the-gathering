<script setup lang="ts">
// TODO - handleSubmit runs before submit?
import { ActionButton } from '#components';
import { InsertDeck } from '~~/server/db/schema';
import { FormatList } from '~~/shared/types/Format';

const schema = toTypedSchema(InsertDeck);
const { handleSubmit, errors } = useForm({
    validationSchema: schema,
});
const { value: deckDescription } = useField<string>('description');
const { value: deckFormat } = useField<Format | ''>('format');

const addDeck = handleSubmit((values) => {
    console.log(values);
});
</script>
<template>
    <header>
        <h1>Add New Deck</h1>
    </header>
    <main>
        <form class="form-group" @submit.prevent="addDeck">
            <FormInput label="Deck Name" name="deckName">
                <input
                    :class="{ invalid: errors.name }"
                    type="text"
                    name="deckName"
                    id="deckName"
                />
                <!-- <p class="hint" v-if="errors.name">Required</p> -->
            </FormInput>
            <FormInput label="Description" name="deckDescription">
                <textarea
                    name="deckDescription"
                    id="deckDescription"
                    v-model="deckDescription"
                />
                <p>{{ deckDescription?.length ?? 0 }}/1000</p>
            </FormInput>
            <FormInput label="Format" name="deckFormat">
                <select name="deckFormat" id="deckFormat" v-model="deckFormat">
                    <option value="">Select a Format</option>
                    <option v-for="format of FormatList" :value="format.value">
                        {{ format.title }}
                    </option>
                </select>
            </FormInput>
            <FormInput
                v-if="deckFormat == 'Commander'"
                label="Commander Bracket"
                name="deckBracket"
            >
                <input
                    type="number"
                    name="deckBracket"
                    id="deckBracket"
                    max="3"
                />
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
