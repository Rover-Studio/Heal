# 治愈空间 — https://rover-studio.github.io/heal/

这是一个简单的静态“治愈”风格网站示，包含首页、关于、画廊和联系页面。可直接打开 `index.html` 预览。

预览方法（建议使用简单静态服务器，以避免部分浏览器的本地资源限制）：

在 PowerShell 中运行（需要已安装 Python）：

```powershell
py -3 -m http.server 8000
# 或者
python -m http.server 8000
```

然后在浏览器里打开：

```powershell
start http://localhost:8000
```

也可以直接双击 `index.html` 打开（某些功能如本地服务器的跨页面请求在本地文件协议下可能受限）。

文件说明：
- `index.html`：首页
- `about.html`：关于页面
- `gallery.html`：画廊（含灯箱效果）
- `contact.html`：联系表单（示例，不会发送）
- `css/styles.css`：样式
- `js/script.js`：交互脚本

后续建议：替换占位渐变为真实图片、加入更多静态内容或接入轻量后台保存留言。

