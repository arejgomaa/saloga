document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // لمنع إرسال النموذج بشكل افتراضي

    // إخفاء الفورم وعرض رسالة الشكر
    document.getElementById("form-container").style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";

    // إفراغ الحقول في الفورم
    document.getElementById("contact-form").reset();
});

document.getElementById("back-btn").addEventListener("click", function() {
    // إرجاع الصفحة إلى الفورم وإخفاء رسالة الشكر
    document.getElementById("thank-you-message").style.display = "none";
    document.getElementById("form-container").style.display = "block";
});