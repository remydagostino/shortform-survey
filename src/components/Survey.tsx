import * as React from "react"
import { useSurveyState, SurveyQuestion } from "../data/useSurveyState";
import { QuestionFormItem } from "../components/SurveyQuestion";
import { ClearUndoButton } from "../components/ClearUndoButton";

export type SurveyProps = {
  title: string;
  surveyQuestions: Array<SurveyQuestion>;
}

const Survey: React.FC<SurveyProps> = ({ title, surveyQuestions }) => {
  const { 
    clearAnswers, 
    undoLastClear, 
    updateSurveyAnswers, 
    shortCode, 
    surveyAnswers 
  } = useSurveyState();

  const onCopyClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback((e) => {
    e.preventDefault();

    navigator.clipboard.writeText(shortCode);
  }, [shortCode]);

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{title}</h1>
        <ClearUndoButton clearEffectFn={clearAnswers} undoEffectFn={undoLastClear} />
      </div>
      <div style={{ marginBottom: 20 }}>
        { surveyQuestions.map(({title, code, index, description}) => 
          <QuestionFormItem 
            key={code}
            title={title} 
            description={description} 
            code={code}
            value={surveyAnswers.get(code)}
            onChange={(code, value) => updateSurveyAnswers({ code, value })}
          />) 
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, paddingBottom: 20 }}>
        <h2 style={{ margin: 0 }}>Short code:</h2>
        <code style={{background: '#eee', padding: '3px' }}>{shortCode}</code>
        <button onClick={onCopyClick}>Copy</button>
      </div>
    </section>
  )
}

export default Survey;
