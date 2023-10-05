export const getCurrencyEconomia = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const apiResponse = await response.json();
    return apiResponse;
  } catch (error) {
    console.error(error);
  }
};
