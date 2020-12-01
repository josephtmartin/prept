import React from 'react';
import { Button } from 'reactstrap';
import AppModal from '../AppModal';
import Form from '../Form';

export default function QuestionCard({
  card,
  showAnswer,
  onUpdate,
  removeFlashCard,
}) {
  return (
    <>
    <div className='d-flex flex-column m-3 w-25'>
    <h1>Question:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{card.question}</h5>
        <Button className='ml-1' id={card.firebaseKey} onClick={(e) => showAnswer(e)}>Answer</Button>
        <AppModal title={'Update Flash Card'} buttonLabel={'Update Flash Card'}>
            <Form card={card} onUpdate={onUpdate} />
        </AppModal>
        <Button className='ml-1' id={card.firebaseKey} onClick={(e) => removeFlashCard(e)}>Delete Flash Card</Button>
      </div>
    </div>
    </div>
    </>
  );
}
