const categories = [
  ["🚗", "سيارات ومركبات"], ["🏠", "عقارات"], ["📱", "جوالات وأجهزة"],
  ["🛋️", "أثاث ومنزل"], ["💼", "وظائف وخدمات"], ["🐄", "مواشي وحيوانات"],
  ["🛠️", "معدات وأدوات"], ["👕", "أزياء ومستلزمات"],
];

export default function HomePage() {
  return (
    <main>
      <header style={{ background: "var(--navy)", color: "white", padding: "16px max(20px, calc((100% - 1100px)/2))" }}>
        <div style={{ maxWidth: 1100, margin: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div><strong style={{ fontSize: 25 }}>حراج <span style={{ color: "#ef5964" }}>السودان</span></strong><div style={{ fontSize: 12, opacity: .8 }}>سوقك.. من مكانك</div></div>
          <button style={{ background: "var(--red)", color: "white", border: 0, borderRadius: 10, padding: "10px 16px", fontWeight: 700 }}>＋ أضف إعلانك</button>
        </div>
      </header>
      <section style={{ maxWidth: 1100, margin: "34px auto", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(120deg,#172b46,#263f60)", color: "white", borderRadius: 20, padding: "30px 24px", textAlign: "center" }}>
          <h1 style={{ margin: "0 0 8px", fontSize: 30 }}>كل السودان.. في حراج واحد</h1>
          <p style={{ margin: "0 0 20px", opacity: .85 }}>اكتشف الإعلانات أو اعرض ما تريد بيعه بسهولة</p>
          <div style={{ display: "flex", gap: 8, maxWidth: 650, margin: "auto", background: "white", borderRadius: 12, padding: 6 }}>
            <input aria-label="ابحث في الإعلانات" placeholder="ماذا تبحث عنه؟" style={{ flex: 1, minWidth: 0, border: 0, outline: 0, padding: 10, color: "#172033" }} />
            <button style={{ background: "var(--red)", color: "white", border: 0, borderRadius: 9, padding: "9px 20px", fontWeight: 700 }}>بحث</button>
          </div>
        </div>
        <h2 style={{ margin: "30px 0 16px", fontSize: 21 }}>تصفح الأقسام</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(135px,1fr))", gap: 12 }}>
          {categories.map(([icon, name]) => <div key={name} style={{ background: "white", border: "1px solid #e8eaf0", borderRadius: 14, padding: "20px 10px", textAlign: "center", fontWeight: 700 }}><div style={{ fontSize: 29, marginBottom: 8 }}>{icon}</div>{name}</div>)}
        </div>
        <div style={{ marginTop: 28, background: "white", border: "1px solid #e8eaf0", borderRadius: 14, padding: 20, color: "var(--muted)", textAlign: "center" }}>
          ستظهر أحدث الإعلانات هنا بعد تفعيل قاعدة البيانات.
        </div>
      </section>
      <footer style={{ background: "var(--navy)", color: "white", textAlign: "center", padding: 20, marginTop: 50, fontSize: 13 }}>حراج السودان © {new Date().getFullYear()} — منصة إعلانات مستقلة</footer>
    </main>
  );
}
