import { InfoLinkProps } from "../data";
import { FiLink } from "react-icons/fi";

interface Props {
    datas: InfoLinkProps[]
}

export default ({
    datas
}: Props) => {

    return (
        <ul>
            {datas.map((item, index) => (
                !item.isShow ? null :
                    <li key={index}>

                        <a href={item.link} target="_blank">
                            <FiLink style={{
                                verticalAlign: "middle",
                                color: "black",
                                fontSize: "15px",
                                margin: "0 5px 0 0"
                            }} />
                            {item.desc}
                        </a>
                    </li>
            ))}
        </ul>
    )
}