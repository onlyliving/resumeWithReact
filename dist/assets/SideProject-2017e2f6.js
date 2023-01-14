import{j as n,a as r,F as s,s as o}from"./index-ee3ee20a.js";const a=o.h2`
    margin-bottom: 8px;
    font-size: ${({theme:e})=>e.fontSizes.subTitle};
`,c=o.div`
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #333;
    border-radius: 4px;

    & > h3 {
        font-size: ${({theme:e})=>e.fontSizes.paragraph};
    }
`,p=o.li`
    margin-bottom: 8px;
    font-size: 15px;
    color: grey;
`,h=o.a`
    margin: 6px 0;
    font-size: 15px;
    font-weight: 600;
`,f=({data:e})=>n("section",{children:[r(a,{children:"Side Project"}),e.map((i,l)=>n(c,{children:[r("h3",{children:i.head}),n("ul",{children:[r(p,{children:i.period}),r("li",{children:i.shortText}),r("li",{children:r("ul",{children:i.linkList.map((t,d)=>r("li",{children:n(h,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:[r(s,{style:{verticalAlign:"middle",color:"black",fontSize:"15px",margin:"-4px 5px 0 0"}}),t.title]})},d))})}),r("li",{children:i.desc})]})]},l))]});export{f as default};
