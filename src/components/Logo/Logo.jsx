import { StyledLogoLink, LogoSvg } from './Logo.styled';
import { colors } from '../../colors';

const Logo = ({ theme }) => {
  return (
    <StyledLogoLink to="/home" theme={theme}>
      {/* <LogoSvg theme={theme}>
            <use href={`${sprite}#icon-logo`} />
          </LogoSvg> */}
      <LogoSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        fill={
          `${theme}` === 'dark' ? `${colors.light}` : `${colors.secondaryDark}`
        }
      >
        <path d="M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z" />
      </LogoSvg>
      Drink Master
    </StyledLogoLink>
  );
};

export default Logo;
