const network = $network.wifi.ssid;
const currentTime = Date.now();


$httpAPI("GET", "v1/traffic", null, (body) => {
  if (network && (currentTime / 1000) - body.startTime >= 3) {
    $httpAPI("post", "v1/dns/flush", null, (body) => {
      $notification.post('DNS开始刷新', '', `已从蜂窝网络切换至 ${network}`);
    })
  }
  $done();
})
