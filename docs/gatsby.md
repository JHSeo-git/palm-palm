# Gatsby

가츠비 써보기

## 이해

### typescript

typescript를 적용하여 작성합니다.

config에도 모두 적용합니다.

실행 스크립트 순서는

1. gatsby-config.ts, gatsby-node.ts, ... 등을 babel + gatsby-package(babel gatsby preset)을 이용하여 transform
2. root path에 gatsby-\*.js로 transform되어 실제 실행은 이 파일들로 실행
3. 개발모드, 빌드, 배포모드에 따라 실행하면 됩니다.

### gatsby-cli

- gatsby-config.js: gatsby root 느낌
- gatsby-node.js: node root 느낌
- gatsby-ssr.js: ssr root 느낌

### React 17 runtime: automatic

babel react jsx(runtime: automatic) 사용을 위해 gatsby-node에 babel config에 추가합니다.

```js
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-react-jsx'),
    options: {
      runtime: 'automatic',
    },
  })
}
```

## gatsby plugin

> https://www.gatsbyjs.com/docs/plugins/

가츠비 플러그인은 가츠비 API를 구현하는 Node.js 패키지입니다.

가츠비 플러그인은 더 크고 복잡한 사이트의 경우 사이트 사용자 정의를 사이트별 플러그인으로 모듈화할 수 있습니다.

- plugin
- theme
- transformer
- source

### useful gatsby plugins

- gatsby-plugin-module-resolver
- gatsby-plugin-sharp
- gatsby-plugin-react-helmet-async

## gatsby-theme

> 가츠비 theme은 플러그인의 한 종류입니다.

`gatsby-config.js`에 포함되고 **pre-configured(사전 정의된)** 기능, data sourcing, UI 코드을 사이트에 추가하는 플러그인 유형입니다.
가츠비 theme으로 default config를 구성하세요.
(기능 공유, 데이터 소싱, 디자인)

## gatsby-transformer

## gatsby-source
