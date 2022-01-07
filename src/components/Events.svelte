<script>
	/*
	 * Events demo
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let grid = null
	let eventLog = null

  const dataSet = [
		{name: "Kevin", age: "22"},
		{name: "Joe", age: "40"},
		{name: "Liz", age: "25"},
		{name: "Tim", age: "24"},
		{name: "Ron", age: "30"},
		{name: "Jane", age: "31"}
	]

	// Render parts of the ZGData structure according to
	// the event type, preceded by a newline and 2 spaces
	const details = (type, data) => {
		if(!data) return ''

		switch(type) {
			case 'cell:click': 
				return `\n  col: ${data.columnIndex+1} row: ${data.rowIndex+1} value: ${data.value}`
			case 'header:click': 
				return `\n  value: ${data.text}`
			case 'grid:pagechange': 
				return `\n  pageSize: ${data.pageSize} currentPage: ${data.currentPage}`
			default: 
				return '\n  unrecognized details'
			}
	}
          
	// Handle an event by logging it to the eventLog
	const handleEvent = (event) => {
		let text = ''
		const target = event.detail.ZGTarget ? event.detail.ZGTarget.localName : 'zing-grid'

		text += `${event.type} from ${target}`
		text += details(event.type, event.detail.ZGData)
		text += '\n\n'

		eventLog.value += text
		eventLog.scrollTop = eventLog.scrollHeight
	}

	const events = ['grid:ready', 'cell:click', 'header:click', 'grid:pagechange']

	onMount(() => {
		for(const ev of events)
			grid.addEventListener(ev, handleEvent)
	})

</script>

<div class="GridSidebar-wrapper">
	<zing-grid 
		bind:this={grid} 
		id="eventGrid" 
		caption="Events" 
		head-class="grid-header"
		pager="true"
		page-size="3" 
		data={JSON.stringify(dataSet)} />
	<br />
	<div class="Sidebar-wrapper">
		<h3>Event Log</h3>
		<textarea bind:this={eventLog} cols="40" rows="16" readOnly></textarea>
	</div>
</div>