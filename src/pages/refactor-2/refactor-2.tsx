import React from 'react';

import { QuestionOrAnswer } from './refactor-2.interface';

import { CenteredLayout } from '~/components';

const qOrA: QuestionOrAnswer[] = [
  {
    question: 'Do you run like a fish?',
    answer: 'Absolutely man'
  },
  {
    question: 'Have you tried to swim like a dinosaur?',
    answer: 'Nah, not my cup of tea'
  },
  {
    question: 'How are we counting from 5 to 10?',
    answer: 'Do I look like a counter?'
  },
]

const QnOrList: React.FC<QuestionOrAnswer> = ({ question, answer }) => (
  <>
    <h3 className="font-bold text-lg">{question}</h3>
    <p className="mb-2">{answer}</p>
  </>
)



const Refactor2: React.FC = () => (
  <CenteredLayout className="gap-2">
    <div className="text-3xl mb-2">See the code</div>
    {qOrA.map((item, index) => (
      <QnOrList key={index} {...item} />
    ))}
  </CenteredLayout>
);



export default Refactor2;