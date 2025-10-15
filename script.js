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
        // 從 articles.json 載入文章配置
        const response = await fetch('articles.json');
        const articleConfig = await response.json();
        
        // 載入每篇文章的內容
        articles = [];
        for (const articleInfo of articleConfig.articles) {
            try {
                const contentResponse = await fetch(`articles/${articleInfo.file}`);
                const content = await contentResponse.text();
                
                articles.push({
                    id: articleInfo.id,
                    title: articleInfo.title,
                    date: articleInfo.date,
                    tags: articleInfo.tags,
                    excerpt: articleInfo.excerpt,
                    content: content
                });
            } catch (error) {
                console.warn(`無法載入文章 ${articleInfo.file}:`, error);
            }
        }
        
        // 如果載入失敗，使用備用數據
        if (articles.length === 0) {
            console.log('使用備用文章數據');
            articles = [];
        }
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
