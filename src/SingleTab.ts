import { Lock } from './Lock';
import * as vscode from 'vscode';

export class SingleTab {
  readonly lock: Lock;

  constructor() {
    this.lock = new Lock();
  }
  async onDidChangeActiveTextEditor(editor: vscode.TextEditor) {
    if (this.lock.inSession) {
      return;
    }
    try{
      this.lock.start();
      console.log(editor.document.fileName);
      await vscode.commands.executeCommand("workbench.action.closeOtherEditors");
    } catch {
      this.lock.stop();
    } finally {
      this.lock.stop();
    }
  }
}