const quizPageStyle = {
  color: "black",
  backgroundColor: "white",
  padding: "20px",
  fontFamily: "Arial, sans-serif",

  h1: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#4CAF50",
  },

  h2: {
    fontSize: "1.2em", // Adjusted font size for questions
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center", // Centered the questions
  },

  questionContainer: {
    maxHeight: "400px", // Adjust the max height based on your needs
    overflowY: "auto", // Make the container scrollable if content exceeds max height
  },

  button: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px 24px",
    fontSize: "1.2em", // Adjusted font size for buttons
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    marginBottom: "10px",
    transition: "background-color 0.3s ease",
    display: "block", // Made the buttons full-width
    margin: "0 auto", // Centered the buttons
  },
};

export default quizPageStyle;