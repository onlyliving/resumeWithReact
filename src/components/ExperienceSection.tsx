import { ExperienceProps } from "../data";
import styled from "styled-components";
import Experience from "./Experience";

interface Props {
    data: ExperienceProps[];
    title: string;
};

const Title = styled.h2`
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

export default ({
    data,
    title
}: Props) => {
    return (
        <section>
            <Title>{title}</Title>
            {
                data.map((item, index) => {
                    return (
                        <Experience
                            data={item}
                            index={index}
                            key={index}
                        />
                    )
                })
            }
        </section>
    )
}