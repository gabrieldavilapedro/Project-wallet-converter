export const getCurrencyEconomia:() => Promise<Array<string>> = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const apiResponse = await response.json();
    return Object.entries(apiResponse)
      .filter((currency) => currency[0] !== 'USDT')
      .map((currency: any) => currency[1].code);
  } catch (error) {
    console.error(error);
    return [];
  }
};
