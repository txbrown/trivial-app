import {
  CorrectAnswer,
  Difficulty,
  GameQuestionsResponse,
  Type
} from "../../types/api";
import quizService, { BASE_API_URL } from "./quiz-service";

describe("QuizService tests", () => {
  afterEach(() => {
    // TODO: should fix this but no idea how to fix this type err at the moment
    //@ts-ignore
    global.fetch.mockClear();
  });

  it("should call correct url - no options", async () => {
    const response: GameQuestionsResponse = {
      response_code: 200,
      results: [
        {
          type: Type.Boolean,
          category: "cat_1",
          correct_answer: CorrectAnswer.True,
          difficulty: Difficulty.Hard,
          incorrect_answers: [CorrectAnswer.False],
          question: ""
        }
      ]
    };

    global.fetch = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        json: () => Promise.resolve(response),
        ok: true
      } as Response)
    );

    await quizService.getQuestions();

    expect(global.fetch).toHaveBeenCalledWith(BASE_API_URL);
  });

  it("should call correct url - with options", async () => {
    const response: GameQuestionsResponse = {
      response_code: 200,
      results: [
        {
          type: Type.Boolean,
          category: "cat_1",
          correct_answer: CorrectAnswer.True,
          difficulty: Difficulty.Hard,
          incorrect_answers: [CorrectAnswer.False],
          question: ""
        }
      ]
    };

    global.fetch = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        json: () => Promise.resolve(response),
        ok: true
      } as Response)
    );

    const options = {
      category: 1,
      difficulty: "hard",
      type: "boolean"
    };

    await quizService.getQuestions({
      category: 1,
      difficulty: "hard",
      type: "boolean"
    });

    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_API_URL}?category=${options.category}&difficulty=${options.difficulty}&type=${options.type}`
    );
  });

  it("should throw err when respone not ok", async () => {
    const response: GameQuestionsResponse = {
      response_code: 200,
      results: [
        {
          type: Type.Boolean,
          category: "cat_1",
          correct_answer: CorrectAnswer.True,
          difficulty: Difficulty.Hard,
          incorrect_answers: [CorrectAnswer.False],
          question: ""
        }
      ]
    };

    global.fetch = jest.fn().mockImplementation(async () =>
      Promise.resolve({
        json: () => Promise.resolve(response),
        ok: false
      } as Response)
    );

    const options = {
      category: 1,
      difficulty: Difficulty.Hard,
      type: Type.Boolean
    };

    expect(quizService.getQuestions(options)).rejects.toThrowError(
      "Error! Failed fetching games - https://opentdb.com/api.php?category=1&difficulty=hard&type=boolean"
    );
  });
});
