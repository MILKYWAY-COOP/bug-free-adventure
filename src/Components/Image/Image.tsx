import { ImageStyled } from './image.styled';

interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

export default function Image({ src, alt, description }: ImageProps) {
  return (
    <ImageStyled>
      <img src={src} alt={alt} />
      <div className='span'>
        <span>{description}</span>
      </div>
    </ImageStyled>
  );
}
