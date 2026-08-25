import { Plugin } from 'obsidian';

export default class MinimalNotebookLMPlugin extends Plugin {
	async onload(): Promise<void> {
		console.error('[MinimalNotebookLM] onload: START');
		new Notice('MinimalNotebookLM: plugin loaded successfully');
		console.error('[MinimalNotebookLM] onload: COMPLETE');
	}
}
