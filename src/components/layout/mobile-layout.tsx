import styles from "./mobile-layout.module.scss";
export const MobileLayout: React.FC = ({ children, ...props }) => {
  return (
    <div className="main">
      <div {...props} className={styles.layout}>
        {children}
      </div>
    </div>
  );
};
