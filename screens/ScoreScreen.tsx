import { useNavigation, useRoute } from "@react-navigation/core";
import * as React from "react";
import { FlatList } from 'react-native-gesture-handler';
import { Button, List, Title } from "react-native-paper";
import Box from "../components/Box";
import Layout from "../components/Layout";
import { cleanString } from "../lib/utils/strings";
import { ScoreScreenNavigationProp, ScoreScreenRouteProp } from "../navigation/types";
import { Question } from "../types/api";

interface IScoreScreenProps { }

const getNumCorrectAnswers = (answers: Answers, questions: Question[]) => {
  return questions.reduce(
    (sum, current, index) =>
      current.correct_answer === answers[index] ? sum + 1 : sum,
    0
  );
};

const ScoreScreen: React.FunctionComponent<IScoreScreenProps> = (props) => {
  const { params } = useRoute<ScoreScreenRouteProp>();
  const { navigate } = useNavigation<ScoreScreenNavigationProp>();
  const { answers, questions } = params;
  const correctAnswers = getNumCorrectAnswers(answers, questions);

  const handlePlayAgain = () => {
    navigate("Welcome")
  }

  return (
    <Layout>
      <Box center>
        <Title>
          You scored {correctAnswers} / {questions.length}
        </Title>
      </Box>
      <List.Section title="Your score" style={{ marginBottom: 40 }}>
        <FlatList
          style={{height: 500}}
          data={questions}
          keyExtractor={(_, index) => `question-${index}`}
          renderItem={({ item: question, index }) => <List.Item
            title={cleanString(question.question)}
            left={(props) => (
              <List.Icon
                {...props}
                icon={
                  answers[index] == question.correct_answer ? "plus" : "minus"
                }
              />
            )}
          />}
        />

      </List.Section>
      <Box center>
        <Button onPress={handlePlayAgain}>Play Again?</Button>
      </Box>
    </Layout>
  );
};

export default ScoreScreen;
