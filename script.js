// 文章數據存儲
let articles = [];
let currentSection = 'home';

// 初始化應用
document.addEventListener('DOMContentLoaded', function() {
    loadArticles().then(() => {
        setupNavigation();
        setupSearch();
        setupModal();
        updateStats();
        displayRecentArticles();
        displayAllArticles();
        populateTagFilter();
    });
});

// 載入文章數據
async function loadArticles() {
    try {
        // 這裡可以從 JSON 文件或 API 載入文章數據
        // 目前使用內嵌數據作為示例
        articles = [
            {
                id: 'getting-started',
                title: '開始使用 GitHub Pages',
                date: '2024-01-15',
                tags: ['GitHub', '教程', '網頁開發'],
                excerpt: '學習如何使用 GitHub Pages 來部署靜態網站，這是一個簡單而強大的免費託管服務。',
                content: `# 開始使用 GitHub Pages

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

\`\`\`bash
# 克隆倉庫到本地
git clone https://github.com/yourusername/your-repo.git
cd your-repo
\`\`\`

### 2. 添加網站文件

創建 \`index.html\` 文件作為網站首頁：

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>我的網站</title>
</head>
<body>
    <h1>歡迎來到我的網站！</h1>
</body>
</html>
\`\`\`

### 3. 推送到 GitHub

\`\`\`bash
git add .
git commit -m "添加網站文件"
git push origin main
\`\`\`

### 4. 啟用 GitHub Pages

1. 進入倉庫的 Settings 頁面
2. 滾動到 "Pages" 部分
3. 選擇源分支（通常是 main）
4. 點擊 Save

幾分鐘後，你的網站就會在 \`https://yourusername.github.io/your-repo\` 上線！

## 進階功能

### 自定義域名

你可以在倉庫根目錄添加 \`CNAME\` 文件來使用自定義域名：

\`\`\`
yourdomain.com
\`\`\`

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

開始你的第一個 GitHub Pages 網站吧！`
            },
            {
                id: 'markdown-guide',
                title: 'Markdown 寫作指南',
                date: '2024-01-20',
                tags: ['Markdown', '寫作', '文檔'],
                excerpt: 'Markdown 是一種輕量級標記語言，讓你可以用簡單的語法來格式化文本。',
                content: `# Markdown 寫作指南

Markdown 是一種輕量級標記語言，由 John Gruber 創建。它允許你使用易讀易寫的純文本格式來編寫文檔，然後轉換為 HTML。

## 基本語法

### 標題

使用 \`#\` 來創建標題，\`#\` 的數量表示標題級別：

\`\`\`markdown
# 一級標題
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題
\`\`\`

### 段落和換行

段落之間用空行分隔：

\`\`\`markdown
這是第一個段落。

這是第二個段落。
\`\`\`

### 強調

使用 \`*\` 或 \`_\` 來表示強調：

\`\`\`markdown
*斜體文本*
_斜體文本_

**粗體文本**
__粗體文本__

***粗斜體文本***
___粗斜體文本___
\`\`\`

### 列表

#### 無序列表

\`\`\`markdown
- 項目 1
- 項目 2
  - 子項目 2.1
  - 子項目 2.2
- 項目 3
\`\`\`

#### 有序列表

\`\`\`markdown
1. 第一項
2. 第二項
3. 第三項
\`\`\`

### 鏈接和圖片

\`\`\`markdown
[鏈接文本](https://example.com)
[鏈接文本](https://example.com "可選標題")

![圖片替代文本](image.jpg)
![圖片替代文本](image.jpg "可選標題")
\`\`\`

### 代碼

#### 行內代碼

\`\`\`markdown
使用 \`code\` 來表示行內代碼。
\`\`\`

#### 代碼塊

\`\`\`markdown
\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`
\`\`\`

### 引用

\`\`\`markdown
> 這是一個引用。
> 
> 可以包含多個段落。
> 
> > 這是嵌套引用。
\`\`\`

### 水平線

\`\`\`markdown
---
***
___
\`\`\`

## 進階語法

### 表格

\`\`\`markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 行1 | 數據 | 數據 |
| 行2 | 數據 | 數據 |
\`\`\`

### 任務列表

\`\`\`markdown
- [x] 已完成任務
- [ ] 未完成任務
- [ ] 另一個任務
\`\`\`

### 腳註

\`\`\`markdown
這是一個腳註引用[^1]。

[^1]: 這是腳註內容。
\`\`\`

## 最佳實踐

1. **保持一致性**：選擇一種語法風格並堅持使用
2. **使用標題結構**：合理使用標題層級來組織內容
3. **添加空行**：在段落和列表之間添加空行提高可讀性
4. **使用代碼塊**：對於代碼使用語法高亮的代碼塊
5. **檢查鏈接**：確保所有鏈接都是有效的

## 工具推薦

- **編輯器**：Typora、Mark Text、VS Code
- **預覽**：大多數編輯器都支持實時預覽
- **轉換**：Pandoc 可以將 Markdown 轉換為其他格式

Markdown 讓寫作變得簡單而優雅，開始使用它來記錄你的想法吧！`
            },
            {
                id: 'web-development-tips',
                title: '網頁開發實用技巧',
                date: '2024-01-25',
                tags: ['網頁開發', '技巧', '前端'],
                excerpt: '分享一些在網頁開發過程中學到的實用技巧和最佳實踐。',
                content: `# 網頁開發實用技巧

在網頁開發的過程中，我積累了一些實用的技巧和最佳實踐。這些技巧可以幫助你提高開發效率，寫出更好的代碼。

## CSS 技巧

### 1. 使用 CSS 變量

CSS 變量讓你可以輕鬆管理主題色彩和尺寸：

\`\`\`css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --font-size-base: 16px;
    --spacing-unit: 1rem;
}

.button {
    background-color: var(--primary-color);
    padding: var(--spacing-unit);
    font-size: var(--font-size-base);
}
\`\`\`

### 2. Flexbox 居中

使用 Flexbox 可以輕鬆實現各種居中效果：

\`\`\`css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
\`\`\`

### 3. 響應式設計

使用相對單位和媒體查詢：

\`\`\`css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (max-width: 768px) {
    .container {
        padding: 0 0.5rem;
    }
}
\`\`\`

## JavaScript 技巧

### 1. 使用解構賦值

\`\`\`javascript
// 對象解構
const { name, age, email } = user;

// 數組解構
const [first, second, ...rest] = array;

// 函數參數解構
function greet({ name, age }) {
    return \`Hello, \${name}! You are \${age} years old.\`;
}
\`\`\`

### 2. 使用模板字符串

\`\`\`javascript
const name = 'John';
const age = 30;

// 舊方式
const message = 'Hello, ' + name + '! You are ' + age + ' years old.';

// 新方式
const message = \`Hello, \${name}! You are \${age} years old.\`;
\`\`\`

### 3. 使用箭頭函數

\`\`\`javascript
// 舊方式
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});

// 新方式
const doubled = numbers.map(num => num * 2);
\`\`\`

## 性能優化

### 1. 圖片優化

\`\`\`html
<!-- 使用適當的圖片格式 -->
<img src="image.webp" alt="描述" loading="lazy">

<!-- 響應式圖片 -->
<picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <source media="(min-width: 480px)" srcset="medium.jpg">
    <img src="small.jpg" alt="描述">
</picture>
\`\`\`

### 2. 代碼分割

\`\`\`javascript
// 動態導入
const loadModule = async () => {
    const module = await import('./heavy-module.js');
    return module;
};

// 使用 Webpack 的動態導入
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`

### 3. 緩存策略

\`\`\`javascript
// 使用 localStorage 緩存數據
const cacheKey = 'user-data';
const cacheExpiry = 5 * 60 * 1000; // 5分鐘

function getCachedData() {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < cacheExpiry) {
            return data;
        }
    }
    return null;
}

function setCachedData(data) {
    const cacheData = {
        data,
        timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
}
\`\`\`

## 開發工具

### 1. 使用 ESLint

\`\`\`json
{
    "extends": ["eslint:recommended"],
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "error",
        "prefer-const": "error"
    }
}
\`\`\`

### 2. 使用 Prettier

\`\`\`json
{
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2
}
\`\`\`

### 3. 使用 Git Hooks

\`\`\`bash
# 安裝 husky
npm install --save-dev husky

# 設置 pre-commit hook
npx husky add .husky/pre-commit "npm run lint"
\`\`\`

## 最佳實踐

1. **保持代碼簡潔**：寫出可讀性強的代碼
2. **使用版本控制**：Git 是必備工具
3. **寫測試**：確保代碼質量
4. **文檔化**：為複雜的邏輯添加註釋
5. **持續學習**：跟上技術發展趨勢

## 總結

這些技巧只是網頁開發中的冰山一角。關鍵是要持續學習和實踐，不斷改進自己的開發技能。

記住，好的代碼不僅要能運行，還要易於維護和擴展。`
            },
            {
                id: 'ai-era-programming',
                title: 'AI 時代的程式設計思維',
                date: '2024-01-30',
                tags: ['AI', '程式設計', '思考'],
                excerpt: '在 AI 時代，程式設計師需要重新思考自己的角色和價值。這篇文章探討了如何適應新的技術環境。',
                content: `# AI 時代的程式設計思維

在人工智慧快速發展的今天，程式設計師面臨著前所未有的挑戰和機遇。我們需要重新思考自己的角色定位。

## 傳統程式設計 vs AI 輔助開發

### 傳統方式
- 從零開始編寫代碼
- 手動調試和優化
- 大量重複性工作
- 學習成本高

### AI 輔助方式
- 使用 AI 工具生成代碼
- 智能調試和優化
- 自動化重複任務
- 快速學習新技術

## 新時代的程式設計師技能

### 1. 提示詞工程 (Prompt Engineering)
- 學會與 AI 有效溝通
- 設計清晰的指令
- 理解 AI 的思維模式

### 2. 代碼審查能力
- 評估 AI 生成的代碼質量
- 識別潛在問題
- 進行必要的修改和優化

### 3. 系統架構設計
- 整體系統規劃
- 模組化設計
- 性能優化策略

## 實際應用案例

### 使用 ChatGPT 輔助開發
\`\`\`javascript
// 提示詞：請幫我寫一個 JavaScript 函數來驗證電子郵件格式
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
\`\`\`

### 使用 GitHub Copilot
- 自動代碼補全
- 智能建議
- 上下文理解

## 未來發展趨勢

1. **低代碼/無代碼平台**：更多視覺化開發工具
2. **AI 代碼生成**：更智能的代碼自動生成
3. **自然語言編程**：用自然語言描述需求
4. **自動化測試**：AI 自動生成測試用例

## 如何適應變化

### 持續學習
- 關注新技術發展
- 學習 AI 工具使用
- 提升軟技能

### 專注高價值工作
- 系統設計和架構
- 業務邏輯理解
- 用戶體驗優化

### 培養 AI 協作能力
- 學會與 AI 有效合作
- 理解 AI 的局限性
- 發揮人類創造力

## 總結

AI 時代的程式設計師不是被取代，而是進化。我們需要：

1. **擁抱變化**：積極學習新工具
2. **專注價值**：做 AI 無法替代的工作
3. **持續成長**：保持學習熱情
4. **人機協作**：發揮人類和 AI 的各自優勢

未來屬於那些能夠與 AI 協作、創造價值的程式設計師。讓我們一起迎接這個充滿機遇的時代！`
            }
        ];
    } catch (error) {
        console.error('載入文章失敗:', error);
        articles = [];
    }
    return Promise.resolve();
}

