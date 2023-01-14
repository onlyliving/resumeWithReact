import styled from "styled-components";

import TimelineGraph from "./TimelineGraph";
import { TIME_LINE_START_DATE } from "../data";

const TimelineLabelBox = styled.ul`
    display: flex;
    flex-direction: row;
`;

const TimelineLabel = styled.li`
    position:relative;
    padding: 0 6px;
    font-size: 13px;
    color: #000;
    &:before {
        content:"";
        width: 1px;
        height: 15px;
        background-color: #000;
        position: absolute;
        left: 0;
        top: 4px;
    }
`;


const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.contentTitle};
`;

const ContentsBox = styled.section`
    margin: 8px 0 50px 0;
    position:relative;
`

export default () => {
    const GRAPH_WIDTH = window.visualViewport && window.visualViewport.width <= 640 ? 320 : 620;

    const startDate = new Date(TIME_LINE_START_DATE);
    const startYear = startDate.getFullYear();
    const currentYear = new Date().getFullYear();
    const diff = currentYear - startYear; // 간격 그래프
    const graph1Px = GRAPH_WIDTH / diff / 12;
    const years = new Array(diff).fill(startYear).map((item, idx) => item + idx);

    const TimelineLabels = years.map((item, idx) => (
        <TimelineLabel key={idx} style={{ width: (GRAPH_WIDTH / years.length) }}>
            {item}
        </TimelineLabel>
    ));

    return (
        <div>
            <Title>개발 타임 라인</Title>
            <ContentsBox>
                <TimelineLabelBox>
                    {TimelineLabels}
                </TimelineLabelBox>
                <TimelineGraph
                    graph1Px={graph1Px}
                />
            </ContentsBox>

        </div>
    )
};