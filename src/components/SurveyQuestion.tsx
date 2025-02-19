import * as React from "react"
import { panasAnswers } from "../data/panas";
import "./SurveyQuestion.css"

export type SurveyQuestionProps = {
  title: string,
  description: string,
  code: string,
  onChange: (code: string, score: number) => void
}


export const QuestionFormItem: React.FC<SurveyQuestionProps> = ({ title, description, code, onChange }) => {
  return (
    <div style={{marginBottom: 20}}>
      <h3 style={{marginBottom: 0}}>{title}</h3>
      <p style={{margin: '8px 0 12px'}}>{description}</p>
      <fieldset className="SurveyQuestion--fieldset">
        {panasAnswers.map(({ value, description: answerDescription }) => (
          <label className={`SurveyQuestion--label SurveyQuestion--magnitude-${value}`} key={`${code}${value}`} id={`question-${code}-${value.toString()}`}>
            <input 
              type="radio"
              className="SurveyQuestion--input"
              id={`question-${code}-0`} 
              name={`question-${code}`} 
              value={value.toString()}
              onChange={() => {
                onChange(code, value);
              }}
            />
            <span>{answerDescription}</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}