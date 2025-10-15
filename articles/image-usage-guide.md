# 📸 圖片使用指南



<div class="image-grid">
  <img src="images/001.jpg" alt="圖片1">
  <img src="images/001.jpg" alt="圖片2">
  <img src="images/001.jpg" alt="圖片3">
</div>

![圖片描述](images/001.jpg)

這篇文章展示如何在你的 GitHub Pages 網站中使用圖片。

## 🖼️ 基本圖片語法

### 簡單圖片

```markdown
![圖片描述](images/圖片文件名.jpg)
```

### 帶標題的圖片

```markdown
![GitHub Pages 設置頁面](images/github-pages-settings.png)
*GitHub Pages 設置頁面截圖*
```

## 🎨 圖片樣式特色

網站會自動為圖片添加以下樣式：

- **響應式設計**：圖片會自動適應屏幕大小
- **圓角邊框**：美觀的圓角效果
- **陰影效果**：立體的陰影
- **懸停動畫**：滑鼠懸停時會輕微上移

## 📱 響應式圖片

圖片會自動適應不同設備：

- **桌面**：完整尺寸顯示
- **平板**：適中尺寸
- **手機**：小尺寸，保持清晰

## 🎯 實際示例

### 示例 1：基本圖片

![示例圖片](images/001.jpg)

*這是一張示例圖片，展示了圖片的基本顯示效果。*

### 示例 2：圖片網格

如果你有多張相關圖片，可以使用網格布局：

```markdown
<div class="image-grid">
  <img src="images/image1.jpg" alt="圖片1">
  <img src="images/image2.jpg" alt="圖片2">
  <img src="images/image3.jpg" alt="圖片3">
</div>
```

## 🛠️ 圖片最佳實踐

### 1. 文件命名
- 使用有意義的文件名
- 避免空格，使用連字符
- 例如：`github-pages-settings.png`

### 2. 圖片優化
- 壓縮圖片以減少文件大小
- 使用適當的尺寸（建議最大寬度 1200px）
- 考慮使用 WebP 格式

### 3. 組織結構
```
images/
├── screenshots/      # 截圖
├── diagrams/         # 圖表
├── icons/           # 圖標
└── 2024-01/        # 按月份組織
```

## 🔗 外部圖片

你也可以使用外部圖片鏈接：

```markdown
![外部圖片](https://example.com/image.jpg)
```

但建議將圖片下載到本地以確保穩定性。

## 📋 添加圖片的步驟

1. **準備圖片**：編輯、壓縮、重命名
2. **上傳到 images/ 目錄**
3. **在 Markdown 中引用**：`![描述](images/文件名)`
4. **提交到 Git**：`git add images/`
5. **推送到 GitHub**：`git push origin main`

## 🎨 進階用法

### 圖片鏈接

```markdown
[![圖片描述](images/thumbnail.jpg)](images/full-size.jpg)
```

### 圖片對齊

```markdown
<img src="images/example.jpg" alt="描述" style="float: right; margin: 0 0 1rem 1rem; max-width: 300px;">
```

## 🎉 開始使用

現在你可以：

1. 將圖片文件放入 `images/` 目錄
2. 在文章中使用 Markdown 語法引用
3. 享受美觀的圖片顯示效果！

記住：好的圖片能讓文章更生動有趣！ 📸✨
