window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// ====== Flutter Web 兼容性补丁 ======

// 1. 修复 Canvas 2D API 不完整的问题
if (typeof HTMLCanvasElement !== 'undefined') {
 const originalGetContext = HTMLCanvasElement.prototype.getContext;
 HTMLCanvasElement.prototype.getContext = function(type, ...args) {
 const ctx = originalGetContext.call(this, type, ...args);
 if (ctx && type === '2d') {
 // 确保 2D context 有所有必要的方法
 if (!ctx.filter) ctx.filter = 'none';
 if (!ctx.globalCompositeOperation) ctx.globalCompositeOperation = 'source-over';
 }
 return ctx;
 };
}

// 2. 修复 CSS Flexbox 支持问题
document.addEventListener('DOMContentLoaded', () => {
 // 给所有 flex 容器添加 fallback
 document.querySelectorAll('[style*="flex"]').forEach(el => {
 el.style.display = '-webkit-flex';
 el.style.display = 'flex';
 });
});

// 3. 禁止 Flutter 的错误处理吞掉错误
window.addEventListener('error', (e) => {
 console.error('[PakePlus Patch] Error:', e.message, e.filename, e.lineno);
});

// 4. 禁止未处理的 Promise rejection
window.addEventListener('unhandledrejection', (e) => {
 console.error('[PakePlus Patch] Unhandled Promise:', e.reason);
});

console.log('[PakePlus] Flutter Web 兼容性补丁 v2 已加载');