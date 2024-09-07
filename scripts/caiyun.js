// console.log($request.url);
// console.log($response.body);
var body = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';
const card = 'card';

if ($request.url.indexOf(vip) != -1) {
    body.vip = {
        "expires_time": "4092599349",
        "is_auto_renewal": true
    };
    body.svip = {
        "expires_time": "4092599349",
        "is_auto_renewal": true
    };
    body.show_upcoming_renewal = false;
}

if ($request.url.indexOf(adhf) != -1) {
    body.activities = [];
}

if ($request.url.indexOf('user') != -1) {
    if (body.vip_info !== undefined) {
        body.vip_info.vip.expires_time = 4092599349;
        body.vip_info.vip.is_auto_renewal = true;
        body.vip_info.svip.expires_time = 4092599349;
        body.vip_info.svip.is_auto_renewal = true;
        body.vip_info.show_upcoming_renewal = false;
    } else {
        body.vip_info = {
            "vip": {
                "expires_time": "4092599349",
                "is_auto_renewal": true
            },
            "svip": {
                "expires_time": "4092599349",
                "is_auto_renewal": true
            },
            "upcoming_renewals": [],
            "show_upcoming_renewal": false,
            "trial_svip": {
                "expires_time": "0",
                "received_time": "0",
                "is_recharge_vip": false,
                "trial_card_code": ""
            }
        }
    }

    if (body.user !== undefined) {
        body.user.name = "LINUX.DO";
    } else {
        body.name = "LINUX.DO";
    }

    if (body.user_info !== undefined) {
        body.user_info.name = "LINUX.DO";
        body.user_info.name_status = 1;
        body.user_info.avatar = "https://linux.do/user_avatar/linux.do/io.oi/96/138408_2.png";
        body.user_info.avatar_status = 1;
        body.user_info.city = "🌍";
        body.user_info.completed_percent = 100;
        body.user_info.gender = 0;
        body.user_info.show_completed_award = false;
        body.user_info.is_under_maintenance = false;
    } else {
        body.name = "LINUX.DO";
        body.name_status = 1;
        body.avatar = "https://linux.do/user_avatar/linux.do/io.oi/96/138408_2.png";
        body.avatar_status = 1;
        body.city = "🌍";
        body.completed_percent = 100;
        body.gender = 0;
        body.show_completed_award = false;
        body.is_under_maintenance = false;
    }

}

$done({ body: JSON.stringify(body) });