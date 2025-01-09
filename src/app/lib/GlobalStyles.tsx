'use client';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
   ${normalize}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #fff; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  ul, ol {
    list-style: none;
  }

  
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;
