// ボタン要素を取得
const button = document.getElementById('taiwanButton');

// ボタンがクリックされたときの処理
button.addEventListener('click', function() {
    // 検索したいキーワード
    const keyword = '台湾';
    
    // Google検索のURLを生成
    // encodeURIComponentは、キーワードに日本語などが含まれていても正しくURLに変換するためのもの
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(keyword);
    
    // 新しいタブでGoogle検索の結果を開く
    window.open(searchUrl, '_blank');
});
