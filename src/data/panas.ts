import React from "react";

export type SurveyQuestion = {
  title: string,
  description: string,
  index: number,
  code: string,
}

export type SurveyQuestionAnswer = {
  value: number,
  description: string;
}

export const panasQuestions: Array<SurveyQuestion> = [
  { title: 'Interested', index: 1, code: 'In', description: 'Curious or attentive toward something new.' },
  { title: 'Distressed', index: 2, code: 'Di', description: 'Uneasy, worried, or in emotional pain.' },
  { title: 'Excited', index: 3, code: 'Ex', description: 'A heightened sense of anticipation.' },
  { title: 'Upset', index: 4, code: 'Up', description: 'Emotionally troubled or disturbed.' },
  { title: 'Strong', index: 5, code: 'St', description: 'Confident, *capable*, and physically or emotionally robust.' },
  { title: 'Guilty', index: 6, code: 'Gu', description: 'Responsible for wrongdoing or mistakes.' },
  { title: 'Scared', index: 7, code: 'Sc', description: 'An acute sense of fear or alarm.' },
  { title: 'Hostile', index: 8, code: 'Ho', description: 'Angry, aggressive, or antagonistic.' },
  { title: 'Enthusiastic', index: 9, code: 'En', description: 'Hopeful and eager about something meaningful.' },
  { title: 'Proud', index: 10, code: 'Pr', description: 'A sense of satisfaction and self-worth from achievements.' },
  { title: 'Irritable', index: 11, code: 'Ir', description: 'Easily annoyed or frustrated.' },
  { title: 'Alert', index: 12, code: 'Al', description: 'Being awake, alert, and responsive to stimuli.' },
  { title: 'Ashamed', index: 13, code: 'As', description: 'Embarrassed, disgraced or unworthy' },
  { title: 'Inspired', index: 14, code: 'Ip', description: 'Uplifted or driven to create or achieve something meaningful.' },
  { title: 'Nervous', index: 15, code: 'Ne', description: 'Emotionally anxious or uneasy about potential outcomes.' },
  { title: 'Determined', index: 16, code: 'De', description: 'Motivated, and *resolute* in pursuing goals' },
  { title: 'Attentive', index: 17, code: 'At', description: 'Focused or fixated on a specific task' },
  { title: 'Jittery', index: 18, code: 'Ji', description: 'Physically nervous or restless.' },
  { title: 'Active', index: 19, code: 'Ac', description: 'Alive and energized and ready to engage.' },
  { title: 'Afraid', index: 20, code: 'Af', description: 'Fearful or apprehensive about something.' },
];

export const panasAnswers: Array<SurveyQuestionAnswer> = [
  { value: 0, description: 'Not at all' },
  { value: 1, description: 'A little' },
  { value: 2, description: 'Moderately' },
  { value: 3, description: 'Quite a bit' },
  { value: 4, description: 'Extremely' }
];

export type SurveyAnswerMap = Map<string, number>;

export const usePanasState = () => {
  const [lastSurveyAnsers, setLastSurveyAnwers] = React.useState<SurveyAnswerMap>(new Map());

  const [surveyAnswers, setSurveyAnswers] = React.useState<SurveyAnswerMap>(new Map());

  const updateSurveyAnswers = React.useCallback(({ code, value }: { code: string, value: number }) => {
    const updatedAnswers = new Map(surveyAnswers);

    updatedAnswers.set(code, value);

    setSurveyAnswers(updatedAnswers);
  }, [surveyAnswers, setSurveyAnswers])

  const clearAnswers = React.useCallback(() => {
    if (surveyAnswers.size > 0) {
      setLastSurveyAnwers(surveyAnswers);
      setSurveyAnswers(new Map());
    }
  }, [surveyAnswers, setLastSurveyAnwers, setSurveyAnswers])

  const undoLastClear = React.useCallback(() => {
    setSurveyAnswers(lastSurveyAnsers);
  }, [lastSurveyAnsers, setSurveyAnswers])

  const shortCode = React.useMemo(() => {
    return surveyAnswers
      .entries()
      .filter(([_, value]) => value > 0)
      .map(([code, value]) => `${code}${value}`)
      .toArray()
      .join(',')
  }, [surveyAnswers]);

  return {
    surveyAnswers,
    updateSurveyAnswers,
    clearAnswers,
    undoLastClear,
    shortCode
  };
}