# 📝 如何添加新文章

現在你可以非常方便地添加新文章了！只需要兩個簡單步驟：

## 🚀 添加新文章的步驟

### 步驟 1：創建 Markdown 文件

在 `articles/` 目錄下創建新的 `.md` 文件，例如：

```
articles/my-new-article.md
```

### 步驟 2：更新文章配置

編輯 `articles.json` 文件，添加新文章的信息：

```json
{
  "articles": [
    // ... 現有文章 ...
    {
      "id": "my-new-article",
      "file": "my-new-article.md",
      "title": "我的新文章標題",
      "date": "2024-02-01",
      "tags": ["標籤1", "標籤2"],
      "excerpt": "這是文章的簡短摘要..."
    }
  ]
}
```

## 📋 配置說明

### 文章配置字段

- **`id`**: 唯一識別碼（英文，無空格）
- **`file`**: Markdown 文件名（包含 .md 擴展名）
- **`title`**: 文章標題
- **`date`**: 發布日期（YYYY-MM-DD 格式）
- **`tags`**: 標籤數組
- **`excerpt`**: 文章摘要（顯示在文章列表中）

### Markdown 文件內容

在 `.md` 文件中，你可以使用完整的 Markdown 語法：

```markdown
# 文章標題

這是文章的內容，支持：

- **粗體文字**
- *斜體文字*
- [鏈接](https://example.com)
- `代碼`

## 二級標題

### 三級標題

```javascript
// 代碼塊
function hello() {
    console.log("Hello, World!");
}
```

> 引用文字

- 列表項目 1
- 列表項目 2
```

## 🎯 實際範例

### 1. 創建文件

創建 `articles/hello-world.md`：

```markdown
# 你好，世界！

這是我第一篇使用新系統寫的文章。

## 功能特色

- 支持 Markdown 語法
- 自動語法高亮
- 響應式設計

## 代碼範例

```python
def hello_world():
    print("Hello, World!")
```

## 總結

這個新系統讓寫文章變得非常簡單！
```

### 2. 更新配置

在 `articles.json` 中添加：

```json
{
  "id": "hello-world",
  "file": "hello-world.md",
  "title": "你好，世界！",
  "date": "2024-02-01",
  "tags": ["範例", "Markdown"],
  "excerpt": "這是我第一篇使用新系統寫的文章。"
}
```

### 3. 提交更改

```bash
git add .
git commit -m "Add new article: 你好，世界！"
git push origin main
```

## ✨ 優勢

### 相比之前的優勢

1. **更簡單**：不需要編輯 JavaScript 文件
2. **更直觀**：直接寫 Markdown 文件
3. **更安全**：不會意外破壞 JavaScript 代碼
4. **更靈活**：可以輕鬆管理文章文件
5. **更專業**：使用標準的 Markdown 格式

### 工作流程

1. 在 `articles/` 目錄創建 `.md` 文件
2. 在 `articles.json` 中添加文章信息
3. 提交到 Git
4. 推送到 GitHub
5. 網站自動更新！

## 🔧 進階功能

### 圖片支持

將圖片放在 `images/` 目錄下，然後在 Markdown 中引用：

```markdown
![圖片描述](../images/my-image.jpg)
```

### 數學公式

支持 LaTeX 數學公式：

```markdown
行內公式：$E = mc^2$

塊級公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 數據1 | 數據2 | 數據3 |
| 數據4 | 數據5 | 數據6 |
```

## 🎉 開始寫作吧！

現在你可以專注於內容創作，而不用擔心技術細節。只需要：

1. 創建 `.md` 文件
2. 更新 `articles.json`
3. 提交更改

就是這麼簡單！ 🚀
