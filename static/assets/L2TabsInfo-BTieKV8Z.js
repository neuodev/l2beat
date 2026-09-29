import{t as e}from"./index-BzWKptsi.js";import{t}from"./TabInfoWithDrawer-BbnJdcT0.js";var n=e();function r(){return(0,n.jsx)(t,{title:`What are rollups?`,content:`Rollups are L2s that periodically post state commitments to Ethereum.
        These commitments are validated by either Validity Proofs or are
        accepted optimistically and can be challenged via Fraud Proof mechanism
        within a certain fraud proof window. Additionally L2 data is also posted
        to Ethereum, hence there are no additional trust assumptions introduced.`})}function i(){return(0,n.jsx)(t,{title:`What are Validiums and Optimiums?`,content:`Validiums and Optimiums are L2s that, similarly to Rollups,
      periodically post state commitments to Ethereum that are validated by it,
      however data is not posted to Ethereum. This means that additional trust
      assumptions, external to Ethereum, are introduced to prevent data
      withholding attacks.`})}function a(){return(0,n.jsx)(t,{title:`What are Others?`,content:`Others are L2s that either lack a working proof system or
      don't provide sufficient external DA guarantees (i.e. at least 5
      independent attesters, a high enough threshold, or a proper DA bridge). To be listed in this category, the L2 must enshrine deposits from L1.`})}export{r as n,i as r,a as t};