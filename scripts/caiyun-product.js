// console.log($request.url);
// console.log($response.body);
var body = JSON.parse($response.body);

if ($request.url.indexOf(product) != -1){
    body.pay=[];
}

$done({ body: JSON.stringify(body)});