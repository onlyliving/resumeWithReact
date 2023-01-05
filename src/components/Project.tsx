import { WorkDetailProps } from "../data";
import styled from "styled-components";

const Container = styled.li`
    margin-top: 18px;
    & > ul {
        padding-left: 14px;
        & li {
            position:relative;
            margin-bottom: 8px;
            padding-left: 16px;
            &:before {
                position:absolute;
                left:0;
                content:"-";
            }
        }
    }
`;

const Title = styled.em`
    &: before {
        ${({ theme }) => theme.common.listStyleCirCle}
    }
`;

export default ({
    data
}: {
    data: WorkDetailProps[];
}) => {
    return (
        <ul>
            {
                data.map((workItem, workIndex) => {
                    return (
                        <Container key={workIndex}>
                            <Title>{workItem.head}</Title>
                            <ul>
                                {
                                    workItem.content.map((workContent, workContentIdx) => {
                                        return (
                                            <li key={workContentIdx}>{workContent}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Container>
                    )
                })
            }
        </ul>
    )
};