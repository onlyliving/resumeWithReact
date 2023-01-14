import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { experiences, otherExperiences, TIME_LINE_START_DATE } from "../data";
import { getDateDiff, periodFormatNum } from "../utils";
import Tooltip from "./Tooltip";

const TimelineBox = styled.div`
    position:relative;
    margin: 4px 0;
`;

const Timeline = styled.div`
    position:absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    padding: 13px 4px;
    cursor: pointer;
    &:after {
        content:'';
        position:absolute;
        left:0;
        top: 5px;
        width: 100%;
        height: 7px;
        display: block;
        background: #333;
        border-radius: 8px;
    }
    
    &:nth-child(2n):after {
        top: 0;
    }
`;

interface Props {
    graph1Px: number;
}
export default ({
    graph1Px
}: Props) => {
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [tooltipMsg, setTooltipMsg] = useState("");
    const [targetRef, setTargetRef] = useState<any>(null);

    const timelineRef = useRef<null[] | HTMLDivElement[]>([]);
    const timelineBoxRef = useRef<null | HTMLDivElement>(null);

    const getExperiences = [...experiences, otherExperiences[0]];




    //TODO: 아래 특정 영역 외 클릭 감지하는 부분에 대해서 더 나은 개선 필요.

    let isAnyTimelineElements = false;
    const handleCloseTooltip = useCallback((event: MouseEvent) => {
        const targetEl = event.target as HTMLElement;
        const isAnyTimelineElements = timelineRef.current.some(el => el?.contains(targetEl));


        if (!isAnyTimelineElements) setIsShowTooltip(false);

    }, [isAnyTimelineElements])

    useEffect(() => {
        if (isShowTooltip) {
            document.body.addEventListener("mouseover", handleCloseTooltip);
        }

    }, [isShowTooltip]);

    getExperiences.sort((a, b) => new Date(a.period.start) > new Date(b.period.start) ? 1 : -1);

    const Timelines = getExperiences.map((item, idx) => {
        const getYearStartPos = getDateDiff({ start: TIME_LINE_START_DATE, finish: item.period.start }).getYear;
        const getMonthStartPos = getDateDiff({ start: TIME_LINE_START_DATE, finish: item.period.start }).getMonth;
        const workStartMonths = getYearStartPos * 12 + getMonthStartPos;
        const posStartLeft = workStartMonths * graph1Px; // 한 칸에 12개 있는 그래프 그리기 위한, left 위치

        const getYearPeriod = getDateDiff({ start: item.period.start, finish: item.period.finish }).getYear;
        const getMonthPeriod = getDateDiff({ start: item.period.start, finish: item.period.finish }).getMonth;
        const periodWorkMonths = getYearPeriod * 12 + getMonthPeriod;
        const graphWith = periodWorkMonths * graph1Px;


        const handleMouseover = useCallback(() => {
            setIsShowTooltip(true);
            const periodText = getYearPeriod === 0 ? `${getMonthPeriod}개월` : `${getYearPeriod}년 ${getMonthPeriod}개월`;
            setTooltipMsg(`${item.company}\n- ${item.position}\n- ${periodText}\n- ${periodFormatNum({ start: item.period.start, finish: item.period.finish })}`);
            setTargetRef(timelineRef.current[idx])
        }, [timelineRef.current[idx]]);

        return (
            <Timeline key={idx} style={{ width: graphWith, left: posStartLeft, }} onMouseOver={handleMouseover} ref={el => timelineRef.current[idx] = el}>{item.company.replaceAll("(주)", "")}</Timeline>
        )
    });

    return (
        <>
            <TimelineBox ref={timelineBoxRef}>
                {Timelines}
            </TimelineBox>
            {
                !isShowTooltip ? null :
                    <Tooltip
                        style={{ left: targetRef ? targetRef.offsetLeft : 0 }}
                        message={tooltipMsg}
                    />
            }
        </>
    )
}