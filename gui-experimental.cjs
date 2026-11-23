const { Plugin, Style } = require("@opencode/plugin/gui");

exports.default = Plugin.define({
  setup(ctx) {
    if (ctx.app.platform !== "desktop") return;
    ctx.add(Style, `
      @media (min-width: 768px) {
        [data-pane-row] > [data-slot="session-side-panel-presence"] {
          order: -1;
          left: 0;
          right: auto;
        }
        [data-pane-row]:dir(rtl) > [data-slot="session-side-panel-presence"] {
          order: 1;
        }
        [data-pane-row] > [data-slot="session-review-toggle"] {
          left: var(--session-header-inset-end, 12px);
          right: auto;
        }
        [data-slot="session-review-toggle"] button[aria-controls="review-panel"] svg {
          scale: -1 1;
        }

        /* Leave the toggle's hit area free, whichever header it sits over. */
        [data-pane-row]:has(> [data-slot="session-review-toggle"] [aria-expanded="false"])
          > [data-slot="session-chat-panel"] .session-header-layout {
          margin-left: 40px;
          inline-size: calc(100% - 40px);
        }
        #review-panel [data-slot="session-side-pane"]:first-child .session-review-v2-tabs-bar {
          padding-left: 44px;
        }
        #review-panel [data-slot="session-side-panel-actions"] > .size-7[aria-hidden]:last-child {
          display: none;
        }

        /* Only the outer divider changes sides. The native drag handler reads
           its computed direction to decide the sign of pointer movement. */
        [data-slot="session-chat-panel"] > div > [data-component="resize-handle"][data-direction="horizontal"] {
          direction: rtl;
          left: -4px;
          right: auto;
          transform: translateX(-50%);
        }
      }
    `);
  },
});
