# opencode-desktop-left-panel

## Установка через агента

Скопируйте в чат агента:

```text
Установи https://github.com/troyan-dy/opencode-desktop-left-panel для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён.
```

Из терминала ту же задачу можно передать агенту OpenCode:

```sh
opencode run "Установи https://github.com/troyan-dy/opencode-desktop-left-panel для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён."
```

---

Move the OpenCode Desktop session side panel to the left.

From your global OpenCode configuration directory (normally `~/.config/opencode`):

```sh
git clone https://github.com/troyan-dy/opencode-desktop-left-panel.git local-themes/left-panel
```

Add `"./local-themes/left-panel"` to the `plugins` array in the global `opencode.jsonc`.
