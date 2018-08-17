(() => {
    if (!location.href.toLocaleLowerCase().includes("my_claimed_submissions"))
        return;
    const baseUrl = location.href.substr(0, location.href.indexOf(".io") + 3);
    const urlsToSend = [];
    $("a").each((i, anchor) => {
        const anchorHref = $(anchor).attr("href");
        if (anchorHref && anchorHref.includes("submission")){
            const url = baseUrl + anchorHref;
            //chrome.runtime.sendMessage({url: url});
            urlsToSend.push(url);
        }
    });

    urlsToSend.reverse();
    chrome.runtime.sendMessage({urls: urlsToSend});
})();