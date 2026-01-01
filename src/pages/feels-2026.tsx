import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Survey from "../components/Survey";
import { SurveyQuestion, SurveyQuestionAnswer } from "../data/useSurveyState";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  background: '#fefefe',
  padding: 12,
  fontFamily: "Roboto, sans-serif, serif",
  maxWidth: 800,
  margin: '0 auto'
}

/**
// Positive Feelings
1. Excited / Looking forward to / Eager
2. Happy / Joyous / Grateful
3. Sociable
4. Inspired / Creative
5. Calm / Present / Peaceful / Oneneess
6. Proud / Determined / Strong

// Negative Feelings
1. Iritable / Grumpy / Angry / Hostile
2. Bored / Tired / Flat
3. Nervous / Spooked / Anxious
4. Overwhelmed / Stressed
5. Ashamed / Guilty
6. Sad / Depressed / Disappointed / Hopeless

Ex1,Bo1,Ip1,Ne1,Pe1,Jo1,Sa1,So1,Ir1,Ov1,Pr1,As1
 */


export const questions: Array<SurveyQuestion> = [
  { title: 'Excited', index: 1, code: 'Ex', description: 'Looking forward to something meaningful.' },
  { title: 'Bored', index: 2, code: 'Bo', description: 'Feeling uninterested, flat, tired or unengaged.' },

  { title: 'Joyous', index: 3, code: 'Jo', description: 'Generally feeling happy, content, and grateful.' },
  { title: 'Sad', index: 4, code: 'Sa', description: 'Downtrodden, disappointed, or hopeless.' },

  { title: 'Sociable', index: 5, code: 'So', description: 'Enthusiastic to engage and connect with others.' },
  { title: 'Irritable', index: 6, code: 'Ir', description: 'Easily annoyed, frustrated, grumpy, or sulky.' },

  { title: 'Inspired', index: 7, code: 'Ip', description: 'Uplifted and driven to work on something meaningful.' },
  { title: 'Nervous', index: 8, code: 'Ne', description: 'Anxious or uneasy and worried about potential outcomes.' },

  { title: 'Peaceful', index: 9, code: 'Pe', description: 'Calm, present, and mindful in the moment.' },
  { title: 'Overwhelmed', index: 10, code: 'Ov', description: 'Stressed, overcommitted, or unable to cope with demands.' },

  { title: 'Proud', index: 11, code: 'Pr', description: 'Worthy, energized, and determined to succeed.' },
  { title: 'Ashamed', index: 12, code: 'As', description: 'Embarrassed, guilty, disgraced or unworthy.' },
];

const title = "Feelings 2026";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Survey 
        title={title}
        surveyQuestions={questions}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{title}</title>
