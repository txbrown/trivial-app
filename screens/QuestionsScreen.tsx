import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import ErrorView from "../components/ErrorView";
import Layout from "../components/Layout";
import LoadingView from "../components/LoadingView";
import QuestionBox from "../components/QuestionBox";
import useQuizGame from "../lib/hooks/useQuizGame";
import { QuestionScreenRouteProp, QuestionsScreenNavigationProp } from "../navigation/types";

interface Props {}

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center"
  },
  questionBoxContainer: {
    marginBottom: 24
  },
  answerActionsContainer: {
    marginBottom: 128,
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

const QuestionsScreen: React.FunctionComponent<Props> = (props) => {
  const {
    error,
    gameData,
    totalQuestions,
    current,
    loading,
    currentQuestion,
    refetchGameData,
    answerQuestion,
    isFinished,
    questionAnswers,
    resetGame
  } = useQuizGame();
  const { navigate, addListener } = useNavigation<QuestionsScreenNavigationProp>();
  const { params } = useRoute<QuestionScreenRouteProp>();

  useEffect(() => {
    if (isFinished) {
      navigate("Score", { answers: questionAnswers, questions: gameData });
    }
  }, [isFinished]);

  useEffect(() => {
    const unsub = addListener("focus", () => {
      if(params?.reset){
        resetGame()
      }
    })
    
    return unsub
  },[addListener, params?.reset])

  if(error) return <ErrorView message={error} onTryAgain={refetchGameData} />;
  
  if (loading) return <LoadingView />;

  return (
    <Layout>
      <View style={styles.questionBoxContainer}>
        {currentQuestion && <QuestionBox {...currentQuestion} />}
      </View>
      <View style={styles.progressContainer}>
        <Text>
          {current} of {totalQuestions}
        </Text>
      </View>
      <View style={styles.answerActionsContainer}>
        <IconButton
          color="red"
          icon="close"
          size={44}
          onPress={() => {
            answerQuestion("True");
          }}
        >
          False
        </IconButton>

        <IconButton
          color="green"
          icon="check"
          size={44}
          onPress={() => {
            answerQuestion("True");
          }}
        >
          True
        </IconButton>
      </View>
    </Layout>
  );
};

export default QuestionsScreen;
