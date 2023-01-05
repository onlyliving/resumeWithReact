import react, { useState } from "react";
import { qnaProps } from "../data";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";

interface Props {
    data: qnaProps,
    index: number,
};

const Title = styled.dt`
    position: relative;
    font-weight: 600;
    padding: 16px 16px 10px 28px;
    border-bottom: 1px solid #e4e4e4;
    cursor: pointer;
    &:before {
        content: "Q.";
        margin-right: 6px;
        font-size: 20px;
        position: absolute;
        left: 0;
        top: 12px;
    }
`;

const Content = styled.dd`
    padding: 16px 30px;
    margin: 0 auto 36px;
    background: #f8f8f8;
    white-space: pre-wrap;
`;

const Link = styled.a`
    display: block;
`;

const Dl = styled.dl`
    margin: 0;
`;

export default ({
    data,
    index
}: Props) => {

    const [isShow, setIsShow] = useState(false);
    const handleClick = () => {
        setIsShow(!isShow);
    };


    return (
        <Dl key={index}>
            <Title onClick={handleClick}>{data.question}</Title>
            {
                !isShow ? null :
                    <Content>
                        {data.answer.replaceAll("<br/>", `\n`)}
                        {
                            !data.link || data.link.length === 0 ? null :
                                data.link.map((itemLink, itemIndex) => (
                                    <Link key={itemIndex} href={itemLink.href} target="_blank">
                                        <FiLink style={{
                                            verticalAlign: "middle",
                                            color: "grey",
                                            fontSize: "15px",
                                            margin: "-4px 5px 0 0"
                                        }} />
                                        {itemLink.title}
                                    </Link>
                                ))
                        }
                    </Content>
            }
        </Dl>
    )
}