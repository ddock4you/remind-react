const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = () => {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchInfo = (coinId: string) => {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
};

export const fetchPrice = (coinId: string) => {
    return fetch(`${BASE_URL}/tickets/${coinId}`).then((response) => response.json());
};

export function fetchCoinHistory(coinId: string) {
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((response) =>
        response.json()
    );
}
