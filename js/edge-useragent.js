; (async () => {
  const headers = $request.headers

  //判断使用平台
  const platform = headers['sec-ch-ua-platform']
  const userAgent = headers['User-Agent']
  delete headers['User-Agent']
  
  const macOSUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/112.0.1722.71'
  const windowsUa = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const linuxUa = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const androidUa = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const iosUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/112.0.1722.64 Version/16.0 Mobile/15E148 Safari/604.1'
  // console.log(userAgent)
  if (platform === "Windows") {
    //windows 平台
    
    delete headers['sec-ch-ua-full-version']
    delete headers['sec-ch-ua-full-version-list']
    headers['User-Agent'] = windowsUa
    headers['sec-ch-ua-mobile'] = '?0'
    headers['sec-ch-ua-platform'] = 'Windows'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
  } else if (platform === "macOS") {
    // Linux 平台

    delete headers['sec-ch-ua-full-version']
    delete headers['sec-ch-ua-full-version-list']
    headers['User-Agent'] = macOSUa
    headers['sec-ch-ua-mobile'] = '?0'
    headers['sec-ch-ua-platform'] = 'Windows'
    headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
  } else if (platform === "Android") {
    // Android 平台
    headers['User-Agent'] = androidUa
  } else if (platform === "iOS") {
    // iOS 平台
    headers['User-Agent'] = iosUa
  } else {
    // 通过 user-agent 判断平台
    if (userAgent.indexOf('Windows') !== -1) {
      //windows 平台
      delete headers['sec-ch-ua-full-version']
      delete headers['sec-ch-ua-full-version-list']
      delete headers['sec-ch-ua']
      headers['User-Agent'] = windowsUa
      headers['sec-ch-ua'] = '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'
    } else if (userAgent.indexOf('Android') !== -1) {
      headers['User-Agent'] = linuxUa
    } else if (userAgent.indexOf('iPhone') !== -1) {
      headers['User-Agent'] = iosUa
    }
  } 
  $done({ headers })
})()
