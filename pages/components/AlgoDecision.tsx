import React, { useState } from 'react';

function AlgoDecision() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  
  const steps = [
    { question: "Quelle décision veux-tu prendre ?", key: "titre" },
    { question: "Quelles sont les différents choix qui s'offrent à toi (séparés par une ,)", key: "optionsPossibles" },
    { question: "Quels sont les critères de décision (séparés par une ,) ?", key: "criteresDecision" },
    // ... Ajoutez d'autres étapes pour les critères et les notes
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Effectuer les calculs et afficher les résultats
    }
  };

  return (
    <div>
      <h2>Algorithme de Prise de Décision</h2>
      {step < steps.length && (
        <div>
          <p>Bot: {steps[step].question}</p>
          <input
            type="text"
            name={steps[step].key}
            value={responses[steps[step].key] || ""}
            onChange={handleInputChange}
          />
          <button onClick={handleNextStep}>Suivant</button>
        </div>
      )}
      {step === steps.length && (
        <div>
          {/* Afficher les résultats ici */}
        </div>
      )}
    </div>
  );
}

export default AlgoDecision;
