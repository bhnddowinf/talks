# 文章記錄網站

這是一個使用 GitHub Pages 搭建的個人文章記錄網站，支持 Markdown 格式的文章寫作和展示。

## 功能特色

- 📝 **Markdown 支持**：使用 Markdown 格式撰寫文章
- 🎨 **現代化設計**：響應式設計，支持各種設備
- 🔍 **搜尋功能**：支持文章標題和內容搜尋
- 🏷️ **標籤系統**：文章分類和標籤管理
- 📱 **響應式布局**：適配桌面和移動設備
- ⚡ **快速載入**：純靜態網站，載入速度快

## 技術棧

- **前端**：HTML5、CSS3、JavaScript (ES6+)
- **Markdown 解析**：Marked.js
- **語法高亮**：Prism.js
- **圖標**：Font Awesome
- **託管**：GitHub Pages

## 快速開始

### 1. 克隆倉庫

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. 本地預覽

直接在瀏覽器中打開 `index.html` 文件，或者使用本地服務器：

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器中訪問 `http://localhost:8000`

### 3. 部署到 GitHub Pages

1. 將代碼推送到 GitHub 倉庫
2. 進入倉庫的 Settings 頁面
3. 滾動到 "Pages" 部分
4. 選擇源分支（通常是 main）
5. 點擊 Save

幾分鐘後，你的網站就會在 `https://yourusername.github.io/your-repo` 上線！

## 添加新文章

### 方法一：直接在 JavaScript 中添加

編輯 `script.js` 文件，在 `articles` 數組中添加新文章：

```javascript
{
    id: 'your-article-id',
    title: '文章標題',
    date: '2024-01-01',
    tags: ['標籤1', '標籤2'],
    excerpt: '文章摘要...',
    content: `# 文章內容

這是文章的 Markdown 內容...`
}
```

### 方法二：使用 Markdown 文件（推薦）

1. 在 `articles/` 目錄下創建新的 `.md` 文件
2. 按照現有文章的格式撰寫內容
3. 修改 `script.js` 中的 `loadArticles()` 函數來載入 Markdown 文件

## 自定義配置

### 修改網站信息

編輯 `index.html` 文件中的以下部分：

```html
<title>你的網站標題</title>
<h1 class="site-title">你的網站標題</h1>
<p class="site-subtitle">你的網站副標題</p>
```

### 修改樣式

編輯 `styles.css` 文件來自定義網站外觀：

```css
:root {
    --primary-color: #667eea;    /* 主色調 */
    --secondary-color: #764ba2;  /* 輔助色調 */
    --font-size-base: 16px;     /* 基礎字體大小 */
}
```

### 添加自定義域名

1. 在倉庫根目錄創建 `CNAME` 文件
2. 在文件中寫入你的域名（例如：`yourdomain.com`）
3. 在你的域名提供商處設置 CNAME 記錄指向 `yourusername.github.io`

## 文件結構

```
├── index.html          # 主頁面
├── styles.css          # 樣式文件
├── script.js           # JavaScript 邏輯
├── articles/           # 文章目錄
│   ├── getting-started.md
│   ├── markdown-guide.md
│   └── web-development-tips.md
├── README.md           # 說明文檔
└── CNAME               # 自定義域名（可選）
```

## 最佳實踐

1. **文章命名**：使用有意義的文件名，避免空格和特殊字符
2. **圖片處理**：將圖片放在 `images/` 目錄下，使用相對路徑引用
3. **版本控制**：定期提交更改，使用有意義的提交信息
4. **備份**：定期備份你的文章內容
5. **SEO 優化**：為每篇文章添加適當的 meta 標籤

## 故障排除

### 常見問題

1. **網站無法訪問**
   - 檢查 GitHub Pages 設置是否正確
   - 確認倉庫是公開的
   - 等待幾分鐘讓更改生效

2. **文章不顯示**
   - 檢查 JavaScript 控制台是否有錯誤
   - 確認文章數據格式正確
   - 檢查 Markdown 語法是否正確

3. **樣式問題**
   - 清除瀏覽器緩存
   - 檢查 CSS 文件路徑是否正確
   - 確認沒有語法錯誤

## 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個項目！

## 許可證

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 聯繫方式

如有問題或建議，請通過以下方式聯繫：

- GitHub Issues
- Email: your-email@example.com

---

**開始記錄你的想法和學習歷程吧！** 🚀