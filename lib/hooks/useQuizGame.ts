import React, { useEffect, useState } from "react";
import {
  CorrectAnswer,
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
      const data = await quizService.getQuestions({amount:15, difficulty:"hard", type:"boolean"});
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

  const resetGame = () => {
    setError("")
    setCurrentIndex(0)
    setIsFinished(false)
    setLoading(false)
    setQuestionAnswers([])
  }

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
    questionAnswers,
    isFinished,
    refetchGameData: fetchGameData,
    answerQuestion,
    resetGame,
  };
};

export default useQuizGame;
