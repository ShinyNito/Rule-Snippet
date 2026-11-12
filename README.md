# Rule-Snippet

当前维护的 Surge 规则与模块。

| 文件 | 用途 |
| --- | --- |
| [list/Bybit.list](list/Bybit.list) | Bybit 分流规则 |
| [list/Netflix.conf](list/Netflix.conf) | Netflix 分流规则 |
| [module/Bilibili-MCDN-Proxy.sgmodule](module/Bilibili-MCDN-Proxy.sgmodule) | Bilibili MCDN 分片转发模块，适用于 Surge Mac |
| [js/bilibili-mcdn-proxy.js](js/bilibili-mcdn-proxy.js) | MCDN 模块使用的请求脚本 |

## Bilibili MCDN Proxy

[模块安装地址](https://raw.githubusercontent.com/ShinyNito/Rule-Snippet/main/module/Bilibili-MCDN-Proxy.sgmodule)

将模块放在 BiliBili Redirect 之前生效，可与 BiliBili ADBlock 同时启用。

仅处理 `*.mcdn.bilivideo.cn` 的 `/v1/resource/upgcxcode/` 请求。原链接没有端口时，HTTPS 补 `8082`、HTTP 补 `8000`，再将完整链接（含原签名参数）交给 `proxy-tf-all-ws.bilivideo.com` 转发。保留 Range 请求，不读取或缓冲视频正文。

模块固定引用已验证提交中的脚本；更新脚本后需同步调整模块内的版本链接。

## 清理记录

2026-11-12 按当前 Surge 网关的实际引用，移除了未使用的旧规则、模块和脚本。旧文件可从 Git 历史查找。
