import{r as a,j as o,a as t,F as c,s as i}from"./index-785d8623.js";const d=i.dt`
    position: relative;
    font-weight: 600;
    padding: 16px 16px 10px 28px;
    border-bottom: 1px solid #333;
    cursor: pointer;
    &:before {
        content: "Q.";
        margin-right: 6px;
        font-size: 20px;
        position: absolute;
        left: 0;
        top: 12px;
    }
`,h=i.dd`
    padding: 16px 30px;
    margin: 0 auto 36px;
    background: #f7f7f7;
    white-space: pre-wrap;
`,x=i.a`
    display: block;
`,f=i.dl`
    margin: 0;
`,u=({data:n,index:l})=>{const[e,s]=a.useState(!1);return o(f,{children:[t(d,{onClick:()=>{s(!e)},children:n.question}),e?o(h,{children:[n.answer.replaceAll("<br/>",`
`),!n.link||n.link.length===0?null:n.link.map((r,p)=>o(x,{href:r.href,target:"_blank",children:[t(c,{style:{verticalAlign:"middle",color:"black",fontSize:"15px",margin:"-4px 5px 0 0"}}),r.title]},p))]}):null]},l)},g=i.h2`
    font-size: ${({theme:n})=>n.fontSizes.subTitle};
    margin-bottom: 8px;
`,m=({data:n})=>o("section",{children:[t(g,{children:"Q&A"}),t("div",{children:n.map((l,e)=>t(u,{data:l,index:e},e))})]});export{m as default};
