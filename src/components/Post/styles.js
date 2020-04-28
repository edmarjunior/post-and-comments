import styled from 'styled-components';

export const DivPost = styled.div`
    border: 1px solid #d3d3d3;
    padding: 20px;
    margin: 10px;
    box-shadow: #b6b3b3 0px 0px 14px;
    border-radius: 5px;
    background-color: #FFF;

    hr {
        opacity: 0.2;
    }
`;

export const DivPostProfile = styled.div`
    display: flex;

    img {
        height: 38px;
        max-width: 38px;
        min-width: 38px;
        border-radius: 25px;
    }

    div {
        margin-left: 10px;
    }
`;

export const DivPostProfileName = styled.div`
    font-weight: bold;
`;

export const DivPostDate = styled.div`
    opacity: 0.3;
    font-size: 10pt;
`;

export const DivPostContent = styled.div`
    margin: 20px 0 20px 0;
`;
