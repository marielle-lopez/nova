import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.page_container}>{children}</div>;
};
