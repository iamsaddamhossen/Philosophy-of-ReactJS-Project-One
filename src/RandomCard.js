import styles from "./App.module.css";

const myStyles = {
  display: "inline-block",
  width: "150px",
  height: "150px",
  backgroundColor: "#899",
  color: "#fff",
  lineHeight: "150px",
  fontWeight: "bolder",
  fontSize: "30px",
  marginRight: 10,
  textAlign: "center",
  borderRadius: "100%",
};

function RandomCard({ cardValues, setCheckedValue }) {
  return (
    <>
      {cardValues.map((cardValue, index) => {
        return (
          <div
            key={index}
            style={myStyles}
            className={styles.random}
            onClick={() => setCheckedValue(cardValue)}
          >
            {cardValue}
          </div>
        );
      })}
    </>
  );
}

export default RandomCard;
