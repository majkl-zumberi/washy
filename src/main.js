import App from './App.svelte';
import 'blueprint-css/dist/blueprint.min.css';
const app = new App({
	target: document.body,
	props: {
		name: 'Majkl'
	}
});

export default app;