import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'src/colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CategoryName = styled.h2`
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.light};`
      : `color: ${colors.secondaryDark};`}
`;

export const ListCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`;

export const DrinkList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const DrinksItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;

export const DrinkPhoto = styled.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    lightgray 50% / cover no-repeat;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DrinkTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.light};`
      : `color: ${colors.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledLinkToDrinkPage = styled(Link)`
  padding: 0;
  font-weight: 500;
  transition: 250ms ease;
  ${({ theme }) =>
    theme === 'dark'
      ? `color: rgba(243, 243, 243, 0.5);`
      : `color: rgba(10, 10, 17, 0.50);`}

  &:hover {
    ${({ theme }) =>
      theme === 'dark'
        ? `color: ${colors.light};`
        : `color: ${colors.secondaryDark};`}
  }
`;

export const StyledLinkToDrinksPage = styled(Link)`
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.secondaryDark};`
      : `color: ${colors.light};`};
  ${({ theme }) =>
    theme === 'dark'
      ? `background-color: ${colors.light};`
      : `background-color: ${colors.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({ theme }) =>
      theme === 'dark'
        ? `color: ${colors.light};`
        : `color: ${colors.secondaryDark};`}
    ${({ theme }) =>
      theme === 'dark'
        ? `background-color: ${colors.secondaryDark};`
        : `background-color: ${colors.light};`}
  }
`;