// 設置導航
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活動狀態
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            
            // 添加活動狀態
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            currentSection = targetId;
            
            // 根據當前頁面更新內容
            if (targetId === 'articles') {
                displayAllArticles();
            } else if (targetId === 'home') {
                displayRecentArticles();
            }
        });
    });
}

// 設置搜尋功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const tagFilter = document.getElementById('tag-filter');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTag = tagFilter.value;
        
        const filteredArticles = articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                                article.excerpt.toLowerCase().includes(searchTerm) ||
                                article.content.toLowerCase().includes(searchTerm);
            
            const matchesTag = !selectedTag || article.tags.includes(selectedTag);
            
            return matchesSearch && matchesTag;
        });
        
        displayArticles(filteredArticles, 'articles-list');
    }
    
    searchInput.addEventListener('input', performSearch);
    tagFilter.addEventListener('change', performSearch);
}

// 設置模態框
function setupModal() {
    const modal = document.getElementById('article-modal');
    const closeBtn = document.querySelector('.close');
    
    // 關閉模態框
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // 點擊模態框外部關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // ESC 鍵關閉
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// 顯示文章
function displayArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;
    
    const modal = document.getElementById('article-modal');
    const content = document.getElementById('article-content');
    
    // 轉換 Markdown 為 HTML
    const htmlContent = marked.parse(article.content);
    
    content.innerHTML = `
        <div class="article-header">
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
                <span class="article-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(article.date)}
                </span>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="article-content">${htmlContent}</div>
    `;
    
    modal.style.display = 'block';
    
    // 高亮代碼
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// 顯示文章列表
function displayArticles(articlesToShow, containerId) {
    const container = document.getElementById(containerId);
    
    if (articlesToShow.length === 0) {
        container.innerHTML = '<p class="no-articles">沒有找到相關文章。</p>';
        return;
    }
    
    const articlesHTML = articlesToShow.map(article => `
        <div class="article-card" onclick="displayArticle('${article.id}')">
            <div class="article-header">
                <h3 class="article-title">${article.title}</h3>
                <div class="article-meta">
                    <span class="article-date">
                        <i class="fas fa-calendar"></i>
                        ${formatDate(article.date)}
                    </span>
                </div>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="article-excerpt">
                ${article.excerpt}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = articlesHTML;
}

// 顯示最新文章
function displayRecentArticles() {
    const recentArticles = articles.slice(0, 6); // 顯示最新 6 篇文章
    displayArticles(recentArticles, 'recent-articles-list');
}

// 顯示所有文章
function displayAllArticles() {
    displayArticles(articles, 'articles-list');
}

// 填充標籤過濾器
function populateTagFilter() {
    const tagFilter = document.getElementById('tag-filter');
    const allTags = [...new Set(articles.flatMap(article => article.tags))];
    
    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// 更新統計數據
function updateStats() {
    const articleCount = articles.length;
    const tagCount = new Set(articles.flatMap(article => article.tags)).size;
    
    document.getElementById('article-count').textContent = articleCount;
    document.getElementById('tag-count').textContent = tagCount;
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 導出函數供全局使用
window.displayArticle = displayArticle;
