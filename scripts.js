// 加载文本内容
document.addEventListener('DOMContentLoaded', function() {
    // 加载会话1文本
    fetch('texts/session1.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('text-session1').textContent = text;
        })
        .catch(error => {
            console.error('加载文本失败:', error);
            document.getElementById('text-session1').textContent = '加载文本失败';
        });
    
    // 加载会话2文本
    fetch('texts/session2.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('text-session2').textContent = text;
        })
        .catch(error => {
            console.error('加载文本失败:', error);
            document.getElementById('text-session2').textContent = '加载文本失败';
        });
    
    // 更新最后修改日期
    document.getElementById('update-date').textContent = new Date().toLocaleDateString();
});