// ميزات الآدمن والوظائف المرتبطة بها
const adminActions = {
    "تغيير لون الموقع": () => {
        let color = prompt("دخل كود اللون (مثلا red أو #ff0000):", "#22c55e");
        if(color) document.documentElement.style.setProperty('--primary', color);
    },
    "مسح كود المحرر": () => {
        document.getElementById('editor').value = "";
        alert("تم تنظيف المحرر عن بُعد");
    },
    "إحصائيات الكود": () => {
        let code = document.getElementById('editor').value;
        let lines = code.split('\n').length;
        let chars = code.length;
        alert(`إحصائيات اللفيعة:\n- عدد الأسطر: ${lines}\n- عدد الحروف: ${chars}`);
    },
    "وضع الصيانة": () => {
        if(confirm("واش بغيتي تسد الموقع للصيانة؟")) {
            document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:100px;'>الموقع في صيانة حالياً بطلب من مسلم مناصف.</h1>";
        }
    },
    "عرض الأوامر (JSON)": () => {
        alert("الأوامر الحالية: kteb, dir, ila, 3awd, sed");
    },
    "تحميل الكود الحالي": () => {
        let text = document.getElementById('editor').value;
        let blob = new Blob([text], {type: "text/plain"});
        let anchor = document.createElement("a");
        anchor.download = "lfi3a_code.txt";
        anchor.href = window.URL.createObjectURL(blob);
        anchor.click();
    }
};

// تشغيل المحرر
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

// الدخول للوحة التحكم
function loginAdmin() {
    if(prompt("دخل ساروت مسلم مناصف:") === "lfi3a2025") {
        document.getElementById('user-view').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadRealFeatures();
    }
}

// تحميل الميزات الحقيقية في اللوحة
function loadRealFeatures() {
    const grid = document.getElementById('admin-features');
    grid.innerHTML = ""; // مسح القديم
    
    // تحويل الأوبجكت إلى أزرار حقيقية
    Object.keys(adminActions).forEach((key) => {
        let card = document.createElement('div');
        card.className = "admin-card";
        card.style.cursor = "pointer";
        card.innerHTML = `<h3>⚙️</h3><p>${key}</p>`;
        card.onclick = adminActions[key]; // ربط الضغطة بالوظيفة
        grid.appendChild(card);
    });
}

function closeAdmin() {
    document.getElementById('user-view').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
}

function clearEditor() { document.getElementById('editor').value = ""; }
