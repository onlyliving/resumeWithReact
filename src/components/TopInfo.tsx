import styled from "styled-components";
import Margin from "./Margin";
import { IntroProps } from "../data";
import TypeIt from "typeit-react";
import Keywords from "./Keywords";
import ContactList from "./ContactList";
import ListContentBox from "./ListContentBox";

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
            <Title>

                {title}
                {/* <TypeIt
                    getBeforeInit={(instance) => {
                        return instance.type("디자인을 좋아하는 개발자, ").pause(750).type("김소희입니다.").pause(500).delete(1).pause(500).type("!");
                    }}

                    options={{
                        speed: 80,
                        // waitUntilVisible: false,
                    }}
                /> */}
            </Title>

            <Margin height={30} />

            <IntroText>{introText}</IntroText>

            <Margin height={30} />

            <ListContentBox
                title={"Contact"}
                childrens={
                    <ContactList datas={infoLink} />
                }
            />

            <Margin height={30} />

            <ListContentBox
                title={"주요 기술"}
                childrens={
                    <Keywords
                        datas={mainTechStack}
                    />
                }
            />

            <Margin height={30} />

            <ListContentBox
                title={"기술 태그"}
                childrens={
                    <Keywords
                        datas={techStack}
                    />
                }
            />

            <Margin height={30} />

        </div>
    )
}