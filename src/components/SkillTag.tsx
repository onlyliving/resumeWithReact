import styled from "styled-components";

interface Props {
    data: string[]
}

const Tag = styled.li`
    display: inline-block;
    margin: 0 6px 6px 0;
    padding: 4px 10px 3px;
    font-size: 13px;
    font-weight: 500;
    background-color: #333;
    border-radius: 22px;
    color:#fff;
`;

export default ({
    data
}: Props) => {
    const List = data.map((item, index) => (
        <Tag key={index}>{item}</Tag>
    ));

    return (
        <ul>
            {List}
        </ul>
    )
}

