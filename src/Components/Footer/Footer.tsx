import Socials from '../Socials/Socials';
import { FooterStyled } from './Footer.styled';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      <Socials />
      <p>&copy; {year} - All Rights Reserved</p>
    </FooterStyled>
  );
}
