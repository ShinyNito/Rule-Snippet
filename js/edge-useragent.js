; (async () => {
  const headers = $request.headers

  //判断使用平台
  const platform = headers['sec-ch-ua-platform']
  delete headers['user-agent']
  delete headers['sec-ch-ua-full-version']
  delete headers['sec-ch-ua-full-version-list']
  // console.log(userAgent)
  if (platform === "Windows") {
    //windows 平台
    headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    headers['sec-ch-ua-mobile'] = '?0'
  } else if (platform === "Linux") {
    // Linux 平台
    headers['User-Agent'] = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    headers['sec-ch-ua-mobile'] = '?0'
  } else if (platform === "Android") {
    // Android 平台
    headers['User-Agent'] = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    headers['sec-ch-ua-mobile'] = '?1'
  } else if (platform === "iOS") {
    // iOS 平台
    headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 EdgiOS/113.0.1774.35 Mobile/15E148 Safari/605.1.15'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    headers['sec-ch-ua-mobile'] = '?0'
  } else {
    // 其他平台
    headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    headers['sec-ch-ua-mobile'] = '?0'
  } 
  $done({ headers })
})()
