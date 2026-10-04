/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	semi: true,
	tabWidth: 4,
	trailingComma: 'none',
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};

export default config;
