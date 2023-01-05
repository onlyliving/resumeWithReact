import { ExperienceProps } from "../data";
import styled from "styled-components";
import Experience from "./Experience";


interface Props {
    data: ExperienceProps[]
};

const Title = styled.h2`
    margin-bottom: 8px;
    font-size: 40px;
`;

export default ({
    data
}: Props) => {
    return (
        <section>
            <Title>Work Experiences</Title>
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