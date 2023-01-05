// const fontSize = {
//     xs: "0.5rem",
//     sm: "0.75rem",
//     base: "1rem",
//     md: "1.25rem",
//     lg: "1.5rem",
// };

const fontSizes = {
    title: "64px",
    subTitle: "34px",
    contentTitle: "20px",
    paragraph: "16px",
};

const common = {
    flexCenter: `
        display: flex;
        justify-contents: center;
        align-items: center;
  `,
    flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-contents: center;
        align-items: center;
  `,
    listStyleCirCle: `
        content:"";
        width: 4px;
        height: 4px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 6px;
        vertical-align: middle;
        background-color: #989898;
    `,
    subIcon: `
        vertical-align: "middle",
        color: "grey",
        font-size: "15px",
        margin: "2px 5px 0 0"
    `,
};

const windowSize = {
    small: `(max-width: '600px')`,
    base: `(max-width: '768px')`,
    large: `(max-width: '1024px')`,
};

const theme = {
    windowSize,
    fontSizes,
    common,
};

export default theme;
