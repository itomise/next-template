/* eslint-disable prettier/prettier */
import { css } from '@emotion/react'
import index from './index'

const reset = css`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,
  samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,
  article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,  aside,  details,  figcaption,  figure,  footer,  header,  hgroup,  menu,nav, section {
    display: block;
  }
  ol,ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }
`

const fontNoto = css`
  @font-face {
    font-family: 'NotoSansJPLight';
    font-style: normal;
    font-weight: 300;
    src: url('/font/NotoSansJP/NotoSansJP-Light.woff') format('woff'),
      url('/font/NotoSansJP/NotoSansJP-Light.woff2') format('woff2'),
      url('/font/NotoSansJP/NotoSansJP-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'NotoSansJPRegular';
    font-style: normal;
    font-weight: 400;
    src: url('/font/NotoSansJP/NotoSansJP-Regular.woff') format('woff'),
      url('/font/NotoSansJP/NotoSansJP-Regular.woff2') format('woff2'),
      url('/font/NotoSansJP/NotoSansJP-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'NotoSansJPMedium';
    font-style: normal;
    font-weight: 500;
    src: url('/font/NotoSansJP/NotoSansJP-Medium.woff') format('woff'),
      url('/font/NotoSansJP/NotoSansJP-Medium.woff2') format('woff2'),
      url('/font/NotoSansJP/NotoSansJP-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'NotoSansJPBold';
    font-style: normal;
    font-weight: 700;
    src: url('/font/NotoSansJP/NotoSansJP-Bold.woff') format('woff'),
      url('/font/NotoSansJP/NotoSansJP-Bold.woff2') format('woff2'),
      url('/font/NotoSansJP/NotoSansJP-Bold.otf') format('opentype');
  }
`

const globalStyles = css`
  ${reset}

  /* ${fontNoto} */

  html {
    font-family: 'Helvetica Neue', Arial,'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: left;
    width: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
  }
  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  input, button, select, textarea {
    font-family: inherit;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
    font-family: inherit;
    -webkit-appearance: none;
  }
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    resize: none;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
  }
  ${index.pc(css`
    .sp-only {
      display: none !important;
    }
  `)}
  ${index.sp(css`
    .pc-only {
      display: none !important;
    }
  `)}
`

export { globalStyles }
