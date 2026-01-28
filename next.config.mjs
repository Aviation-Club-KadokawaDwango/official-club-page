/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして出力する設定 (GitHub Pages用)
  output: 'export',

  // GitHub PagesではNext.jsの画像最適化サーバーが使えないため無効化
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // 【重要】GitHubのリポジトリ名がURLに含まれる場合（例: https://username.github.io/repo-name/）
  // 以下のbasePathのコメントアウトを外し、リポジトリ名を設定してください。
  // カスタムドメインを使用する場合や、ユーザーサイト(username.github.io)の場合は設定不要です。

  // basePath: '/official-page',
};

export default nextConfig;
