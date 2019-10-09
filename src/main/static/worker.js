onmessage = async (e) => {
    if (e.data.type === 'FETCH_INFO') {
        // fetch info from restricted server
        const response = await fetch('http://localhost:5000/info.json');
        const data = await response.json();
        postMessage({type: 'FETCH_INFO_RESPONSE', message: data.message});
    }
};
