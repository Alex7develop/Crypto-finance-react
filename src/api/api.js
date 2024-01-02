import axios from "axios";

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;

export const getCoins = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": key,
    },
  };

  try {
    const response = await axios.get(url + "/coins", options);
    return response.data.data;
  } catch (error) {    
    console.log(error);
  }
};


// export const getCoins = async () => {
//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-access-token': 'coinranking60b11490976fbd5afede813e0445e63b95fddb9f546a3db9',
//     },
//   };

//   try {
//     const response = await fetch('https://api.coinranking.com/v2' + '/coins', options);
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error('Ошибка получения данных', error);
//     throw error; 
//   }
// };
