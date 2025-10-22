window.addEventListener('DOMContentLoaded', () => {
    const notif = document.querySelector('.notification-wrapper');
    const toc = document.querySelector('.table-of-contents');
    if (notif && toc) {
        const notifHeight = notif.offsetHeight;
        toc.style.top = `${notif.offsetTop + notifHeight + 16}px`; // 16px = petit espace
    }
});