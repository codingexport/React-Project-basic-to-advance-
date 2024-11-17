import React, { useState } from 'react';
import { questions } from './FaqComponanet/FaqQuestion';

export const App = () => {
  let [showAns, setShowAns] = useState(null)
  return (
    <>
      <div className="app">
        <div>
          <h1>Frequently Asked Questions (FAQs)</h1>
          <div className='Faqouter'>
            <div className="faqItems">
              {
                questions.map((faqItem) => {
                  return (
                    <div className="faqItems" key={faqItem.id}>
                      <h2 onClick={() => setShowAns(faqItem.id)}>{faqItem.question}</h2>
                      <p className={showAns == faqItem.id ? 'activeAns' : ''}>{faqItem.answer}</p>
                    </div>
                  );
                })
              }


              <h2>Popular Article</h2>
              <p>Full Stack  Development involes Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed pariatur alias ad, totam, numquam doloremque voluptate minus officiis obcaecati expedita itaque veniam nihil excepturi ipsa dignissimos, beatae consequuntur corrupti.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
