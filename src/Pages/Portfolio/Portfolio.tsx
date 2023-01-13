import { Image } from '../../Components';
import { images } from '../../Data';
import { PortfolioStyled } from './Portfolio.styled';

export default function Portfolio() {
  return (
    <PortfolioStyled>
      <h1>Here I show case some of my favorite shots. Enjoy!</h1>
      <div className='picsGrid'>
        {images.map((img, i) => (
          <Image
            src={img.url}
            alt={`pic${i}`}
            key={i}
            description={img.description}
          />
        ))}
      </div>
    </PortfolioStyled>
  );
}
