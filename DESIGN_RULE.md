# Aviation Club Official Website Design Rules

# 0. Design Philosophy
**Theme: "Horizon & Intelligence" (水平線と知性)**
AppleのHuman Interface Guidelines（Clarity, Deference, Depth）を基盤とし、航空操縦学の専門性と空の開放感を融合させます。

- **Clarity (明瞭さ)**:
  - コンテンツ（活動風景や機体）を主役に。
  - 「文字を読む」のではなく「写真で感じる」ビジュアルストーリーテリング。
- **Deference (尊重)**:
  - **Transparency (透明感)**: すりガラス効果で雲の上のような浮遊感を演出。
  - **Precision (精密さ)**: 細い罫線（Hairline borders）とグリッドで計器のような信頼感を表現。
- **Depth (奥行き)**:
  - 視覚的なレイヤー構造とパララックス効果で、空の広がりと上昇感を感じさせる。

---

# 1. Color System (Tailwind CSS)
空の色の変化をメタファーとしたパレット。「Aero Blue」を主体に、「Fuselage Silver」で支え、「Caution Amber」でアクセントを加えます。

## Base Colors (Background & Surface)
| Role | Class (Light) | Class (Dark) | Description |
| --- | --- | --- | --- |
| **Main Background** | `bg-white` | `dark:bg-zinc-950` | 純粋な白 / 深い宇宙のような黒 |
| **Sky Gradient** | `bg-gradient-to-b from-blue-50 to-white` | `dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950` | 空の広がりを感じさせる背景 |
| **Surface (Card)** | `bg-zinc-50` | `dark:bg-zinc-900` | 通常のカード背景 |
| **Surface (Glass)**| `bg-white/70 backdrop-blur-xl` | `dark:bg-zinc-900/70 backdrop-blur-xl` | **推奨**: すりガラスコンポーネント |

## Text Colors
| Role | Class (Light) | Class (Dark) | Description |
| --- | --- | --- | --- |
| **Primary** | `text-zinc-900` | `dark:text-zinc-50` | 見出し、重要情報 |
| **Secondary** | `text-zinc-500` | `dark:text-zinc-400` | 副題、説明文 (Fuselage Silver系) |
| **Tertiary** | `text-zinc-400` | `dark:text-zinc-600` | プレースホルダー |

## Brand & Accent Colors
| Role | Key | Class | Description |
| --- | --- | --- | --- |
| **Primary (Aero Blue)** | `blue-600` | `bg-blue-600 text-white` | **信頼・知性**。主要ボタン、リンク、ブランドロゴ。 |
| **Accent (Caution Amber)**| `amber-500` | `text-amber-500` or `bg-amber-500` | **注意・熱気**。コックピット計器色。CTAアクセント、Badge。 |
| **Border (Precision)** | `zinc-200` | `border-zinc-200 dark:border-zinc-800` | 機体のパネルラインのような繊細な境界線。 |

---

# 2. Typography
可読性が高く、計器のような機能美を持つサンセリフ体を使用。
`tracking-tight` で文字間を詰め、モダンで引き締まった印象を与えます。

### Font Settings
- **Family**: System Sans (SF Pro / Segoe UI / Roboto)
- **Feature**: `tracking-tight` (必須)

### Scale
| Element | Tailwind Classes | Usage |
| --- | --- | --- |
| **Display (Hero)** | `text-5xl md:text-7xl font-bold tracking-tight leading-tight` | "翼を、その手に。" |
| **H1 (Page Title)**| `text-3xl md:text-4xl font-semibold tracking-tight` | 各ページの主題 |
| **H2 (Section)** | `text-2xl font-semibold tracking-tight text-blue-600` | セクション見出し (Aero Blueを使用) |
| **Body** | `text-base font-normal leading-relaxed text-zinc-700 dark:text-zinc-300` | 読みやすさ重視の本文 |
| **Caption/Label**| `text-xs font-bold uppercase tracking-widest text-zinc-400` | 計器ラベル風のメタデータ |

---

# 3. Components & UI Patterns

## Shapes & Radius
Apple製品のような「大きく滑らかな」角丸を使用。
- **Card**: `rounded-3xl` (24px)
- **Button**: `rounded-full` (Capsule)
- **Image**: `rounded-2xl` (16px)

## Shadows & Depth
- **Float**: `shadow-xl shadow-blue-900/5 dark:shadow-black/50` (青みを含んだ影で空気を表現)
- **Interaction**: `hover:-translate-y-1 transition-transform duration-300` (浮遊感)

## Buttons
### Primary Button (Aero Blue)
```html
<button class="bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all duration-200 px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-600/30">
  Start Flying
</button>
```

### Warning/CTA Button (Caution Amber)
重要な注意喚起や、強いアクション（申し込み等）に限定して使用。
```html
<button class="bg-amber-500 text-white hover:bg-amber-400 active:scale-95 transition-all px-6 py-2 rounded-full font-bold shadow-lg shadow-amber-500/20">
  Apply Now
</button>
```

## Cards (Glassmorphism & Precision)
透明感（Background）と精密さ（Border）を組み合わせたカードデザイン。

```html
<div class="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/70">
  <!-- Precision Line (Top Accent) -->
  <div class="absolute top-0 left-0 h-1 w-full bg-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>

  <h3 class="text-xl font-bold text-zinc-900 dark:text-white">Activity</h3>
  <p class="mt-2 text-zinc-600 dark:text-zinc-400">...</p>
</div>
```

---

# 4. Spacing & Layout (Mobile First)
学生のスマホ利用を最優先に設計。

- **Padding**: `px-6` (スマホでの窮屈さを回避)
- **Vertical Rhythm**: セクション間は `py-20` 以上あけ、パララックスやスクロールの余韻を楽しむ。
- **Grid**: `gap-4` (Mobile) -> `gap-8` (Desktop)

---

# 5. Accessibility
- **Contrast**: Aero Blue (`blue-600`) と白背景のコントラスト比 4.5:1 を遵守。
- **Tap Target**: モバイルでのタップ領域を `min-h-[44px]` 確保。
- **Focus**: `focus-visible:ring-2 focus-visible:ring-blue-500`
