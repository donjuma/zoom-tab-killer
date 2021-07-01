browser.webNavigation.onCompleted.addListener((details) => {
    setTimeout(() => {
        browser.tabs.remove(details.tabId, () => {});
    }, 5000);
}, {url: [{urlMatches : 'https://*.zoom.us/postattendee'}]});

browser.webNavigation.onCompleted.addListener((details) => {
    setTimeout(() => {
        browser.tabs.remove(details.tabId, () => {});
    }, 5000);
}, {url: [{hostSuffix : 'zoom.us', querySuffix: 'status=success'}]});

browser.webNavigation.onReferenceFragmentUpdated.addListener((details) => {
    if (details.url.endsWith('#success')) {
        setTimeout(() => {
            browser.tabs.remove(details.tabId, () => {});
        }, 5000);
    }
}, {url: [{hostSuffix : 'zoom.us'}]});
