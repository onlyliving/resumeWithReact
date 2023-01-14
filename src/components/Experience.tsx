import { ExperienceProps } from "../data";
import styled from "styled-components";
import SkillTag from "./SkillTag";
import Project from "./Project";
import { DateForm } from "../utils/index";

const WorkSection = styled.section`
    &:not(:last-child):after {
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
    font-size: 15px;
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
    const datePeriod = new DateForm(data.period.start, data.period.finish);

    return (
        <WorkSection key={index}>
            <Head><em>{data.position}</em>{data.company}</Head>
            <ul>
                <WorkPeriod>{datePeriod.formatNumber()}, {datePeriod.getPeriodFormatKor()}</WorkPeriod>
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