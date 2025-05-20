import * as React from "react"
import { panasAnswers } from "../data/panas";
import "./SurveyQuestion.css"

export type SurveyQuestionProps = {
  title: string,
  description: string,
  code: string,
  value: number | undefined,
  onChange: (code: string, score: number) => void
}


export const QuestionFormItem: React.FC<SurveyQuestionProps> = ({ title, description, code, value, onChange }) => {
  return (
    <div style={{marginBottom: 20}}>
      <h3 style={{marginBottom: 0}}>{title}</h3>
      <p style={{margin: '8px 0 12px'}}>{description}</p>
      <fieldset className="SurveyQuestion--fieldset">
        {panasAnswers.map(({ value: answerValue, description: answerDescription }) => {
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