(async () => {
	const network = $network.wifi.ssid;
	if (network) {
		const currentTime = Date.now();
		const wifiEnv = $persistentStore.read("Firewall_Env");
		if (!wifiEnv) { //if the script was last run in cellular env.
			const startTime = await new Promise(res => {
				$httpAPI("GET", "v1/traffic", null, (body) => res(body.startTime))
			});
			if ((currentTime / 1000) - startTime >= 3) {
				const time = JSON.stringify(currentTime);
				const addTime = $persistentStore.write(time, "WiFi_Timer");
				const addEnv = $persistentStore.write("1", "Firewall_Env");
			}
		}
	} else {
		const delEnv = $persistentStore.write("", "Firewall_Env");
	}
})().catch((err) =>  $done({}))
