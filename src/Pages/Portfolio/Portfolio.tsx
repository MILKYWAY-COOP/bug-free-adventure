import { PortfolioStyled } from './Portfolio.styled';
import { imgs } from '../../Elements';

export default function Portfolio() {
  const { img1, img2, img3, img4, img5 } = imgs;
  const images = [img1, img2, img3, img4, img5];

  return (
    <PortfolioStyled>
      <h1>Here I show off some of my favorite shots. Enjoy!</h1>
      <div className='picsGrid'>
        {images.map((img, i) => (
          <img src={img} alt={`pic${i}`} key={i} />
        ))}
      </div>
    </PortfolioStyled>
  );
}
