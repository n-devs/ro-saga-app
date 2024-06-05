



function run() {

    fetch("https://raw.githubusercontent.com/n-devs/public-ip/data/ip-address.json").then(res => res.json())
        .then(data => {


            window.ROConfig = {
                "remoteClient": `http://${data.ipv4}:5737/`,
                "width": "100%",
                "height": "100%",
                "socketProxy": `ws://${data.ipv4}:5999/`,
                // "socketProxy": `wss://127.0.0.1:5999`,
                // "socketProxy": `wss://connect.robrowser.com/`,
                "servers": [
                    {
                        "display": "เซิฟเวอร์ต่างโลก",
                        "desc": "Ro Saga Server Bata",
                        "address": `${data.ipv4}`,
                        "port": 6900,
                        "version": 55,
                        "langtype": 5,
                        "packetver": 20130618,
                        "forceUseAddress": true,
                        "socketProxy": `ws://${data.ipv4}:5999/`,
                        // "socketProxy": `wss://127.0.0.1:5999`,
                        // "socketProxy": `wss://connect.robrowser.com/`,

                        "packetKeys": true
                    }
                ],
                "development": false,
                "packetver": 20130618,
                "skipIntro": true,
                "saveFiles": true
            };

            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'Online.js';
            document.getElementsByTagName('body')[0].appendChild(script);

        }).catch(err => { throw err });


}

// setTimeout(() => {
    run()

// }, 1000)

