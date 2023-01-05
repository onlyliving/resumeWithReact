import styled from "styled-components";
import { InfoLinkProps } from "../data";
import { FiLink } from "react-icons/fi";

const Container = styled.section`
    & > ul > li {
        display: flex;
        flex-direction: row;
        align-items: center;
        &: before {
        }
        & > em {
            margin: 0 8px;
            font-weight: bold;
            &: after {
                content:" : "
            }
        }
    }
`;

const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.contentTitle};
`;

const Link = styled.a`
    &:after {
        // content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #b4b4b4;
    }
`;

interface Props {
    infoLinkData: InfoLinkProps[]
}
export default ({
    infoLinkData
}: Props) => {
    return (
        <Container>
            <Title>Contact</Title>
            <ul>
                {infoLinkData.map((item, index) => (
                    !item.isShow ? null :
                        <li key={index}>

                            <Link href={item.link} target="_blank">
                                <FiLink style={{
                                    verticalAlign: "middle",
                                    color: "grey",
                                    fontSize: "15px",
                                    margin: "0 5px 0 0"
                                }} />
                                {item.desc}
                            </Link>
                        </li>
                ))}
            </ul>
        </Container>
    )
};