import { SideProjectProps } from "../data";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";

interface Props {
    data: SideProjectProps[]
};

const Title = styled.h2`
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

const Project = styled.div`
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #e0e0e0;

    & > h3 {
        font-size: ${({ theme }) => theme.fontSizes.paragraph};
    }
`;

const Period = styled.li`
    margin-bottom: 8px;
    font-size: 15px;
    color: grey;
`;

const Link = styled.a`
    margin: 6px 0;
    font-size: 15px;
    font-weight: 600;
`;

export default ({
    data
}: Props) => {
    return (
        <section>
            <Title>Side Project</Title>
            {
                data.map((item, index) => {
                    return (
                        <Project key={index}>
                            <h3>{item.head}</h3>
                            <ul>
                                <Period>{item.period}</Period>
                                <li>{item.shortText}</li>
                                <li>
                                    <ul>
                                        {
                                            item.linkList.map((linkItem, linkItemIndex) => {
                                                return (
                                                    <li key={linkItemIndex}>

                                                        <Link
                                                            href={linkItem.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <FiLink style={{
                                                                verticalAlign: "middle",
                                                                color: "grey",
                                                                fontSize: "15px",
                                                                margin: "-4px 5px 0 0"
                                                            }} />
                                                            {linkItem.title}

                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li>{item.desc}</li>
                            </ul>
                        </Project>
                    )
                })
            }
        </section>
    )
};