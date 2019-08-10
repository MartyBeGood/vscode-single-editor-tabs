# Single Editor Tabs

Enforce a limit of exactly one editor per editor group. Make VSCode behave a little more like Vim.

If you have an editor group open and open a new file, this extension will close all other editors in this group.
You will be prompted if you want to save any unsaved work.

## But... Why?

I thoroughly enjoy [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim).
One of the very few griefs I have with it is that `:q` closes the active editor, not the active split/editor group.
That means after a while I have a lot of editors open, most of which I already forgot about.

Then I either need to type `:q` a bunch of times or remind myself that my editor is, in fact, not Vim and use a VSCode command
to close them all.

Writing a little extra to limit the tabs per editor group seemed a lot easier than
trying to convince VSCodeVim to close all editors in a group.

## What about zentabs?

[zentabs](https://marketplace.visualstudio.com/items?itemName=hitode909.zentabs) is the base for this plugin.
It offers to do the same thing and more (like keeping multiple Editors per group).

zentabs keeps track of opened editors and closes the superfluous editors by

1) switching to the superfluous editor
2) closing that editor
3) switching back to the one you just opened

This causes two things:

- since VSCode only has events new _editors_, not for new tabs, zentabs will never close webviews, settings, etc.
- the switching is visible, the old editor will flicker into view before it's closed.

When you only want a single editor to remain open, you can use a different command to close _all_ other editors in the group.
This command also closes non-editor tabs and can do so without switching to the editor it needs to close.
