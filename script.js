// ميزات الآدمن (50 ميزة مبرمجة للعرض والتفاعل)
const features = [
    "تحديث المترجم", "تغيير الألوان", "وضع الصيانة", "إحصائيات الزوار", "حظر IP",
    "تعديل الأوامر", "سجل العمليات", "قاعدة البيانات", "تشفير الكود", "نسخة احتياطية",
    "تحليل الأداء", "إدارة الملفات", "فلترة النصوص", "تنبيهات الآدمن", "تعديل SEO",
    "إضافة مكتبة", "تحسين السرعة", "فحص الثغرات", "تعديل الخط", "وضع الظلام",
    "خرائط الموقع", "إدارة الروابط", "نظام النقاط", "توليد شهادات", "أرشفة يدوية",
    "دعم فني", "حماية DDoS", "تحديث الكرنل", "إدارة الصور", "تعديل API",
    "تحليل السلوك", "ضغط الملفات", "إحصائيات النشر", "وضع الهاكر", "تعديل CSS",
    "إضافة بوت", "فحص الأخطاء", "إدارة البريد", "تتبع الوقت", "تحديث UI",
    "تعديل العنوان", "تحميل التقارير", "إعدادات الخصوصية", "تغيير الساروت", "إدارة الـ Cache",
    "توليد QR", "مترجم AI", "تصدير JSON", "تنظيف الداتابيز", "زر التدمير"
];

function runLfi3a() {
    let code = document.getElementById('editor').value;
    const out = document.getElementById('output');
    out.innerText = "";
    try {
        let compiled = code
            .replace(/kteb\((.*?)\);?/g, 'out.innerText += $1 + "\\n";')
            .replace(/dir\s/g, 'let ')
            .replace(/ila\s*\((.*?)\)\s*{/g, 'if($1){')
            .replace(/3awd\s*\((.*?)\)\s*{/g, 'for(let i=0; i<$1; i++){')
            .replace(/sed/g, '}');
        new Function('out', compiled)(out);
    } catch (e) { out.innerText = "Error: " + e.message; }
}

function loginAdmin() {
    if(prompt("دخل ساروت مسلم مناصف:") === "lfi3a2025") {
        document.getElementById('user-view').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        const grid = document.getElementById('admin-features');
        grid.innerHTML = features.map((f, i) => `<div class="admin-card">${i+1}. ${f}</div>`).join('');
    }
}

function closeAdmin() {
    document.getElementById('user-view').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
}

function clearEditor() { document.getElementById('editor').value = ""; }
