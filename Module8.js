async function fetchUrls(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return response.text(); // или response.json() для получения JSON-данных
    }));

    // Ждём завершения всех промисов и возвращаем их результаты
    try {
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        console.error('Error fetching URLs:', error);
        throw error; // перекидываем ошибку для дальнейшей обработки
    }
}