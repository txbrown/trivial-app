import { GameQuestionsResponse, Question } from "../../types/api";

export const BASE_API_URL = "https://opentdb.com/api.php";

interface QueryParams {
  [key: string]: number | string;
}

type Options = {
  type?: "multiple" | "boolean";
  difficulty?: "easy" | "hard";
  category?: number;
  amount?: number
};

class QuizService {
  async getQuestions(options?: Options): Promise<Question[]> {
    const url = this.getUrl(BASE_API_URL, options as QueryParams);
    const response = await fetch(url);

    if (!response.ok) {
      throw Error(`Error! Failed fetching games - ${url}`);
    }

    const data: GameQuestionsResponse = await response.json();

    return data.results;
  }

  private getUrl(baseUrL: string, options?: QueryParams): string {
    let url = baseUrL;

    if (options) {
      url = Object.keys(options).reduce((newUrl, key, index) => {
        if (index === 0) {
          newUrl += "?";
        }
        const ampersand = index > 0 ? "&" : "";
        newUrl = `${newUrl}${ampersand}${key}=${options[key]}`;
        return newUrl;
      }, url);
    }

    return url;
  }
}

export default new QuizService();
