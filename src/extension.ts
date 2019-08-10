// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SingleTab } from './SingleTab';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const singletab = new SingleTab();

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "single-editor-tabs" is now active!');

	vscode.window.onDidChangeActiveTextEditor(async editor => {
		if (!editor) { return; }
		singletab.onDidChangeActiveTextEditor(editor);
	});

}

// this method is called when your extension is deactivated
export function deactivate() {}
