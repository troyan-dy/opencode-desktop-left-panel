# opencode-desktop-left-panel

Move the OpenCode Desktop session side panel to the left.

## Install in OpenCode Desktop

From the global OpenCode configuration directory (normally `~/.config/opencode`), run:

```sh
git clone https://github.com/troyan-dy/opencode-desktop-left-panel.git local-themes/left-panel
```

Add the following entries to the existing `plugins` array in your global `opencode.jsonc`:

```jsonc
{
  "plugins": [
    "./local-themes/left-panel"
  ]
}
```

## Usage

On Desktop windows at least 768 CSS pixels wide, the session side panel appears on the left. The outer resize handle and panel toggle move with it.

This plugin uses the [experimental OpenCode Desktop GUI plugin API](https://opencode.ai/docs/build/plugins/gui).
