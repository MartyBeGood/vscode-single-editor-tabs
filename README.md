# Single Editor Tabs

Enforce a limit of exactly one editor per editor group. Make VSCode behave a little more like Vim.

If you have an editor group open and open a new file, this extension will close all other editors in this group.
You will be prompted if you want to save any unsaved work.

## But... Why?

I thoroughly enjoy [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim).
One of the very few griefs I have with it is that `:q` closes the active editor, not the active split/editor group.

Writing a little extra to limit the tabs per editor group seemed a lot easier than
trying to convince VSCodeVim to close all editors in a group.

## What about zentabs?

[zentabs](https://marketplace.visualstudio.com/items?itemName=hitode909.zentabs)  is the base for this plugin.
It offers to do the same thing and more (like keeping multiple Editors per group).

zentabs keeps track of open editors and closes the superfluous editors by

1) switching to the superfluous editor
2) closing that editor
3) switching back to the one you just opened

By not offering to have more than one editor per group, I can avoid the tab-switching and the flickering that this incurs.
