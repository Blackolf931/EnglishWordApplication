import { WordsAction, WordsData, WordsQuestionSetActionTypes } from "../../interfaces/Word";

export const setWordStart = (): WordsAction => ({
    type: WordsQuestionSetActionTypes.WORDS_START,
  });
  
  export const setWordSuccess = (words: WordsData): WordsAction => ({
    type: WordsQuestionSetActionTypes.WORDS_SUCCESS,
    payload: words,
  });
  
  export const setWordSuccessAll = (words: WordsData[]): WordsAction => ({
    type: WordsQuestionSetActionTypes.WORDS_SUCCESS_ALL,
    payload: words,
  });
  
  export const setWordFail = (error: string): WordsAction => ({
    type: WordsQuestionSetActionTypes.WORDS_FAIL,
    payload: error,
  });
