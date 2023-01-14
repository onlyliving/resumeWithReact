import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    margin-right: 6px;

        &:last-child:after {
            content:"";
        }

        &:after {
            content:", ";
        }

        & > span {
            color: grey;
        }
`;

export default ({
    datas
}: {
    datas: string[]
}) => {

    const keywords = datas.map((item, idx) => {
        const isSpecial = item.includes("(learning)");
        return (
            isSpecial ?
                <ListItem key={idx}>
                    <span>{item}</span>
                </ListItem> :
                <ListItem key={idx}>{item}</ListItem>
        )
    })

    return (
        <ul>
            {keywords}
        </ul>
    )
}