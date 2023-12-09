import React, { useState } from 'react';
import "../index.css";

const RateOurQuiz = () => {
  const [rating, setRating] = useState(null);

  const handleRating = (score) => {
    if (score >= 4) {
      alert(`Thank you for your feedback! We worked hard on this quiz.`);
    } else if (score >= 1 && score <= 2) {
      alert(`We appreciate your feedback. We will work harder to improve.`);
    } else {
      alert(`You rated the quiz ${score}/5. Thank you for your feedback!`);
    }
    // You can add additional logic here, such as sending the rating to a server.
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <br />
        <div>
          <h1 className="text-3xl font-bold underline">Rate Our Quiz!</h1>
          <p>Give us a score from 1 to 5:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleRating(score)}
                style={{
                  fontSize: '1.5em', // Adjust the font size as needed
                  margin: '0.5em',
                  padding: '1em',
                  backgroundColor: 'green',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {score}
              </button>
            ))}
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default RateOurQuiz;
