chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed");
});

chrome.runtime.onStartup.addListener(() => {
    console.log("Startup!!!")
});