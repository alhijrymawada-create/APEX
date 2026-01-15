
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.getAttribute('data-target');
        if(targetPage){
            window.location.href = targetPage;
        }
    });
});
