async function loadData() {
    const response = await fetch('https://api.firstserver.com/data');
    if (!response.ok) {
        throw new Error('Failed to load data from the first server');
    }
    const data = await response.json();
    return data;
}

async function useData(data) {
    const response = await fetch('https://api.secondserver.com/processedData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('Failed to process data on the second server');
    }
    const result = await response.json();
    return result;
}

async function processData() {
    try {
        const data = await loadData();
        const result = await useData(data);
        console.log('Processed data:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function
processData();
