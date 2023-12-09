import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';

const my_questions = [
  {
    id: 1,
    question: "What is the capital of Japan?",
    answers: [
      { answer: "Tokyo", isCorrect: true },
      { answer: "Seoul", isCorrect: false },
      { answer: "Beijing", isCorrect: false },
      { answer: "Bangkok", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { answer: "William Shakespeare", isCorrect: true },
      { answer: "Jane Austen", isCorrect: false },
      { answer: "Charles Dickens", isCorrect: false },
      { answer: "Homer", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is the largest mammal on Earth?",
    answers: [
      { answer: "Elephant", isCorrect: false },
      { answer: "Blue Whale", isCorrect: true },
      { answer: "Giraffe", isCorrect: false },
      { answer: "Hippopotamus", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    answers: [
      { answer: "Venus", isCorrect: false },
      { answer: "Mars", isCorrect: true },
      { answer: "Jupiter", isCorrect: false },
      { answer: "Saturn", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    answers: [
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Leonardo da Vinci", isCorrect: true },
      { answer: "Claude Monet", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { answer: "China", isCorrect: false },
      { answer: "Japan", isCorrect: true },
      { answer: "South Korea", isCorrect: false },
      { answer: "Vietnam", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the largest ocean on Earth?",
    answers: [
      { answer: "Atlantic Ocean", isCorrect: false },
      { answer: "Indian Ocean", isCorrect: false },
      { answer: "Arctic Ocean", isCorrect: false },
      { answer: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "Who is known as the 'Father of Computer Science'?",
    answers: [
      { answer: "Alan Turing", isCorrect: true },
      { answer: "Bill Gates", isCorrect: false },
      { answer: "Steve Jobs", isCorrect: false },
      { answer: "Mark Zuckerberg", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Which gas do plants absorb during photosynthesis?",
    answers: [
      { answer: "Oxygen", isCorrect: false },
      { answer: "Carbon Dioxide", isCorrect: true },
      { answer: "Nitrogen", isCorrect: false },
      { answer: "Hydrogen", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "In which year did Christopher Columbus reach the Americas?",
    answers: [
      { answer: "1492", isCorrect: true },
      { answer: "1510", isCorrect: false },
      { answer: "1600", isCorrect: false },
      { answer: "1625", isCorrect: false },
    ],
  },
];

class Quiz extends React.Component {
  state = {
    score: 0,
    count: 0,
  };

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
      count: prevState.count + 1,
    }));
    alert("Correct! You're doing great!"); // Updated alert message
  };

  dontIncrementScore = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    alert("Oops! That's not correct. Keep trying!"); // Updated alert message
  };

  handleSubmit = () => {
    my_state.my_score = this.state.score;
    my_state.my_count = this.state.count;

    alert(`Total score: ${this.state.score}/${this.state.count}`);
  };

  
render() {
  return (
    <div style={quizPageStyle}>
      <h1>We love Weekly Quizes</h1>
      <div style={quizPageStyle.questionContainer}>
        {my_questions.map((quest) => (
          <div key={quest.id} style={{ textAlign: 'center' }}>
            <h2>{quest.question}</h2>
            {quest.answers.map((ans) => (
              <div key={ans.answer} style={{ display: 'inline-block', margin: '5px' }}>
                <label>
                  <input
                    type="radio"
                    name={quest.id}
                    onClick={ans.isCorrect ? this.incrementScore : this.dontIncrementScore}
                    value={ans.isCorrect}
                  />
                  {ans.answer}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      <button className="submit-button" onClick={this.handleSubmit}>
        Finish Quiz
      </button>
    </div>
  );
}


}

export default Quiz;