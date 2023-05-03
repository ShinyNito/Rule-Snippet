let url = $request.url;
let method = $request.method;
if (!$response.body) {
    console.log(`$response.body为undefined:${url}`);
    $done({});
}

let body = JSON.parse($response.body);

const noticeTitle = "起点App脚本错误";
const getMethod = "GET";
const postMethod = "POST";

if (!body.Data) {
    console.log(`body:${$response.body}`);
    $notification.post(noticeTitle, "起点", "Data为空");
} else {
    if (url.includes("v1/adv/getadvlistbatch?positions=iosusercenter%2Ciosusercenter2") && method === getMethod) {
        console.log('起点-iOS_用户中心');
        // 将body.Data的每一个数组元素配置为空 {} body.Data = {};
        body.Data.iosusercenter = [];
        body.Data.iosusercenter2 = [];

        console.log('成功');
    } else if (url.includes("v3/user/getaccountpage") && method === getMethod) {
        console.log('起点-账户页');
        if (!body.Data) {
            console.log(`body:${$response.body}`);
            $notification.post(noticeTitle, "起点", "Data为空");
        }
        body.Data.BenefitButtonList = [];
        const newFunctionButtonList = [];
        const excludeList = ['游戏中心', '徽章称号', '新书投资', '达人中心', '奇妙世界', '数字藏品'];
        body.Data.FunctionButtonList.forEach(element => {
            if (!excludeList.includes(element.Name)) {
                newFunctionButtonList.push(element);
              }
        });
        body.Data.FunctionButtonList = newFunctionButtonList;
        //删除SchoolText
        body.Data.SchoolText = "";
        //删除SchoolImage
        body.Data.SchoolImage = "";
        //删除SchoolUrl
        body.Data.SchoolUrl = "";
        //删除Member
        body.Data.Member = {};
    } else if (url.includes("v2/checkin/simpleinfo") && method === getMethod) {
        console.log('起点-签到页');
        if (!body.Data) {
            console.log(`body:${$response.body}`);
            $notification.post(noticeTitle, "起点", "Data为空");
        }
        //设置ShowCoinIcon为 0
        body.Data.ShowCoinIcon = 0;
        body.Data.ShowArrowIcon = 0;
    }
}
body = JSON.stringify(body);

$done({
    body
});
