// vite.config.ts
import react from "file:///home/anomy/Dev/personal/devugur/hometab/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve as resolve3 } from "path";
import { defineConfig } from "file:///home/anomy/Dev/personal/devugur/hometab/node_modules/vite/dist/node/index.js";

// utils/plugins/copy-content-style.ts
import * as fs from "fs";
import * as path from "path";

// utils/log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// utils/plugins/copy-content-style.ts
var __vite_injected_original_dirname = "/home/anomy/Dev/personal/devugur/hometab/utils/plugins";
var { resolve } = path;
var root = resolve(__vite_injected_original_dirname, "..", "..");
var contentStyle = resolve(root, "src", "pages", "content", "style.css");
var outDir = resolve(__vite_injected_original_dirname, "..", "..", "public");
function copyContentStyle() {
  return {
    name: "make-manifest",
    buildEnd() {
      fs.copyFileSync(contentStyle, resolve(outDir, "contentStyle.css"));
      colorLog("contentStyle copied", "success");
    }
  };
}

// utils/plugins/make-manifest.ts
import * as fs2 from "fs";
import * as path2 from "path";

// package.json
var package_default = {
  name: "hometab",
  displayName: "Hometab",
  version: "1.1.0",
  description: "Productivity boost right on your new tab",
  license: "MIT",
  author: "uguremirmustafa",
  repository: {
    type: "git",
    url: "https://github.com/uguremirmustafa/hometab"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    "@types/dexie": "^1.3.1",
    dexie: "^3.2.3",
    "dexie-react-hooks": "^1.1.1",
    react: "^18.2.0",
    "react-contenteditable": "^3.3.6",
    "react-dom": "^18.2.0",
    "webextension-polyfill": "^0.10.0",
    zustand: "^4.3.3"
  },
  devDependencies: {
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/webextension-polyfill": "^0.10.0",
    "@typescript-eslint/eslint-plugin": "^5.49.0",
    "@typescript-eslint/parser": "^5.49.0",
    "@vitejs/plugin-react-swc": "^3.0.1",
    autoprefixer: "^10.4.13",
    eslint: "^8.32.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.32.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "fs-extra": "^11.1.0",
    nodemon: "^2.0.20",
    postcss: "^8.4.21",
    tailwindcss: "^3.2.4",
    "ts-node": "^10.9.1",
    typescript: "^4.9.4",
    vite: "^4.0.4"
  }
};

