// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as cp from 'child_process';
import * as path from 'path';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let skip = vscode.commands.registerCommand('extension.gitSkipWorktree', () => {
		
		if (vscode.window.activeTextEditor) {

			var doc = vscode.window.activeTextEditor.document.fileName;
			var parent = path.dirname(doc);
			if (fs.existsSync(doc)) {
				cp.exec(`git update-index --skip-worktree ${doc}`,
					{
						cwd: parent
					},
					(err, stdout, stderr) => {
						console.log('stdout: ' + stdout);
						console.log('stderr: ' + stderr);
						if (err) {
							console.log('error: ' + err);
							vscode.window.showErrorMessage(stderr);
						}
					}
				);
			}

			//
		}

	});

	let undoskip = vscode.commands.registerCommand('extension.undoGitSkipWorktree', () => {
		
		if (vscode.window.activeTextEditor) {

			var doc = vscode.window.activeTextEditor.document.fileName;
			var parent = path.dirname(doc);
			if (fs.existsSync(doc)) {
				cp.exec(`git update-index --no-skip-worktree ${doc}`,
					{
						cwd: parent
					},
					(err, stdout, stderr) => {
						console.log('stdout: ' + stdout);
						console.log('stderr: ' + stderr);
						if (err) {
							console.log('error: ' + err);
							vscode.window.showErrorMessage(stderr);
						}
					}
				);
			}

			//
		}

	});

	context.subscriptions.push(skip);
	context.subscriptions.push(undoskip);
}

// this method is called when your extension is deactivated
export function deactivate() { }
