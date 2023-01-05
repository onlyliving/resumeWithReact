import styled from "styled-components";

interface Props {
    data: string[]
}

const Tag = styled.li`
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 5px 8px 3px;
    font-size: 14px;
    font-weight: 500;
    background: #eaeaea;
    border-radius: 22px;
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

