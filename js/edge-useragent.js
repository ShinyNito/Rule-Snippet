; (async () => {
  const headers = $request.headers

  //判断使用平台
  const platform = headers['sec-ch-ua-platform']
  const userAgent = headers['user-agent']
  delete headers['user-agent']
  const windowsUa = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const linuxUa = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const androidUa = 'Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
  const iosUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/112.0.1722.64 Version/16.0 Mobile/15E148 Safari/604.1'
  headers['sec-ch-ua'] = secChUa
  // console.log(userAgent)
  if (platform === "Windows") {
    //windows 平台
    headers['User-Agent'] = windowsUa
  } else if (platform === "Linux") {
    // Linux 平台
    headers['User-Agent'] = linuxUa
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
      headers['User-Agent'] = windowsUa
    } else if (userAgent.indexOf('Android') !== -1) {
      headers['User-Agent'] = linuxUa
    } else if (userAgent.indexOf('iPhone') !== -1) {
      headers['User-Agent'] = iosUa
    }
  } 
  $done({ headers })
})()
