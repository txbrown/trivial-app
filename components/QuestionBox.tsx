import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { cleanString } from "../lib/utils/strings";
import { Question } from "../types/api";

interface Props extends Question {}

const QuestionBox: React.FunctionComponent<Props> = ({ question }) => {
  return (
    <Card>
      <Card.Content>
        <Title>{cleanString(question)}</Title>
      </Card.Content>
    </Card>
  );
};

export default QuestionBox;
