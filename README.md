# Next Template

## Node Version
v12.18.4

## Usage
```
yarn

yarn dev

yarn generate
```

# Component Design
参考は[こちら](https://zenn.dev/sterashima78/articles/0cf4bb52112c7b)

- src
  - components : 基本的に stores にアクセスしない、静的な部品
    - atoms : UIを構成する最小単位
    - molecules : atomsを組み合わせて、具体性を持った部品
  - containers : 汎用性を考えなくて良い、レイアウトやコンポーネント
    - organisms : atoms と molecules を組み合わせた、汎用性を考えなくて良い部品
    - pages : 実際にページに組み込む、レイアウトなども含める最終的なUI
    - templates : 主に _app.js で使用する、全体のレイアウトや機能を実装する部分
  - hooks : 汎用的な hooks
  - pages : ページ
  - interfaces : 型
  - store : 状態管理
  - styles : スタイル
  - utils : その他の処理
