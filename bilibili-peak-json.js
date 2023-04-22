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
    if (url.includes("x/v2/splash")) {
       //需要将list的中的每个元素begin_time改为1915027200 end_time改为1915027200 duration为0 
       for (var i = 0; i < body.data.list.length; i++) {
            body.data.list[i].begin_time = 1915027200;
            body.data.list[i].end_time = 1915027200;
            body.data.list[i].duration = 0;
        }
        //并且如果有show还需要删除
        if (body.data.show) {
            delete body.data.show;
        }
    } else {
        $notification.post(notifyTitle, "路径匹配错误:", url);
    }
}

body = JSON.stringify(body);
$done({
    body
});

