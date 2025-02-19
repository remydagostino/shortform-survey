import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { usePanasState, panasQuestions } from "../data/panas";
import { QuestionFormItem } from "../components/SurveyQuestion";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  background: '#fefefe',
  padding: 12,
  fontFamily: "Roboto, sans-serif, serif",
  maxWidth: 800,
  margin: '0 auto'
}

const IndexPage: React.FC<PageProps> = () => {
  const { surveyAnswers, updateSurveyAnswers, shortCode } = usePanasState();

  const onCopyClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback((e) => {
    e.preventDefault();

    navigator.clipboard.writeText(shortCode);
  }, [shortCode]);

  return (
    <main style={pageStyles}>
      <h1>Panas Survey</h1>
      <div style={{ marginBottom: 20 }}>
        { panasQuestions.map(({title, code, index, description}) => 
          <QuestionFormItem 
            key={code}
            title={title} 
            description={description} 
            code={code}
            onChange={(code, value) => updateSurveyAnswers({ code, value })}
          />) 
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, paddingBottom: 20 }}>
        <h2 style={{ margin: 0 }}>Short code:</h2>
        <code style={{background: '#eee', padding: '3px' }}>{shortCode}</code>
        <button onClick={onCopyClick}>Copy</button>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
