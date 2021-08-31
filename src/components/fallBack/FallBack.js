import styles from "./FallBack.module.scss";

const FallBack = (props) => {
  return (
    <section className={styles.fallback}>
      <div>{props.children}</div>
    </section>
  );
};

export default FallBack;
