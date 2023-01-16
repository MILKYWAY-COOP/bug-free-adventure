import { Image } from '../../Components';
import { images } from '../../Data';
import { WallpapersStyled } from './Wallpapers.styled';

export default function Wallpapers() {
  return (
    <WallpapersStyled>
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
    </WallpapersStyled>
  );
}
