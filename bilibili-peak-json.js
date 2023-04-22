const url = $request.url;
const method = $request.method;
const notifyTitle = "bilibili-peak-json";
if (!$response.body) {
    // 有undefined的情况
    console.log(`$response.body为undefined:${url}`);
    $done({});
}
if (method !== "GET") {
    $notification.post(notifyTitle, "method错误:", method);
}
let body = JSON.parse($response.body);


if (!body.data) {
    console.log(url);
    console.log(`body:${$response.body}`);
    $notification.post(notifyTitle, url, "data字段错误");
} else {
    if (url.includes("resource/peak/download")) {
        //循环data.resource 并将type为 'egg' 的元素中的list设置为[]
        let resource = body.data.resource;
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].type === "egg") {
                resource[i].list = [];
            }
        }
        
    } else {
        $notification.post(notifyTitle, "路径匹配错误:", url);
    }
}

body = JSON.stringify(body);
$done({
    body
});

