import { styled } from "styled-components";

export const HeaderBox = styled.div`
  // width: 100%; //레이아웃 때문이 잠깐 주석처리 해놓았습니다 . 김태현
  height: calc(5em - 0.063em); // 기본 web
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  padding: 0 3.75em;
  box-sizing: content-box;
  line-height: 0;
  transition: top 0.1s ease 0s;
  border-bottom: 0.063em solid rgb(234, 237, 239);

  @media (max-width: 768px) {
    height: calc(3.125em - 0.063em); // mobile
    padding: 0.1em;
    display: flex;
    justify-content: space-around;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 3.75em;
  z-index: 9999;
  grid-column: 1;
  @media (max-width: 768px) {
    position: static;
  }
`;

export const SearchBox = styled.div`
  display: inline-flex;
  grid-column: 2;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  grid-column: 3;
`;

export const SignBox = styled.div`
  width: 9.15em;
  height: 2.5em;
  box-sizing: border-box;
  margin-top: 0.438em;
  @media (max-width: 768px) {
    width: 5.5em;
    margin-top: 1.2em;
    margin-right: 0;
  }
`;

export const SignBtn = styled.button`
  border: none;
  background: none;
  margin-top: 0.32em;
  height: 49%;
  font-size: 0.875em;
  color: #2f3438;
  border-right: 0.063em solid #eaedef;
  line-height: 1.125em;
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const PostButtonBox = styled.div`
  width: ${({ width }) => width || "auto"};
`;

export const iconStyle = {
  marginRight: "0.5em",
  paddingLeft: "0.875em",
  color: "#2f3438",
};
