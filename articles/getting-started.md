# 開始使用 GitHub Pages

GitHub Pages 是 GitHub 提供的免費靜態網站託管服務，非常適合個人博客、項目文檔或作品集網站。

## 什麼是 GitHub Pages？

GitHub Pages 允許你直接從 GitHub 倉庫託管靜態網站。它支持：

- HTML、CSS、JavaScript
- Jekyll 靜態網站生成器
- 自定義域名
- HTTPS 加密

## 如何開始？

### 1. 創建倉庫

首先，在 GitHub 上創建一個新的公開倉庫：

```bash
# 克隆倉庫到本地
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. 添加網站文件

創建 `index.html` 文件作為網站首頁：

```html
<!DOCTYPE html>
<html>
<head>
    <title>我的網站</title>
</head>
<body>
    <h1>歡迎來到我的網站！</h1>
</body>
</html>
```

### 3. 推送到 GitHub

```bash
git add .
git commit -m "添加網站文件"
git push origin main
```

### 4. 啟用 GitHub Pages

1. 進入倉庫的 Settings 頁面
2. 滾動到 "Pages" 部分
3. 選擇源分支（通常是 main）
4. 點擊 Save

幾分鐘後，你的網站就會在 `https://yourusername.github.io/your-repo` 上線！

## 進階功能

### 自定義域名

你可以在倉庫根目錄添加 `CNAME` 文件來使用自定義域名：

```
yourdomain.com
```

### Jekyll 支持

GitHub Pages 原生支持 Jekyll，你可以使用：

- Markdown 文件
- Liquid 模板
- 插件系統
- 自動構建

## 最佳實踐

1. **使用 HTTPS**：GitHub Pages 自動提供 HTTPS 支持
2. **優化性能**：壓縮圖片，使用 CDN
3. **SEO 優化**：添加 meta 標籤和結構化數據
4. **版本控制**：使用 Git 來管理網站內容

## 總結

GitHub Pages 是一個強大而簡單的靜態網站託管服務。無論你是想創建個人博客、項目文檔還是作品集，GitHub Pages 都能滿足你的需求。

開始你的第一個 GitHub Pages 網站吧！
