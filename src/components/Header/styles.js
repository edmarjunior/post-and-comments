import styled from "styled-components";

export const DivHeader = styled.div`
    background: #3b5998;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    font-size: 15pt;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;

    span {
        padding-right: 20px;
        cursor: pointer;
    }
`;