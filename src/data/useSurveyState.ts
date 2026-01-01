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

export type SurveyAnswerMap = Map<string, number>;

export const useSurveyState = () => {
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