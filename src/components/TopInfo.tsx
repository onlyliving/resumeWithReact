import styled from "styled-components";
import Margin from "../Margin";
import Contact from "./Contact";
import TeckStack from "./TechStack";
import { IntroProps } from "../data";

const Title = styled.h1`
    line-height: 1.2;
    font-size: ${({ theme }) => theme.fontSizes.title};

    @media ( max-width: ${({ theme }) => theme.deviceBreakPoint.tablet}) {
        font-size: 42px;
    }

`;

const IntroText = styled.p`
    font-size: 24px;

    @media ( max-width: ${({ theme }) => theme.deviceBreakPoint.tablet}) {
        font-size: 22px;
    }
`;


interface Props {
    data: IntroProps
}

export default ({
    data
}: Props) => {
    const { title, introText, infoLink, mainTechStack, techStack } = data;

    return (
        <div>
            <Title>{title}</Title>

            <Margin height={36} />

            <IntroText>{introText}</IntroText>

            <Margin height={36} />

            <Contact
                infoLinkData={infoLink}
            />

            <Margin height={36} />

            <TeckStack
                mainTechStack={mainTechStack}
                techStack={techStack}
            />
        </div>
    )
}