// src/manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.displayName,
  version: package_default.version,
  description: package_default.description,
  options_ui: {
    page: "src/pages/options/index.html"
  },
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module"
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon-34.png"
  },
  chrome_url_overrides: {
    newtab: "src/pages/newtab/index.html"
  },
  icons: {
    "128": "icon-128.png"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["contentStyle.css"]
    }
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "icon-128.png", "icon-34.png"],
      matches: []
    }
  ]
};
var manifest_default = manifest;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname2 = "/home/anomy/Dev/personal/devugur/hometab/utils/plugins";
var { resolve: resolve2 } = path2;
var outDir2 = resolve2(__vite_injected_original_dirname2, "..", "..", "public");
function makeManifest() {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs2.existsSync(outDir2)) {
        fs2.mkdirSync(outDir2);
      }
      const manifestPath = resolve2(outDir2, "manifest.json");
      fs2.writeFileSync(manifestPath, JSON.stringify(manifest_default, null, 2));
      colorLog(`Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname3 = "/home/anomy/Dev/personal/devugur/hometab";
var root2 = resolve3(__vite_injected_original_dirname3, "src");
var pagesDir = resolve3(root2, "pages");
var assetsDir = resolve3(root2, "assets");
var outDir3 = resolve3(__vite_injected_original_dirname3, "dist");
var publicDir = resolve3(__vite_injected_original_dirname3, "public");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root2,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [react(), makeManifest(), copyContentStyle()],
  publicDir,
  build: {
    outDir: outDir3,
    sourcemap: process.env.__DEV__ === "true",
    rollupOptions: {
      input: {
        devtools: resolve3(pagesDir, "devtools", "index.html"),
        panel: resolve3(pagesDir, "panel", "index.html"),
        content: resolve3(pagesDir, "content", "index.ts"),
        background: resolve3(pagesDir, "background", "index.ts"),
        popup: resolve3(pagesDir, "popup", "index.html"),
        newtab: resolve3(pagesDir, "newtab", "index.html"),
        options: resolve3(pagesDir, "options", "index.html")
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9jb3B5LWNvbnRlbnQtc3R5bGUudHMiLCAidXRpbHMvbG9nLnRzIiwgInV0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdC50cyIsICJwYWNrYWdlLmpzb24iLCAic3JjL21hbmlmZXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hbm9teS9EZXYvcGVyc29uYWwvZGV2dWd1ci9ob21ldGFiL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBjb3B5Q29udGVudFN0eWxlIGZyb20gJy4vdXRpbHMvcGx1Z2lucy9jb3B5LWNvbnRlbnQtc3R5bGUnO1xyXG5pbXBvcnQgbWFrZU1hbmlmZXN0IGZyb20gJy4vdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0JztcclxuXHJcbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xyXG5jb25zdCBwYWdlc0RpciA9IHJlc29sdmUocm9vdCwgJ3BhZ2VzJyk7XHJcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgJ2Fzc2V0cycpO1xyXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKTtcclxuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0BzcmMnOiByb290LFxyXG4gICAgICAnQGFzc2V0cyc6IGFzc2V0c0RpcixcclxuICAgICAgJ0BwYWdlcyc6IHBhZ2VzRGlyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBtYWtlTWFuaWZlc3QoKSwgY29weUNvbnRlbnRTdHlsZSgpXSxcclxuICBwdWJsaWNEaXIsXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcixcclxuICAgIHNvdXJjZW1hcDogcHJvY2Vzcy5lbnYuX19ERVZfXyA9PT0gJ3RydWUnLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIGRldnRvb2xzOiByZXNvbHZlKHBhZ2VzRGlyLCAnZGV2dG9vbHMnLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHBhbmVsOiByZXNvbHZlKHBhZ2VzRGlyLCAncGFuZWwnLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGNvbnRlbnQ6IHJlc29sdmUocGFnZXNEaXIsICdjb250ZW50JywgJ2luZGV4LnRzJyksXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVzb2x2ZShwYWdlc0RpciwgJ2JhY2tncm91bmQnLCAnaW5kZXgudHMnKSxcclxuICAgICAgICBwb3B1cDogcmVzb2x2ZShwYWdlc0RpciwgJ3BvcHVwJywgJ2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBuZXd0YWI6IHJlc29sdmUocGFnZXNEaXIsICduZXd0YWInLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIG9wdGlvbnM6IHJlc29sdmUocGFnZXNEaXIsICdvcHRpb25zJywgJ2luZGV4Lmh0bWwnKSxcclxuICAgICAgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IChjaHVuaykgPT4gYHNyYy9wYWdlcy8ke2NodW5rLm5hbWV9L2luZGV4LmpzYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi91dGlscy9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hbm9teS9EZXYvcGVyc29uYWwvZGV2dWd1ci9ob21ldGFiL3V0aWxzL3BsdWdpbnMvY29weS1jb250ZW50LXN0eWxlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Fub215L0Rldi9wZXJzb25hbC9kZXZ1Z3VyL2hvbWV0YWIvdXRpbHMvcGx1Z2lucy9jb3B5LWNvbnRlbnQtc3R5bGUudHNcIjtpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBjb2xvckxvZyBmcm9tICcuLi9sb2cnO1xyXG5pbXBvcnQgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcclxuXHJcbmNvbnN0IHsgcmVzb2x2ZSB9ID0gcGF0aDtcclxuXHJcbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJyk7XHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHJlc29sdmUocm9vdCwgJ3NyYycsICdwYWdlcycsICdjb250ZW50JywgJ3N0eWxlLmNzcycpO1xyXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ3B1YmxpYycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29weUNvbnRlbnRTdHlsZSgpOiBQbHVnaW5PcHRpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbWFrZS1tYW5pZmVzdCcsXHJcbiAgICBidWlsZEVuZCgpIHtcclxuICAgICAgZnMuY29weUZpbGVTeW5jKGNvbnRlbnRTdHlsZSwgcmVzb2x2ZShvdXREaXIsICdjb250ZW50U3R5bGUuY3NzJykpO1xyXG5cclxuICAgICAgY29sb3JMb2coJ2NvbnRlbnRTdHlsZSBjb3BpZWQnLCAnc3VjY2VzcycpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi91dGlscy9sb2cudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi91dGlscy9sb2cudHNcIjt0eXBlIENvbG9yVHlwZSA9ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCBrZXlvZiB0eXBlb2YgQ09MT1JTO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JMb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlPzogQ29sb3JUeXBlKSB7XHJcbiAgbGV0IGNvbG9yOiBzdHJpbmcgPSB0eXBlIHx8IENPTE9SUy5GZ0JsYWNrO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0dyZWVuO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0JsdWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ1JlZDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdZZWxsb3c7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coY29sb3IsIG1lc3NhZ2UpO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlMgPSB7XHJcbiAgUmVzZXQ6ICdcXHgxYlswbScsXHJcbiAgQnJpZ2h0OiAnXFx4MWJbMW0nLFxyXG4gIERpbTogJ1xceDFiWzJtJyxcclxuICBVbmRlcnNjb3JlOiAnXFx4MWJbNG0nLFxyXG4gIEJsaW5rOiAnXFx4MWJbNW0nLFxyXG4gIFJldmVyc2U6ICdcXHgxYls3bScsXHJcbiAgSGlkZGVuOiAnXFx4MWJbOG0nLFxyXG4gIEZnQmxhY2s6ICdcXHgxYlszMG0nLFxyXG4gIEZnUmVkOiAnXFx4MWJbMzFtJyxcclxuICBGZ0dyZWVuOiAnXFx4MWJbMzJtJyxcclxuICBGZ1llbGxvdzogJ1xceDFiWzMzbScsXHJcbiAgRmdCbHVlOiAnXFx4MWJbMzRtJyxcclxuICBGZ01hZ2VudGE6ICdcXHgxYlszNW0nLFxyXG4gIEZnQ3lhbjogJ1xceDFiWzM2bScsXHJcbiAgRmdXaGl0ZTogJ1xceDFiWzM3bScsXHJcbiAgQmdCbGFjazogJ1xceDFiWzQwbScsXHJcbiAgQmdSZWQ6ICdcXHgxYls0MW0nLFxyXG4gIEJnR3JlZW46ICdcXHgxYls0Mm0nLFxyXG4gIEJnWWVsbG93OiAnXFx4MWJbNDNtJyxcclxuICBCZ0JsdWU6ICdcXHgxYls0NG0nLFxyXG4gIEJnTWFnZW50YTogJ1xceDFiWzQ1bScsXHJcbiAgQmdDeWFuOiAnXFx4MWJbNDZtJyxcclxuICBCZ1doaXRlOiAnXFx4MWJbNDdtJyxcclxufSBhcyBjb25zdDtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hbm9teS9EZXYvcGVyc29uYWwvZGV2dWd1ci9ob21ldGFiL3V0aWxzL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fub215L0Rldi9wZXJzb25hbC9kZXZ1Z3VyL2hvbWV0YWIvdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Fub215L0Rldi9wZXJzb25hbC9kZXZ1Z3VyL2hvbWV0YWIvdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzXCI7aW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY29sb3JMb2cgZnJvbSAnLi4vbG9nJztcclxuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4uLy4uL3NyYy9tYW5pZmVzdCc7XHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuY29uc3QgeyByZXNvbHZlIH0gPSBwYXRoO1xyXG5cclxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICdwdWJsaWMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VNYW5pZmVzdCgpOiBQbHVnaW5PcHRpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbWFrZS1tYW5pZmVzdCcsXHJcbiAgICBidWlsZEVuZCgpIHtcclxuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKG91dERpcikpIHtcclxuICAgICAgICBmcy5ta2RpclN5bmMob3V0RGlyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWFuaWZlc3RQYXRoID0gcmVzb2x2ZShvdXREaXIsICdtYW5pZmVzdC5qc29uJyk7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpKTtcclxuXHJcbiAgICAgIGNvbG9yTG9nKGBNYW5pZmVzdCBmaWxlIGNvcHkgY29tcGxldGU6ICR7bWFuaWZlc3RQYXRofWAsICdzdWNjZXNzJyk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJob21ldGFiXCIsXHJcbiAgXCJkaXNwbGF5TmFtZVwiOiBcIkhvbWV0YWJcIixcclxuICBcInZlcnNpb25cIjogXCIxLjEuMFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0aXZpdHkgYm9vc3QgcmlnaHQgb24geW91ciBuZXcgdGFiXCIsXHJcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgXCJhdXRob3JcIjogXCJ1Z3VyZW1pcm11c3RhZmFcIixcclxuICBcInJlcG9zaXRvcnlcIjoge1xyXG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS91Z3VyZW1pcm11c3RhZmEvaG9tZXRhYlwiXHJcbiAgfSxcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcclxuICAgIFwiZGV2XCI6IFwibm9kZW1vblwiXHJcbiAgfSxcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0eXBlcy9kZXhpZVwiOiBcIl4xLjMuMVwiLFxyXG4gICAgXCJkZXhpZVwiOiBcIl4zLjIuM1wiLFxyXG4gICAgXCJkZXhpZS1yZWFjdC1ob29rc1wiOiBcIl4xLjEuMVwiLFxyXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcclxuICAgIFwicmVhY3QtY29udGVudGVkaXRhYmxlXCI6IFwiXjMuMy42XCIsXHJcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcclxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuMFwiLFxyXG4gICAgXCJ6dXN0YW5kXCI6IFwiXjQuMy4zXCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTguMTEuMThcIixcclxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjAuMjdcIixcclxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjEwXCIsXHJcbiAgICBcIkB0eXBlcy93ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMC4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjUuNDkuMFwiLFxyXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjUuNDkuMFwiLFxyXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjogXCJeMy4wLjFcIixcclxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTNcIixcclxuICAgIFwiZXNsaW50XCI6IFwiXjguMzIuMFwiLFxyXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjguNi4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjcuNVwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6IFwiXjYuNy4xXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4xXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC4zLjBcIixcclxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMS4wXCIsXHJcbiAgICBcIm5vZGVtb25cIjogXCJeMi4wLjIwXCIsXHJcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjIxXCIsXHJcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuMi40XCIsXHJcbiAgICBcInRzLW5vZGVcIjogXCJeMTAuOS4xXCIsXHJcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNC45LjRcIixcclxuICAgIFwidml0ZVwiOiBcIl40LjAuNFwiXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5vbXkvRGV2L3BlcnNvbmFsL2RldnVndXIvaG9tZXRhYi9zcmNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fub215L0Rldi9wZXJzb25hbC9kZXZ1Z3VyL2hvbWV0YWIvc3JjL21hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Fub215L0Rldi9wZXJzb25hbC9kZXZ1Z3VyL2hvbWV0YWIvc3JjL21hbmlmZXN0LnRzXCI7aW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IG1hbmlmZXN0OiBNYW5pZmVzdC5XZWJFeHRlbnNpb25NYW5pZmVzdCA9IHtcclxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLFxyXG4gIG5hbWU6IHBrZy5kaXNwbGF5TmFtZSxcclxuICB2ZXJzaW9uOiBwa2cudmVyc2lvbixcclxuICBkZXNjcmlwdGlvbjogcGtnLmRlc2NyaXB0aW9uLFxyXG4gIG9wdGlvbnNfdWk6IHtcclxuICAgIHBhZ2U6ICdzcmMvcGFnZXMvb3B0aW9ucy9pbmRleC5odG1sJyxcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHNlcnZpY2Vfd29ya2VyOiAnc3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXguanMnLFxyXG4gICAgdHlwZTogJ21vZHVsZScsXHJcbiAgfSxcclxuICBhY3Rpb246IHtcclxuICAgIGRlZmF1bHRfcG9wdXA6ICdzcmMvcGFnZXMvcG9wdXAvaW5kZXguaHRtbCcsXHJcbiAgICBkZWZhdWx0X2ljb246ICdpY29uLTM0LnBuZycsXHJcbiAgfSxcclxuICBjaHJvbWVfdXJsX292ZXJyaWRlczoge1xyXG4gICAgbmV3dGFiOiAnc3JjL3BhZ2VzL25ld3RhYi9pbmRleC5odG1sJyxcclxuICB9LFxyXG4gIGljb25zOiB7XHJcbiAgICAnMTI4JzogJ2ljb24tMTI4LnBuZycsXHJcbiAgfSxcclxuICBjb250ZW50X3NjcmlwdHM6IFtcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogWydodHRwOi8vKi8qJywgJ2h0dHBzOi8vKi8qJywgJzxhbGxfdXJscz4nXSxcclxuICAgICAganM6IFsnc3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanMnXSxcclxuICAgICAgY3NzOiBbJ2NvbnRlbnRTdHlsZS5jc3MnXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBkZXZ0b29sc19wYWdlOiAnc3JjL3BhZ2VzL2RldnRvb2xzL2luZGV4Lmh0bWwnLFxyXG4gIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xyXG4gICAge1xyXG4gICAgICByZXNvdXJjZXM6IFsnY29udGVudFN0eWxlLmNzcycsICdpY29uLTEyOC5wbmcnLCAnaWNvbi0zNC5wbmcnXSxcclxuICAgICAgbWF0Y2hlczogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYW5pZmVzdDtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxPQUFPLFdBQVc7QUFDNVQsU0FBUyxXQUFBQSxnQkFBZTtBQUN4QixTQUFTLG9CQUFvQjs7O0FDRnFVLFlBQVksUUFBUTtBQUN0WCxZQUFZLFVBQVU7OztBQ0NQLFNBQVIsU0FBMEIsU0FBaUIsTUFBa0I7QUFDbEUsTUFBSSxRQUFnQixRQUFRLE9BQU87QUFFbkMsVUFBUSxNQUFNO0FBQUEsSUFDWixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFDZjtBQUFBLElBQ0YsS0FBSztB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LFVBQVNGLFNBQVFDLG1DQUFXLE1BQU07QUFDeEMsSUFBTSxZQUFZRCxTQUFRQyxtQ0FBVyxRQUFRO0FBRTdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVFGO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0FBQUEsRUFDckQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQUFHO0FBQUEsSUFDQSxXQUFXLFFBQVEsSUFBSSxZQUFZO0FBQUEsSUFDbkMsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsVUFBVUYsU0FBUSxVQUFVLFlBQVksWUFBWTtBQUFBLFFBQ3BELE9BQU9BLFNBQVEsVUFBVSxTQUFTLFlBQVk7QUFBQSxRQUM5QyxTQUFTQSxTQUFRLFVBQVUsV0FBVyxVQUFVO0FBQUEsUUFDaEQsWUFBWUEsU0FBUSxVQUFVLGNBQWMsVUFBVTtBQUFBLFFBQ3RELE9BQU9BLFNBQVEsVUFBVSxTQUFTLFlBQVk7QUFBQSxRQUM5QyxRQUFRQSxTQUFRLFVBQVUsVUFBVSxZQUFZO0FBQUEsUUFDaEQsU0FBU0EsU0FBUSxVQUFVLFdBQVcsWUFBWTtBQUFBLE1BQ3BEO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxVQUFVLGFBQWEsTUFBTTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgImZzIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJwYXRoIiwgIm91dERpciIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyb290IiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAib3V0RGlyIl0KfQo=
