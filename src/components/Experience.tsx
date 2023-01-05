import { ExperienceProps } from "../data";
import styled from "styled-components";
import SkillTag from "./SkillTag";
import Project from "./Project";

const WorkSection = styled.section`
    &:after {
        content: "";
        display:block;
        width: 100%;
        height: 1px;
        background-color: #e0e0e0;
        margin: 24px auto;
    }
`;

const Head = styled.h3`
    font-size: 19px;
    font-weight: 400;
    & > em {
        margin-right: 8px;
        font-weight: 600;
    }
`;

const WorkPeriod = styled.li`
    margin: 4px auto 10px auto;
    color: grey;
`;

const Retrospective = styled.li`
    margin-top: 8px;
    padding-left: 18px;
    & > em {
        margin: 10px 0 4px 0;
        font-size: 15px;
        margin-bottom: 5px;
        // font-weight: 500;
        &: before {
            content: "> "
        }
    }
`;

interface Props {
    data: ExperienceProps,
    index: number
}

export default ({
    data,
    index
}: Props) => {
    return (
        <WorkSection key={index}>
            <Head><em>{data.position}</em>{data.company}</Head>
            <ul>
                <WorkPeriod>{data.period.start}~{data.period.finish}</WorkPeriod>
                <li>
                    <SkillTag data={data.skill} />
                </li>
                <li>
                    <Project data={data.workDetail} />
                </li>
                <Retrospective>
                    <em>개인의 성장</em>
                    <p>{data.effect}</p>
                </Retrospective>
            </ul>
        </WorkSection>
    )
};