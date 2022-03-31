# gatsby-plugin-dev-ribbon

[![npm](https://img.shields.io/npm/v/gatsby-plugin-dev-ribbon.svg?style=for-the-badge)](https://www.npmjs.com/package/gatsby-plugin-dev-ribbon)
[![npm](https://img.shields.io/npm/dt/gatsby-plugin-dev-ribbon.svg?style=for-the-badge)](https://www.npmjs.com/package/gatsby-plugin-dev-ribbon)

Gatsbyで作成しているサイトにリボンをつけることができます。開発環境と本番環境を区別するのに便利です。

## インストール

```sh
npm install gatsby-plugin-dev-ribbon
```

または

```sh
yarn add gatsby-plugin-dev-ribbon
```

## 使い方

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-dev-ribbon`,
    options: {
      text: `develop`,
      color: `red`,
      position: `left`,
    },
  },
];
```

### オプション

`text`: 任意の文字列

`position`: left, right, left-bottom, right-bottom

`color`: red, orange, green, black
