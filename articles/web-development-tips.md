# 網頁開發實用技巧

在網頁開發的過程中，我積累了一些實用的技巧和最佳實踐。這些技巧可以幫助你提高開發效率，寫出更好的代碼。

## CSS 技巧

### 1. 使用 CSS 變量

CSS 變量讓你可以輕鬆管理主題色彩和尺寸：

```css
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
```

### 2. Flexbox 居中

使用 Flexbox 可以輕鬆實現各種居中效果：

```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### 3. 響應式設計

使用相對單位和媒體查詢：

```css
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
```

## JavaScript 技巧

### 1. 使用解構賦值

```javascript
// 對象解構
const { name, age, email } = user;

// 數組解構
const [first, second, ...rest] = array;

// 函數參數解構
function greet({ name, age }) {
    return `Hello, ${name}! You are ${age} years old.`;
}
```

### 2. 使用模板字符串

```javascript
const name = 'John';
const age = 30;

// 舊方式
const message = 'Hello, ' + name + '! You are ' + age + ' years old.';

// 新方式
const message = `Hello, ${name}! You are ${age} years old.`;
```

### 3. 使用箭頭函數

```javascript
// 舊方式
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});

// 新方式
const doubled = numbers.map(num => num * 2);
```

## 性能優化

### 1. 圖片優化

```html
<!-- 使用適當的圖片格式 -->
<img src="image.webp" alt="描述" loading="lazy">

<!-- 響應式圖片 -->
<picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <source media="(min-width: 480px)" srcset="medium.jpg">
    <img src="small.jpg" alt="描述">
</picture>
```

### 2. 代碼分割

```javascript
// 動態導入
const loadModule = async () => {
    const module = await import('./heavy-module.js');
    return module;
};

// 使用 Webpack 的動態導入
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

### 3. 緩存策略

```javascript
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
```

## 開發工具

### 1. 使用 ESLint

```json
{
    "extends": ["eslint:recommended"],
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "error",
        "prefer-const": "error"
    }
}
```

### 2. 使用 Prettier

```json
{
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2
}
```

### 3. 使用 Git Hooks

```bash
# 安裝 husky
npm install --save-dev husky

# 設置 pre-commit hook
npx husky add .husky/pre-commit "npm run lint"
```

## 最佳實踐

1. **保持代碼簡潔**：寫出可讀性強的代碼
2. **使用版本控制**：Git 是必備工具
3. **寫測試**：確保代碼質量
4. **文檔化**：為複雜的邏輯添加註釋
5. **持續學習**：跟上技術發展趨勢

## 總結

這些技巧只是網頁開發中的冰山一角。關鍵是要持續學習和實踐，不斷改進自己的開發技能。

記住，好的代碼不僅要能運行，還要易於維護和擴展。
