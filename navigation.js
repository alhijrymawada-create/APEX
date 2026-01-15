// الانتقال بين الصفحات بسلاسة
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.getAttribute('data-target');
        if(targetPage){
            // استخدم نافذة مؤقتة للتحريك العمودي
            window.location.href = targetPage; // هنا الانتقال للصفحة
        }
    });
});
