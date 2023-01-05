import styled from "styled-components";

const Technologies = styled.section`
    & > ul > li {
            margin-bottom: 9px;
        }
    }
`;

interface Props {
    mainTechStack: string[];
    techStack: string[];
};

interface ListProps {
    title: string;
    content: string;
}

const Title = styled.em`
    font-size: ${({ theme }) => theme.fontSizes.contentTitle};
`;

const List = ({
    title,
    content
}: ListProps) => {
    return (
        <li>
            <Title>{title}</Title>
            <p>{content}</p>
        </li>
    )
}

export default ({
    mainTechStack,
    techStack
}: Props) => {
    return (
        <Technologies>
            <ul>
                <List
                    title={"주요 기술"}
                    content={mainTechStack.join(",")}
                />
                <List
                    title={"기술 태그"}
                    content={techStack.join(",")}
                />
            </ul>
        </Technologies>
    )
};