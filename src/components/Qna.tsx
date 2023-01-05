import styled from "styled-components";
import { qnaProps } from "../data";
import UseDropdownMenu from "./useDropdownMenu";

interface Props {
    data: qnaProps[];
}

const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    margin-bottom: 8px;
`;

export default ({
    data
}: Props) => {

    return (
        <section>
            <Title>Q&A</Title>
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <UseDropdownMenu
                                data={item}
                                index={index}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}