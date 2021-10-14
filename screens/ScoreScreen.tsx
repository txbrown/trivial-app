import { useNavigation, useRoute } from "@react-navigation/core";
import * as React from "react";
import { List, Title } from "react-native-paper";
import Box from "../components/Box";
import Layout from "../components/Layout";
import { cleanString } from "../lib/utils/strings";
import { ScoreScreenRouteProp } from "../navigation/types";
import { Question } from "../types/api";

interface IScoreScreenProps {}

const getNumCorrectAnswers = (answers: Answers, questions: Question[]) => {
  return questions.reduce(
    (sum, current, index) =>
      current.correct_answer === answers[index] ? sum + 1 : sum,
    0
  );
};

const ScoreScreen: React.FunctionComponent<IScoreScreenProps> = (props) => {
  const { params } = useRoute<ScoreScreenRouteProp>();
  const { answers, questions } = params;
  const correctAnswers = getNumCorrectAnswers(answers, questions);

  return (
    <Layout>
      <Box center>
        <Title>
          You scored {correctAnswers} / {questions.length}
        </Title>
      </Box>
      <List.Section title="Your score">
        {questions.map((question, index) => {
          return (
            <List.Item
              key={`question-${index}`}
              title={cleanString(question.question)}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon={
                    answers[index] == question.correct_answer ? "plus" : "minus"
                  }
                />
              )}
            />
          );
        })}
      </List.Section>
    </Layout>
  );
};

export default ScoreScreen;
