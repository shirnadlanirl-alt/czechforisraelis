# הוראה לעובד AI: יצירת שיעור תרגילים — nastoupit / vystoupit / přestoupit

## הקשר

האתר הוא "צ'כית לישראלים" — אתר לימוד צ'כית למדברי עברית.  
שיעור 8ה (b1-lesson8e.html) מלמד את שלושת פעלי התחבורה:  
- **nastoupit** — לעלות לתחבורה / להתחיל בעבודה  
- **vystoupit** — לרדת מתחבורה / לנאום בכנס / לצאת מארגון  
- **přestoupit** — להחליף קו / לעבור על חוק / לשנות דת  

**מטרה:** ליצור קובץ HTML חדש בשם `b1-lesson8g.html` — שיעור תרגילים מלא על הנושא הזה, בסגנון האתר.

---

## קובץ תבנית (ממנו יש להעתיק את כל ה-CSS והמבנה)

העתיקי את כל ה-CSS ומבנה ה-HTML **מ-b1-lesson8f.html** (שיעור תרגול מסכם קיים).  
אין להמציא CSS חדש — הכל מגיע מהתבנית.

### שינויים נדרשים לפי ה-template:

| שדה | ערך חדש |
|-----|---------|
| `<title>` | `8ז — תרגול: nastoupit / vystoupit / přestoupit \| B1 \| צ'כית בעברית` |
| breadcrumb (last item) | `8ז — תרגול: nastoupit / vystoupit / přestoupit` |
| `<h1>` | `8ז: <span class="green">תרגול — nastoupit / vystoupit / přestoupit</span>` |
| `<p>` (תת-כותרת) | `15 שאלות — לעלות, לרדת, להחליף קו — ומשמעויות נוספות.` |
| `data-page` (aside) | `b1-lesson8g` |
| step-nav back | `<a href="b1-lesson8e.html" class="btn-back">→ 8ה — nastoupit / vystoupit / přestoupit</a>` |
| step-nav next | `<a href="b1-lesson8f.html" class="btn-next">8ו — תרגול מסכם ←</a>` |

---

## תוכן הסיידבר (aside)

```html
<div style="background:#ecfeff;border:1px solid #a5f3fc;border-inline-start:5px solid #0e7490;border-radius:var(--r);padding:14px;font-size:13px;color:#0e7490;line-height:1.9;box-shadow:0 6px 18px rgba(14,116,144,.06);margin-bottom:12px;">
  <strong style="display:block;margin-bottom:8px;font-size:14px;font-family:'Nunito',sans-serif;">🚌 שלושת הפעלים</strong>
  <span style="font-family:'Nunito',sans-serif;font-weight:800;">nastoupit</span> — לעלות / להתחיל<br>
  <span style="font-family:'Nunito',sans-serif;font-weight:800;">vystoupit</span> — לרדת / לנאום<br>
  <span style="font-family:'Nunito',sans-serif;font-weight:800;">přestoupit</span> — להחליף / לעבור
</div>
<div style="background:#f7faff;border:1px solid rgba(17,69,126,.14);border-radius:var(--r);padding:16px;">
  <h3 style="font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;color:#11457E;margin-bottom:10px;">לזכור</h3>
  <div style="font-size:13px;line-height:2.0;color:var(--text);">
    na- = עלייה / כניסה<br>
    vy- = יציאה / ירידה<br>
    pře- = מעבר / חציה<br><br>
    zastávka = תחנה<br>
    přestupní stanice = תחנת מעבר
  </div>
</div>
```

---

## 15 שאלות לתרגול

יש ליצור את מערך `questions` בפורמט הבא:

```javascript
{q: "שאלה בעברית", cz: "משפט בצ'כית עם הקשר", opts: ["תשובה1","תשובה2","תשובה3","תשובה4"], ans: 0, ex: "הסבר קצר בעברית מדוע התשובה נכונה"}
```

**`ans: 0` = התשובה הנכונה תמיד ב-opts[0]. הפונקציה answer() מטפלת בזה — אל תשני את הלוגיקה.**

### תוכן 15 השאלות (לפי נושאים):

**nastoupit — תחבורה (3 שאלות)**
1. "do + מה?" — nastoupit do autobusu / do tramvaje / do metra / do vlaku (לא: na)
2. Kde mám nastoupit? — בחירה מ: Kde nastoupím / Kde vystupit / Kde přestoupím / Kde jsem nastoupil
3. Nastoupil do nové práce — מה הכוונה? (התחיל עבודה חדשה / עלה לרכבת / ירד מהאוטובוס / החליף קו)

