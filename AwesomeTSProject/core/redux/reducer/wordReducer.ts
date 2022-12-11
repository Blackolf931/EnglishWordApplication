import { WordsAction, WordsData, WordsQuestionSetActionTypes } from '../../interfaces/Word';

export interface InitWordState {
  words: WordsData[];
  word: WordsData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: InitWordState = {
  words: [],
  word: null,
  isLoading: false,
  error: null,
};

const wordReducer = (state = initialState, action: WordsAction): InitWordState => {
  switch (action.type) {
    case WordsQuestionSetActionTypes.WORDS_START:
      return {
        ...state,
        isLoading: true,
      };
    case WordsQuestionSetActionTypes.WORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        word: action.payload,
      };
    case WordsQuestionSetActionTypes.WORDS_SUCCESS_ALL:
      return {
        ...state,
        isLoading: false,
        words: action.payload,
      };
    case WordsQuestionSetActionTypes.WORDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wordReducer;