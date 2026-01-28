/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして出力する設定 (GitHub Pages用)
  output: 'export',

  // GitHub PagesではNext.jsの画像最適化サーバーが使えないため無効化
  images: {
    unoptimized: true,
  },

  // GitHub Pagesのサブディレクトリ (/リポジトリ名/) に対応させるための設定
  // ローカル開発時(npm run dev)はルート(/)で、ビルド時(Production)は /official-club-page になります。
  // Organization: Aviation-Club-KadokawaDwango, Repo: official-club-page
  basePath: process.env.NODE_ENV === 'production' ? '/official-club-page' : '',

  // URLの末尾にスラッシュを付ける設定 (/about -> /about/)
  // これにより /about/index.html が生成され、GitHub Pagesでのリンク切れを防ぎます。
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
