# 📸 圖片使用指南

這個目錄用於存放網站文章中的圖片文件。

## 📁 目錄結構

```
images/
├── README.md          # 這個說明文件
├── 001.jpg           # 示例圖片
├── screenshots/      # 截圖目錄
├── diagrams/         # 圖表目錄
└── icons/           # 圖標目錄
```

## 🖼️ 支持的圖片格式

- **JPEG** (.jpg, .jpeg) - 適合照片
- **PNG** (.png) - 適合截圖、圖標
- **GIF** (.gif) - 適合動畫
- **WebP** (.webp) - 現代格式，文件更小
- **SVG** (.svg) - 向量圖形

## 📝 在文章中使用圖片

### 基本語法

```markdown
![圖片描述](images/圖片文件名.jpg)
```

### 示例

```markdown
![GitHub Pages 設置頁面](images/github-pages-settings.png)
```

### 帶標題的圖片

```markdown
![GitHub Pages 設置頁面](images/github-pages-settings.png)
*GitHub Pages 設置頁面截圖*
```

## 🎯 最佳實踐

### 1. 文件命名
- 使用有意義的文件名
- 避免空格，使用連字符或下劃線
- 例如：`github-pages-settings.png`

### 2. 圖片優化
- 壓縮圖片以減少文件大小
- 使用適當的尺寸（建議最大寬度 1200px）
- 考慮使用 WebP 格式

### 3. 組織結構
```
images/
├── 2024-01/          # 按月份組織
├── tutorials/        # 按主題組織
├── screenshots/      # 截圖
└── diagrams/         # 圖表
```

## 🛠️ 工具推薦

### 圖片編輯
- **GIMP** - 免費的圖片編輯器
- **Paint.NET** - Windows 免費編輯器
- **Canva** - 在線設計工具

### 圖片壓縮
- **TinyPNG** - 在線壓縮工具
- **ImageOptim** - Mac 壓縮工具
- **Squoosh** - Google 的壓縮工具

## 📋 使用步驟

1. **準備圖片**：編輯、壓縮、重命名
2. **上傳到 images/ 目錄**
3. **在 Markdown 中引用**：`![描述](images/文件名)`
4. **提交到 Git**：`git add images/`
5. **推送到 GitHub**：`git push origin main`

## 🎨 圖片樣式

網站會自動為圖片添加以下樣式：
- 響應式設計（自動縮放）
- 圓角邊框
- 陰影效果
- 懸停效果

## 📱 響應式圖片

```markdown
![響應式圖片](images/example.jpg)
```

圖片會自動適應不同屏幕尺寸。

## 🔗 外部圖片

你也可以使用外部圖片鏈接：

```markdown
![外部圖片](https://example.com/image.jpg)
```

但建議將圖片下載到本地以確保穩定性。

## 🎉 開始使用

1. 將你的圖片文件放入 `images/` 目錄
2. 在文章中使用 Markdown 語法引用
3. 提交更改並推送到 GitHub
4. 在網站上查看效果！

記住：好的圖片能讓文章更生動有趣！ 📸✨
