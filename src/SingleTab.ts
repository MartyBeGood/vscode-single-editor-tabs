import { Lock } from './Lock';
import * as vscode from 'vscode';

export class SingleTab {
  async onDidChangeActiveTextEditor(editor: vscode.TextEditor) {
    if (Lock.getInstance().inSession) {
      return;
    }
    try{
      Lock.getInstance().start();
      await vscode.commands.executeCommand("workbench.action.closeOtherEditors");
    } catch {
      Lock.getInstance().stop();
    } finally {
      Lock.getInstance().stop();
    }
  }
}