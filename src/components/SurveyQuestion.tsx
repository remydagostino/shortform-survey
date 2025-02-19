import * as React from "react"
import { panasAnswers } from "../data/panas";

export type SurveyQuestionProps = {
  title: string,
  description: string,
  code: string,
  onChange: (code: string, score: number) => void
}

export const QuestionFormItem: React.FC<SurveyQuestionProps> = ({ title, description, code, onChange }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <fieldset style={{display: 'flex', gap: '10px' }}>
        {panasAnswers.map(({ value, description: answerDescription }) => (
          <label key={`${code}${value}`} id={`question-${code}-${value.toString()}`}>
            <input 
              type="radio" 
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