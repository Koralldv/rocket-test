import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: rgba(224, 100, 183);
    border: 1px solid #000;
    outline: none;
    font-size: 20px;
    border-radius: 8px;
    margin: 30px auto;
    height: 20px;
    width: 100%;
    max-width: 400px;
    display: block;
    padding: 15px 20px;
    color: #fff;
    @media (max-width: 600px) {
        max-width: 250px;
    }
`;

function InputBlock({ setSearch }) {
    return <Input type="text" placeholder="поиск" onChange={(e) => setSearch(e.target.value)} />;
}

export default InputBlock;
