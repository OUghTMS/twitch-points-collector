const pointCollector = () => {
    setTimeout(() => {
        const element = document.querySelector('[aria-label="Claim Bonus"]');
        
        if (element) {
            element.click();
        }

        setInterval(() => {
            const element = document.querySelector('[aria-label="Claim Bonus"]');
            if (element) {
                element.click();
            }
        }, 15 * 61 * 1000);

    }, 5 * 1000);
}

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.text === 'collect points') {
        pointCollector();
    }
});