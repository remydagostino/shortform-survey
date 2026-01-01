import * as React from "react"
import { SurveyQuestionAnswer } from "../data/useSurveyState";
import "./SurveyQuestion.css"

export type SurveyQuestionProps = {
  title: string,
  description: string,
  code: string,
  value: number | undefined,
  onChange: (code: string, score: number) => void
}

export const fivePointScaleAnswers: Array<SurveyQuestionAnswer> = [
  { value: 0, description: 'Not at all' },
  { value: 1, description: 'A little' },
  { value: 2, description: 'Moderately' },
  { value: 3, description: 'Quite a bit' },
  { value: 4, description: 'Extremely' }
];

export const QuestionFormItem: React.FC<SurveyQuestionProps> = ({ title, description, code, value, onChange }) => {
  return (
    <div style={{marginBottom: 20}}>
      <h3 style={{marginBottom: 0}}>{title}</h3>
      <p style={{margin: '8px 0 12px'}}>{description}</p>
      <fieldset className="SurveyQuestion--fieldset">
        {fivePointScaleAnswers.map(({ value: answerValue, description: answerDescription }) => {
          return (
            <label 
              className={`SurveyQuestion--label SurveyQuestion--magnitude-${answerValue}`} 
              key={`${code}${answerValue}`} 
              htmlFor={`question-${code}-${answerValue.toString()}`}
            >
              <input 
                type="radio"
                className="SurveyQuestion--input"
                id={`question-${code}-${answerValue}`} 
                name={`question-${code}`} 
                value={answerValue.toString()}
                checked={value === answerValue }
                onChange={() => {
                  onChange(code, answerValue);
                }}
              />
              <span>{answerDescription}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}