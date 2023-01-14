import { ReactElement } from "react";
import styled from "styled-components";

const SubTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.contentTitle};
`;

interface Props {
    title: string,
    childrens: ReactElement
}

export default ({
    title,
    childrens
}: Props) => {

    return (
        <section>
            <SubTitle>{title}</SubTitle>
            {childrens}
        </section>
    )
}