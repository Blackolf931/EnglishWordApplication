import { Dispatch } from "react";
import { WordsAction } from "../../interfaces/Word";
import { getAllWords } from "../../services/wordsService";
import { setWordFail, setWordStart, setWordSuccessAll } from "../actionCreator/wordsAction";

export const getAllWordsData= () => async (dispatch: Dispatch<WordsAction>) => {
    try {
      console.log(3)
      dispatch(setWordStart());
      const words = await getAllWords();
      dispatch(setWordSuccessAll(words));
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(setWordFail(errorMessage));
    }
  };
  