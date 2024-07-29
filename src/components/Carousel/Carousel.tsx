import styles from './Carousel.module.scss';

interface CarouselProps {
  imagePath: string;
}

export const Carousel = ({ imagePath }: CarouselProps) => {
  return (
    <>
      <img src={imagePath} className={styles.featured_img} />
    </>
  );
};
