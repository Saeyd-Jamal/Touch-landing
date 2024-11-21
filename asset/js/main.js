$(document).ready(function () {
    // كتابة النص العلوي
    let words = [];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    // جلب الكلمات من HTML
    $("#word-list span").each(function () {
        words.push($(this).text());
    });
    function type() {
        currentWord = words[i];
        if (isDeleting) {
            $("#typewriter_hero").text(currentWord.substring(0, j - 1));
            j--;
            if (j == 0) {
                isDeleting = false;
                i++;
                if (i == words.length) {
                    i = 0;
                }
            }
        } else {
            $("#typewriter_hero").text(currentWord.substring(0, j + 1));
            j++;
            if (j == currentWord.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, 300);
    }
    type();



});