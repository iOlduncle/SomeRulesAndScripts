console.log($request.url);
console.log($response.body);
var body = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';
const card = 'card';

if ($request.url.indexOf(vip) != -1){
    body.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
    };
    body.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
    };
}

if ($request.url.indexOf(adhf) != -1){
    body.activities = [];
}

if ($request.url.indexOf(card) != -1){
    body.data = [];
}

if ($request.url.indexOf('user') != -1){
    body.vip_info.vip.expires_time = 4092599349;
    body.vip_info.vip.is_auto_renewal = false;
    body.vip_info.svip.expires_time = 4092599349;
    body.vip_info.svip.is_auto_renewal = false;
    body.vip_info.show_upcoming_renewal = false;
    body.user.name = "LINUX.DO";
    body.user_info.name = "LINUX.DO";
}

$done({ body: JSON.stringify(body)});