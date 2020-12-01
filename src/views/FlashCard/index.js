import React from 'react';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';
import questionData from '../../helpers/data/questionData';
import AppModal from '../../components/AppModal';
import Form from '../../components/Form';

export default class FlashCard extends React.Component {
  state = {
    flashCards: [],
    currentCard: {},
    answer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      questionData.getQuestions().then((response) => {
        this.setState({
          flashCards: response,
          currentCard: response[0],
        });
      });
    } else {
      const { flashCards } = this.state;
      // the nextQuestion variable is a num not an obj
      const nextQuestion = flashCards.indexOf(this.state.currentCard) + 1;
      this.setState({
        answer: false,
        currentCard: flashCards[nextQuestion] || flashCards[0],
      });
    }
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData}/>;
    return (
        <div>
          <AppModal title={'Create Flash Card'} buttonLabel={'Create Flash Card'}>
              <Form onUpdate={this.loadData}/>
          </AppModal>
          <div className="flash-card d-flex flex-wrap justify-content-center">
            {answer === false ? showQuestion() : showAnswer()}
          </div>
        </div>
    );
  }
}
