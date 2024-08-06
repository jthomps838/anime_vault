'use server';

export const fetchAnime = async (page: number, limit = 12) => {
    const res = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
    );

    const data = await res.json();

    return data;
};