**nastoupit — עבודה/לימודים (2 שאלות)**
4. Nastoupila na univerzitu — מה הכוונה? (התחילה לימודים / עלתה לרכבת / ירדה מהאוניברסיטה / עברה לעיר)
5. השלמת משפט: "Příští týden ..." (nastoupím do nové práce — להתחיל עבודה)

**vystoupit — תחבורה (3 שאלות)**
6. "Musím vystoupit na příští zastávce" — מה עושים? (יורדים בתחנה הבאה / עולים / מחליפים / ממשיכים)
7. Kde vystoupíme? — תרגום לעברית
8. بחירה: לרדת מהרכבת = vystoupit / nastoupit / přestoupit / přijet z vlaku

**vystoupit — משמעויות נוספות (2 שאלות)**
9. Vystoupila na konferenci — מה עשתה? (נאמה/הופיעה בכנס / ירדה מהכנס / עלתה למכונית / עזבה)
10. Británie vystoupila z EU — מה פירושו? (יצאה מהאיחוד / נסעה לאיחוד / הצביעה / הצטרפה)

**přestoupit — תחבורה (3 שאלות)**
11. Přestoupím na metrě na Florenci — מה עושים? (מחליפים קו במטרו / עולים בפלורנץ / יורדים / נוסעים)
12. Musím přestoupit? — תרגום
13. בחירה: להחליף קו = přestoupit / nastoupit / vystoupit / přijet

**přestoupit — משמעויות נוספות (2 שאלות)**
14. Přestoupil zákon — מה הכוונה? (עבר על החוק / החליף קו / עלה לאוטובוס / ירד מהרכבת)
15. Přestoupila na jiné náboženství — מה הכוונה? (עברה לדת אחרת / החליפה קו / עזבה את הכנסייה / נסעה)

---

## הודעות ניקוד (showScore)

```javascript
if(score===questions.length) msg="מושלם! שלטת בשלושת הפעלים!";
else if(score>=12) msg="מצוין! כמעט שם — חזור על המשמעויות הנוספות.";
else if(score>=9) msg="טוב! הבסיס התחבורתי ברור — תרגלו nastoupit do práce ו-vystoupit na konferenci.";
else msg="המשך לתרגל — קרא שוב את שיעור 8ה לפני שממשיכים.";
```

---

## אנליטיקס (חובה — בכל דף)

```html
<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wn8tkghshj");</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YLK68D3GH4"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YLK68D3GH4');</script>
```

---

## דברים שאסור לשנות

- אל תמציאי CSS חדש — הכל מגיע מ-b1-lesson8f.html
- `ans: 0` תמיד — התשובה הנכונה היא opts[0] תמיד
- `direction:ltr` על כל טקסט צ'כי
- `font-family:'Nunito',sans-serif` על כל טקסט צ'כי
- analytics ו-clarity חייבים להיות ב-`<head>`
- `<script src="_shared/sidebar.js"></script>` לפני footer
- `<script src="footer.js"></script>` אחרון

---

## אחרי שיוצרים את הקובץ — עדכונים נדרשים

1. **sidebar.js** — הוסיפי `'b1-lesson8g'` ל-`pages` של שיעור 8, והוסיפי לרשימת ה-`sub`:  
   `{label:'ז', title:'תרגול: nastoupit / vystoupit / přestoupit', link:'b1-lesson8g.html', page:'b1-lesson8g'}`

2. **b1-lesson8.html (hub)** — הוסיפי כרטיס 8ז לפני כרטיס 8ו (תרגול מסכם):
   ```html
   <a href="b1-lesson8g.html" class="sub-card">
     <div class="sub-num">8ז</div>
     <div class="sub-title">תרגול: nastoupit / vystoupit / přestoupit</div>
     <div class="sub-desc">15 שאלות — לעלות, לרדת, להחליף — ומשמעויות נוספות.</div>
     <div class="sub-meta">⏱ 10 דקות <span class="dot"></span> 15 שאלות</div>
   </a>
   ```

3. **b1-lesson8e.html (step-nav)** — כפתור "הבא" יצביע ל-`b1-lesson8g.html` (במקום ל-8f)

4. **b1-lesson8f.html (step-nav)** — כפתור "אחורה" יצביע ל-`b1-lesson8g.html` (במקום ל-8e)

5. **search.html** — הוסיפי שורה:  
   `{level:"b1", url:"b1-lesson8g.html", title:"B1·8ז — תרגול: nastoupit / vystoupit / přestoupit", desc:"15 שאלות על פעלי תחבורה ומשמעויותיהם הנוספות.", tags:["nastoupit","vystoupit","přestoupit","תרגול","תחבורה","zastávka","přestupní"]}`
