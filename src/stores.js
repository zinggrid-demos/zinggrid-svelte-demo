/*
 * Globally accessible storage
 */
import {readable, writable, derived} from 'svelte/store'

export const pubDate = writable('')
export const version = writable('')
export const showCode = writable(false)

export const github = readable('https://github.com/zinggrid-demos/zinggrid-svelte-demo')
export const gitBlob = derived(github, $github => $github + '/blob/main/src/demos/')
export const gitIssues = derived(github, $github => $github + '/issues')
export const pricing = readable('https://zinggrid.com/pricing')

export const modules = writable({     
	'/': {
			label: 'Hello World',
			text: 'Demonstrates a simple read-only grid of static data',
			info: 'Simple demo of a ZingGrid with local, static data obtained from a constant. Note that the data attribute provided to ZingGrid is a JSON rendering of the data object.',
			file: 'Simple.svelte',
			code: ''
	},
	'/themes': {
		label: 'Themes',
		text: 'Demonstrates a read-only grid of static data with a theme selector',
		info: 'Here we obtain a Svelte reference to the grid so we can change its theme and set the data after it has been displayed. Note that the data does not need to be converted to JSON when using setData().',
		file: 'Themes.svelte',
		code: ''
	},
	'/methods': {
		label: 'Methods',
		text: 'Demonstrates using a method call to set the data for a grid',
		info: 'Using references to the grid and a textarea, we use the text to set the data for the grid when the "Set Data" button is pressed.',
		file: 'Methods.svelte',
		code: ''
	},
	'/events': {
		label: 'Events',
		text: 'Demonstrates grid events',
		info: 'In this demo we attach event listeners to the grid and log the events to a textarea.',
		file: 'Events.svelte',
		code: ''
	},
	'/fetch': {
		label: 'Data from server',
		text: 'Demonstrates fetching grid data from the server',
		info: 'Here we fetch the data for the grid from the server, with a 2-second delay added to simulate a slow connection so we can see the "loading" indicator.',
		file: 'Fetch.svelte',
		code: ''
	},
	'/oneway': {
		label: 'One-Way Binding',
		text: 'Demonstrates data binding in one direction',
		info: 'This demo shows a textarea bound to a grid so that changes to the textarea instantly appear in the grid. Additional controls demonstrate changing various aspects of the grid.',
		file: 'OneWay.svelte',
		code: ''
	},
	'/twoway': {
		label: 'Two-Way Binding',
		text: 'Demonstrates data binding in two directions',
		info: 'Here we show a grid with editing enabled. Changes to the grid are reflected in the textarea, and changes to the textarea update the data in the grid.',
		file: 'TwoWay.svelte',
		code: ''
	},
	'/conditional': {
		label: 'Conditional Rendering',
		text: 'Demonstrates conditional rendering',
		info: 'Here we dynamically render zg-columns so we can show multiple datasets in a single grid. ZingGrid auotmatically picks up the mutation and adjusts the layout of the columns.',
		file: 'Conditional.svelte',
		code: ''
	},
	'/register': {
		label: 'Register Method',
		text: 'Demonstrates registering a custom rendering method',
		info: 'Here we register a custom rendering method that the ZingGrid applies when rendering column 1, converting the text to all uppercase.',
		file: 'Register.svelte',
		code: ''
	},
})
