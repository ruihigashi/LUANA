<div id="top"></div>

# Luana

これは美容室のウェブサイトのフロントエンドリポジトリです。

## 使用技術一覧

<p style="display: inline">
  <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [利用可能なスクリプト](#利用可能なスクリプト)

<br />

## プロジェクトについて

このプロジェクトは、ReactとTailwind CSSを使用して構築された、美容室「Luana」のウェブサイトです。

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

| 言語・フレームワーク | バージョン |
| --------------------- | ---------- |
| Node.js               | 16.17.0+   |
| React                 | 19.1.0     |
| Vite                  | 6.3.5      |
| Tailwind CSS          | 3.3.5      |

その他のパッケージのバージョンは `package.json` を参照してください。

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```
/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── MenuPage.jsx
    ├── assets/
    │   ├── react.svg
    │   └── Images/
    └── components/
        ├── About.jsx
        ├── Button.jsx
        ├── Footer.jsx
        ├── Guidance.jsx
        ├── Header.jsx
        ├── HeroSlider.jsx
        ├── IntroText.jsx
        ├── ScrollToTop.jsx
        └── SliderDots.jsx
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

1. **リポジトリをクローンします**
   ```sh
   git clone https://github.com/your_username/Luana.git
   cd Luana
   ```

2. **依存関係をインストールします**
   ```sh
   npm install
   ```

3. **開発サーバーを起動します**
   ```sh
   npm run dev
   ```
   http://localhost:5173 で開発サーバーが起動します。

<p align="right">(<a href="#top">トップへ</a>)</p>

## 利用可能なスクリプト

- `npm run dev`: 開発モードでアプリケーションを起動します。
- `npm run build`: 本番用にアプリケーションをビルドします。
- `npm run lint`: ESLintを実行してコードをチェックします。
- `npm run preview`: ビルドされたアプリケーションをローカルでプレビューします。

<p align="right">(<a href="#top">トップへ</a>)</p>