if (window.Worker) {
    // LOCAL WORKER
    const worker = new Worker('http://localhost:3000/worker.js');
    worker.postMessage({type: 'FETCH_INFO'});
    worker.onmessage = (e) => {
        if (e.data.type === 'FETCH_INFO_RESPONSE') {
            const workerDiv = document.querySelector('.js-worker');
            workerDiv.innerText = e.data.message;
        }
    };
} else {
    console.log('your browser doesn\'t support workers');
}
