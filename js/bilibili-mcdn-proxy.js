// MCDN's v1/resource endpoint uses 8082 for HTTPS and 8000 for HTTP.
// Preserve the signed path/query verbatim when passing the full URL to the proxy.
const mcdn = /^(https?):\/\/([a-z0-9-]+\.mcdn\.bilivideo\.cn)(?::(8000|8082))?(\/v1\/resource\/upgcxcode\/[^#]+)$/i.exec($request.url);

if (!mcdn) {
    $done({});
} else {
    const port = mcdn[3] || (mcdn[1].toLowerCase() === "https" ? "8082" : "8000");
    const originalUrl = mcdn[1] + "://" + mcdn[2] + ":" + port + mcdn[4];
    const proxyHost = "proxy-tf-all-ws.bilivideo.com";
    const headers = { ...$request.headers };

    // Surge does not update Host automatically when an http-request script changes URL.
    for (const name of Object.keys(headers)) {
        if (name.toLowerCase() === "host") {
            delete headers[name];
        } else if (name === ":authority") {
            headers[name] = proxyHost;
        }
    }
    headers.Host = proxyHost;

    $done({
        url: "https://" + proxyHost + "/?url=" + encodeURIComponent(originalUrl),
        headers
    });
}
