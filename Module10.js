async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal });

        if (signal.aborted) {
            throw new Error('Request timed out');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Request aborted due to timeout');
        } else {
            console.error('Error fetching data:', error);
        }
    } finally {
        clearTimeout(timeoutId);
    }
}

const apiUrl = 'https://api.example.com/data';
const timeout = 5000;

fetchDataWithTimeout(apiUrl, timeout)
    .then(data => {
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
