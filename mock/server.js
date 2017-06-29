var app = require('koa')();
var router = require('koa-router')();

var signInData = require('./sign.js');
//签到
router.post('/h5/personal/checkin', function *(next) {
    console.log('签到');

    // 参数
    // const params = this.params;
    // const lastGoodsId = params.id;

    this.body = signInData;
});
//个人信息
router.post('/h5/personal', function *(next) {
    this.body = {
        nickname: '小禾登',
        score: 4,
        myscoretop: 100
    }
});
//排行表
var rankList = require('./rank');
var j = 0;
router.get('/h5/score/get_top', function *(next) {
    j++;
    if(j <= 2)
        this.body = rankList;
    else
        this.body = [];
});

//个人资料信息
router.post('/h5/personal/info', function *(next) {
    var info = {"nickname":"\u7480\u74a8\u661f\u5149","sex":1,"mobile":"13212903391","province_id":"","city_id":230100,"county_id":0,"address":"东北林业大学"};
    this.body = info;
});

//个人积分详情
var scoreDetail = require('./scoreDetail');
var i = 0;
router.post('/h5/score/get_detail', function *(next) {
    i ++;
    // if(i == 1)
        this.body = scoreDetail;
    // else
    //     this.body = [];
});
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);