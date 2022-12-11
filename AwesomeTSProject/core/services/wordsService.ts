import axios from 'axios';
import Config from '../../config/config';
import axiosInstance from '../../config/getAxios';
import { WordsData } from '../interfaces/Word';

export const getAllWords = async (): Promise<WordsData[]> => {
  const result = await axios.get('https://localhost:5001/EnglishWord').then((res) => res.data).catch((error)=>{
    console.log(error);
 });
  return result || [];
};