import { createGlobalStyle } from 'styled-components';

export const GlobalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1614168841041'); /* IE9 */
  src: url('./iconfont.eot?t=1614168841041#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1614168841041') format('woff'),
  url('./iconfont.ttf?t=1614168841041') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1614168841041#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`