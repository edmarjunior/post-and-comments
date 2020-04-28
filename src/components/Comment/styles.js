import styled from 'styled-components';

export const DivComment = styled.div`
    display: flex;
    margin-top: 10px;

    img {
        height: 38px;
        max-width: 38px;
        min-width: 38px;
        border-radius: 25px;
    }
`;

export const CommentContent = styled.div`
    margin-left: 5px;
    background: #f0eded;
    border-radius: 19px;
    padding: 10px;

    span {
        margin-right: 5px;
        font-weight: bolder;
    }
`;
