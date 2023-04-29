import styles from "./mobile-layout.module.scss";

export const MobileLayout: React.FC = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.layout}>
      <h1>NICONITE</h1>
      {children}
    </div>
  );
};
