import React, { useEffect, useState } from "react";
import {
  CorrectAnswer,
  GameQuestionsResponse,
  Question
} from "../../types/api";
import quizService from "../services/quiz-service";

type Answers = {
  [key: number]: keyof typeof CorrectAnswer;
};
const useQuizGame = () => {
  const [error, setError] = useState("");
  const [gameData, setGameData] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState<Answers>({});
  const [isFinished, setIsFinished] = useState(false);

  const fetchGameData = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await quizService.getQuestions();
      setGameData(data);
    } catch (error) {
      setError("Ups, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const answerQuestion = (answer: keyof typeof CorrectAnswer) => {
    setQuestionAnswers((value) => ({ ...value, [currentIndex]: answer }));
    if (currentIndex + 1 == gameData.length) {
      setIsFinished(true);
    }

    setCurrentIndex((i) => {
      if (!gameData) return i;

      if (i + 1 >= gameData?.length) return i;

      return i + 1;
    });
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return {
    error,
    gameData,
    loading,
    totalQuestions: gameData?.length || 0,
    current: currentIndex + 1,
    currentQuestion: gameData[currentIndex],
    refetchGameData: fetchGameData,
    answerQuestion,
    questionAnswers,
    isFinished
  };
};

export default useQuizGame;
