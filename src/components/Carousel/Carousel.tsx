import styles from './Carousel.module.scss';

interface CarouselProps {
  imagePath: string;
  previousMovie: () => void;
  nextMovie: () => void;
  title: string;
  description: string;
  timer: NodeJS.Timeout;
}

export const Carousel = ({
  imagePath,
  title,
  description,
  previousMovie,
  nextMovie,
  timer,
}: CarouselProps) => {
  return (
    <div className={styles.carousel__wrapper}>
      <img src={imagePath} className={styles.carousel__backdrop_img} />
      <div className={styles.carousel__overlay}>
        <button onClick={() => previousMovie()}>Previous</button>
        <div className={styles.carousel__overlay__details}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <button onClick={() => nextMovie()}>Next</button>
      </div>
    </div>
  );
};
