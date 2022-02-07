import React, { useState, useEffect } from "react";
import "./multiFormHOC.css";
import { useMachine } from "@xstate/react";
import ProgressBar from "../../components/multiForm/ProgressBar";
import FormStepOne from "../../components/multiForm/formStepOne";
import FormStepTwo from "../../components/multiForm/formStepTwo";
import { FormState } from "../../models/statecharts/states";
import FormStepLast from "../../components/multiForm/formStepLast";
import FormStepThree from "../../components/multiForm/formStepThree";

const MultiFormHOC = () => {
  const [current, nextStep] = useMachine(FormState);
  const [page, setPage] = useState(1);
  const [checkTotalNumber, setCheckTotalNumber] = useState(null);
  useEffect(() => {
    if (current.matches("stepTwo")) {
      setPage(2);
    }
    if (current.matches("stepThree")) {
      setPage(3);
    }
    if (current.matches("stepLast")) {
      setPage(4);
    }
  }, [current, page]);

  return (
    <div className="form-container">
      <h3 className="form__title">Create your software team and join us!</h3>
      <div className="form__wrapper">
        <ProgressBar page={page} />
        {current.matches("stepOne") && (
          <FormStepOne
            nextStep={nextStep}
            checkTotalNumber={checkTotalNumber}
            page={page}
            setCheckTotalNumber={setCheckTotalNumber}
            current={current}
          />
        )}
        {current.matches("stepTwo") && (
          <FormStepTwo
            nextStep={nextStep}
            checkTotalNumber={checkTotalNumber}
            page={page}
            setPage={setPage}
            current={current}
          />
        )}
        {current.matches("stepThree") && (
          <FormStepThree
            page={page}
            nextStep={nextStep}
            setPage={setPage}
            current={current}
          />
        )}
        {current.matches("stepLast") && (
          <FormStepLast
            nextStep={nextStep}
            current={current}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default MultiFormHOC;
