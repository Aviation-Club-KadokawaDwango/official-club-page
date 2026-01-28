# Official Club Website Design Rules

## 0. Design Philosophy
Based on Apple's Human Interface Guidelines (Clarity, Deference, Depth).

- **Clarity (明瞭さ)**: コンテンツを最優先し、テキストは読みやすく、アイコンは正確で明瞭に。
- **Deference (尊重)**: 流動的なモーションと鮮明で美しいインターフェイスにより、コンテンツが主役となるデザイン。
- **Depth (奥行き)**: 視覚的なレイヤーと半透明効果（Glassmorphism）を用いて、階層構造とリアリティを表現。

---

## 1. Color System
洗練されたモノクロームをベースに、機能的な意味を持つアクセントカラーを使用。

### Base Colors (Light / Dark Mode 対応)
| Role | Class (Light) | Class (Dark) | Description |
| --- | --- | --- | --- |
| **Background** | `bg-white` | `dark:bg-zinc-950` | メイン背景（純粋な白/深い黒） |
| **Surface (Card)** | `bg-zinc-50` | `dark:bg-zinc-900` | コンテンツの背景エリア |
| **Surface (Glass)**| `bg-white/80` | `dark:bg-zinc-900/80` | すりガラス効果用 (`backdrop-blur-md` 必須) |

### Text Colors
| Role | Class (Light) | Class (Dark) | Description |
| --- | --- | --- | --- |
| **Primary** | `text-zinc-900` | `dark:text-zinc-50` | 見出し、本文 |
| **Secondary** | `text-zinc-500` | `dark:text-zinc-400` | 副題、補足情報 |
| **Tertiary** | `text-zinc-400` | `dark:text-zinc-600` | プレースホルダー、無効なテキスト |

### Accent Colors (Action)
| Role | Class | Description |
| --- | --- | --- |
| **Primary Brand** | `blue-600` (text/bg) | リンク、主要ボタン (Apple System Blue風) |
| **Destructive** | `red-500` | 削除、警告 |
| **Success** | `green-500` | 完了、成功 |

---

## 2. Typography
Appleシステムフォントに近い、可読性の高いサンセリフ体を使用。
`tracking-tight` を使用して、モダンで引き締まった印象を与える。

### Font Family
- Default Tailwind Sans (`font-sans`):
  - SF Pro Display, SF Pro Text (macOS/iOS)
  - Segoe UI (Windows)
  - Roboto (Android)

### Type Scale
| Element | Tailwind Classes | Description |
| --- | --- | --- |
| **Display (Hero)** | `text-5xl md:text-7xl font-bold tracking-tight leading-tight` | トップページのメインコピー |
| **H1** | `text-4xl font-semibold tracking-tight` | ページタイトル |
| **H2** | `text-2xl font-semibold tracking-tight` | セクション見出し |
| **H3** | `text-xl font-medium tracking-tight` | サブセクション見出し |
| **Body (Main)** | `text-base font-normal leading-relaxed text-zinc-900 dark:text-zinc-50` | 本文。読みやすさ重視 |
| **Caption** | `text-sm font-medium text-zinc-500` | 注釈、メタデータ |

---

## 3. Spacing & Layout
広々とした余白（Whitespace）を取り、コンテンツに呼吸をさせる。

- **Section Padding**: `py-24` (96px) または `py-32` (128px)
- **Container**: `max-w-5xl mx-auto px-6` (コンテンツ幅を広げすぎない)
- **Grid Gap**:
  - Cards: `gap-6` or `gap-8`
  - List items: `space-y-4`

---

## 4. Components

### Radius (Corner Radius)
Apple製品のような「大きく滑らかな」角丸を採用。
- **Cards**: `rounded-3xl` (24px)
- **Buttons**: `rounded-full` (カプセル型)
- **Images/Media**: `rounded-2xl` (16px)

### Shadows & Depth
柔らかく拡散する影で浮遊感を演出。
- **Small (Hover)**: `shadow-md`
- **Large (Float)**: `shadow-xl shadow-zinc-200/50 dark:shadow-black/50`

### Buttons
#### Primary Button
背景色で塗りつぶし、アクションを強調。クリック時に少し縮小するアニメーション。
```html
<button class="bg-zinc-900 text-white hover:bg-zinc-800 active:scale-95 transition-all duration-200 px-6 py-3 rounded-full font-medium text-sm shadow-lg shadow-zinc-900/20 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
  Join Now
</button>
```

#### Secondary Button
背景は透明または薄いグレー。
```html
<button class="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-95 transition-all duration-200 px-6 py-3 rounded-full font-medium text-sm dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
  Learn More
</button>
```

### Cards (Glassmorphism)
背景画像を透かすような表現を使用する場合はこれを使用。
```html
<div class="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800 rounded-3xl p-8 shadow-xl">
  <!-- Content -->
</div>
```

---

## 5. Animation (Motion)
瞬時に反応し、物理法則を感じさせる自然な動き。

- **Transitions**: `transition-all duration-300 ease-out`
- **Hover Effects**:
  - `hover:-translate-y-1` (わずかに浮く)
  - `hover:scale-105` (わずかに拡大 - 画像など)

---

## 6. Accessibility
- **Contrast**: テキストと背景のコントラスト比 4.5:1 以上を確保。
- **Focus State**: キーボード操作時のフォーカスリングを明確に。
  - `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`
- **Click Area**: タップ領域は最低 44x44pt を確保 (パディングで調整)。
