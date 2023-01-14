import styled from "styled-components";

interface Props {
    style: any;
    message: string;
}

const Tooltip = styled.div`
    position: absolute;
    top: -124px;
    z-index: 999;
    max-width: 300px;
    padding: 16px;
    border: 1px solid #333;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff;
    white-space: pre;
    &:before {
        content: "";
        z-index: 1;
        border-color: #fff transparent;
        border-style: solid;
        border-width: 9px 13px 0px 0px;
        position: absolute;
        left: 0;
        bottom: -7px;
        width: 0;
        
    }
    &:after {
        content: "";
        z-index: 0;
        border-color: #333 transparent;
        border-style: solid;
        border-width: 9px 13px 0px 0px;
        position: absolute;
        left: -1px;
        bottom: -9px;
        width: 0;
       
    }
    
`;

export default ({
    style,
    message,
}: Props) => {

    return (
        <Tooltip style={style}>
            {message}
        </Tooltip>
    )
}