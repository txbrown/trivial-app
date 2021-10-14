import { GameQuestionsResponse, Question } from "../../types/api";

const BASE_API_URL = "https://opentdb.com/api.php";

class QuizService {
  async getQuestions(): Promise<Question[]> {
    // TODO: make query params options that can be passed as params of getGames func
    const url = `${BASE_API_URL}?amount=10&difficulty=hard&type=boolean`;

    const response = await fetch(url);

    if (!response.ok) {
      throw Error(`Error! Failed fetching games - ${url}`);
    }

    const data: GameQuestionsResponse = await response.json();

    return data.results;
  }
}

export default new QuizService();
