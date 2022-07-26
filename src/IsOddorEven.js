import styles from "./App.module.css";
const IsOddorEven = ({ count, checkedValue }) => {
  const oddOrEven = checkedValue % 2 === 0 ? "even" : "odd";
  // return <h3>Number is {count % 2 === 0 ? "Even" : "Odd"}</h3>;
  return (
    <h3>
      Number is{" "}
      {checkedValue && (
        <span className={oddOrEven === "even" ? styles.even : styles.odd}>
          {oddOrEven}
        </span>
      )}
    </h3>
  );
};

export default IsOddorEven;
