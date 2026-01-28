# Club Page Design Theme Proposal

## 1. Design Concept
**Theme: "Horizon & Intelligence" (水平線と知性)**

「航空操縦学」という専門的な響きが持つ**「知性・信頼感」**と、大空を飛ぶ活動が持つ**「開放感・自由」**を融合させます。
AppleのHuman Interface Guidelinesに基づき、コンテンツ（活動風景や機体）を主役に据え、UI自体は空気のように透明感のある存在を目指します。

---

## 2. Color Palette (Tailwind CSS)

空の色の変化（高度や時間帯）をメタファーとして配色を構成します。

### Primary Color: `Aero Blue`
信頼と知性を象徴する、深く澄んだ青。
- **Color**: Blue-600 ~ Blue-700
- **Usage**: ヘッダー、主要ボタン、リンク、強調テキスト
- **Impression**: 冷静な判断力、専門性、誠実

### Secondary Color: `Fuselage Silver`
航空機の機体や滑走路のコンクリートをイメージした無彩色。
- **Color**: Zinc-100 (Light) / Zinc-800 (Dark)
- **Usage**: 背景色、カードのボーダー、サブテキスト
- **Impression**: 技術、堅実、モダン

### Accent Color: `Caution Amber`
コックピットの計器や滑走路の灯火を連想させる、視認性の高いオレンジ/アンバー。
- **Color**: Amber-500
- **Usage**: 通知バッジ、CTA（Call To Action）ボタンのアクセント、重要な数字の強調
- **Impression**: 注意、エネルギー、活動の熱気

### Gradient Style: `Sky Gradient`
空の広がりを感じさせる背景やオーバーレイ。
- **Class**: `bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950`

---

## 3. Design Direction & Impressions

### Keyword
- **Transparency (透明感)**:
    - すりガラス効果（Glassmorphism）を多用し、雲の上を飛んでいるような浮遊感を演出します。
- **Precision (精密さ)**:
    - 細い罫線（Hairline borders）、整列されたグリッドレイアウトで、計器類のような精密さを表現します。
- **Dynamic (躍動感)**:
    - スクロールに合わせて要素がゆっくり動くパララックス効果を取り入れ、離陸時の上昇感を疑似体験させます。

### Target User Considerations (For Students)
- **Mobile First**:
    - 通学中のスマホ閲覧を最優先。親指一本で操作しやすいボタン配置（下部ナビゲーションなど）。
- **Visual Storytelling**:
    - 「文字を読む」のではなく「写真で感じる」デザイン。
    - ファーストビュー（Hero Section）には、実際に部員が操縦している写真や、コックピットからの景色を画面いっぱいに使用します。
- **Approachable yet Professional**:
    - 「かっこいいけど、自分にもできそう」と思わせるバランス。
    - 専門用語ばかりで敷居を高くせず、余白広めのレイアウトで親しみやすさを担保します。

---

## 4. UI Component Examples

### Hero Section Copy
> **"翼を、その手に。"**
> キャンパスから滑走路へ。航空操縦学同好会で、空への一歩を踏み出そう。

### Status Indicators (Activity Level)
活動頻度などを計器風のUIで表現。
- 例: "Flight Level" メーター（活動頻度を示すインジケーター）

### Member Cards
学生証やライセンスカードを模したデザインで、メンバー紹介を行います。
