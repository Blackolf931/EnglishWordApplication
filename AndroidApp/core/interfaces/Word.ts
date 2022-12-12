export interface WordsData {
    englishWord: string,
    translateWord: string,
    translatedWords: string[]
}

export enum WordsQuestionSetActionTypes {
    WORDS_START = 'WORDS_START',
    WORDS_SUCCESS = 'WORDS_SUCCESS',
    WORDS_SUCCESS_ALL = 'WORDS_SUCCESS_ALL',
    WORDS_FAIL = 'WORDS_FAIL',
}
interface WordsStartAction {
    type: WordsQuestionSetActionTypes.WORDS_START;
  }
  
  interface WordsSuccessAction {
    type: WordsQuestionSetActionTypes.WORDS_SUCCESS;
    payload: WordsData;
  }
  
  interface WordsSuccessActionAll {
    type: WordsQuestionSetActionTypes.WORDS_SUCCESS_ALL;
    payload: WordsData[];
  }
  
  interface WordsFailAction {
    type: WordsQuestionSetActionTypes.WORDS_FAIL;
    payload: string;
  }

export type WordsAction =
  | WordsStartAction
  | WordsSuccessAction
  | WordsSuccessActionAll
  | WordsFailAction;