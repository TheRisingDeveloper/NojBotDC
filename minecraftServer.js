const http = require('https');

function requestWrapper(requestInfo, serverName) {

    httprequest(serverName).then((data) => {
        console.log(data[requestInfo])
        return data[requestInfo];
    });
}
function httprequest(serverName) {

    return new Promise((resolve, reject) => {
        const options = {
            host: 'api.mcsrvstat.us',
            path: '/2/' + serverName,
            port: 443,
            method: 'GET'
        };
        const req = http.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            let body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
                //             writeText(body);

            });
        });
        req.on('error', (e) => {
            reject(e.message);
        });
        // send the request
        req.end();

    });
}


requestWrapper('hostname', 'naj.serverminer.com');



// function writeText(text){
//    let serverInfo = text;
//   // console.log(serverInfo);
//     console.log('IP: ' + serverInfo['ip']);
//     console.log('Player online: ' + serverInfo['players'].online);
//     console.log('Maximum players: ' + serverInfo['players'].max);
//     console.log('Server status: ' + serverInfo['online']);
//     console.log('Hostname: ' + serverInfo['hostname']);
//     console.log('Version: '+ serverInfo['version']);
// }
