var app = require('koa')();
var router = require('koa-router')();

var signInData = require('./sign.js');
router.post('/h5/personal/checkin', function *(next) {
    console.log('签到');

    // 参数
    // const params = this.params;
    // const lastGoodsId = params.id;
    console.log(signInData);

    this.body = signInData;
});
router.post('/h5/personal', function *(next) {
    this.body = {
        nickname: '小禾登',
        score: 4,
        myscoretop: 100
    }
});

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);