import styles from './CarouselContainer.module.scss';
import { useState } from 'react';
import { Carousel } from '../../components/Carousel/Carousel';

interface CarouselContainerProps {
  imagePaths: string[];
}

export const CarouselContainer = ({ imagePaths }: CarouselContainerProps) => {
  const [index, setIndex] = useState<number>(0);

  console.log(imagePaths);

  return (
    <div className={styles.featured_img_container}>
      <button
        onClick={() =>
          index === 0 ? setIndex(imagePaths.length - 1) : setIndex(index - 1)
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          index === imagePaths.length - 1 ? setIndex(0) : setIndex(index + 1)
        }
      >
        Next
      </button>
      <Carousel imagePath={imagePaths[index]} />
    </div>
  );
};
