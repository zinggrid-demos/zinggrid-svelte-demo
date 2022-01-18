<script>
	/*
	 * Conditional rendering demo
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let data1 = undefined
	let data2 = undefined
	let defaultColumns = true

	// Fetch each of the datasets
	async function getData() {
		try {
			const res1 = await fetch('./shows.json')
			const obj1 = await res1.json()
			data1 = JSON.stringify(obj1.shows)

			const res2 = await fetch('./shows2.json')
			const obj2 = await res2.json()
			data2 = JSON.stringify(obj2.shows)
		} catch(err) {
			console.log(err)
		}
	}

	onMount(() => getData())
</script>

<div class="Grid-wrapper">
	<p>
		You can dynamically render <code>zg-column</code>s in your code and
		ZingGrid will automatically pick up the mutation and adjust the layout
		of columns being displayed. This is good for displaying a single grid
		showing multiple datasets.
	</p>
	<button on:click={() => defaultColumns = !defaultColumns}>
		Switch to
		{defaultColumns ? " Second " : " First "}
		Dataset
	</button>
	<zing-grid
		data={defaultColumns ? data1 : data2}
		caption={defaultColumns ? "Shows 1" : "Shows 2"}
		editor
		loading
		layout="row"
		head-class="grid-header"
		viewport-stop
		pager={true}
		page-size="5"
	>
		{#if defaultColumns}
			<zg-colgroup>
				<zg-column index="title" />
				<zg-column index="genre" />
			</zg-colgroup>
		{:else}
			<zg-colgroup>
				<zg-column index="titleChanged" />
				<zg-column index="genreChanged" />
			</zg-colgroup>
		{/if}
	</zing-grid>
</div>