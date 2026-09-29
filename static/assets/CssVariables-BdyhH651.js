import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,t as n}from"./index-BzWKptsi.js";var r=e(t()),i=n(),a={light:``,dark:`.dark`};function o({variables:e,children:t}){let n=(0,r.useId)(),o=!!t,s=(0,i.jsx)(`style`,{dangerouslySetInnerHTML:{__html:Object.entries(a).map(([t,r])=>`
  ${o?`[data-css-vars="${n}"]${r}`:`html${r}`} {
  ${Object.entries(e).map(([e,n])=>{let r=typeof n==`string`&&t===`light`?n:n[t];return r?`  --${e}: ${r};`:null}).join(`
`)}
  }
  `).join(`
`)}});return o?(0,i.jsxs)(`div`,{"data-css-vars":n,children:[s,t]}):s}export{o as t};