import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Survey from "../components/Survey";
import { panasQuestions } from "../data/panas";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  background: '#fefefe',
  padding: 12,
  fontFamily: "Roboto, sans-serif, serif",
  maxWidth: 800,
  margin: '0 auto'
}

const title = "Panas Survey";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Survey 
        title={title}
        surveyQuestions={panasQuestions}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{title}</title>
