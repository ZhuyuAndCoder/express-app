var color = '#0099ff';//图表中字体颜色
var costumerData = [{title:'亿级',value:2},{title:'千万级',value:856},{title:'百万级',value:1167}];
var transData = [{name:'牵引车',value:609},{name:'集装箱车',value:1540},{name:'平板货车',value:3877},{name:'普通货车',value:3827},{name:'厢式货车',value:1113},{name:'其他',value:404}];
//运单数据
var exl = [
    ['粤BEF637',"电子产品及配件","1000","16","60"],
    ['粤BE0644',"电子配件","1000","14","55"],
    ['贵C75421',"酒水","70","0.65","1"],
    ['浙K66L01',"酒水","85","0.89","1"],
    ['苏E87007',"手机","50",,"1"],
    ['苏BL0098',"发动机配件B04","144","2.4",],
    ['浙A23212',"汽车配件","122","21",],
    ['浙FA7808',"配件R17B5-1","1","2",],
    ['苏BM3128',"乳化剂17B04","1","9.1",],
    ['皖S57192',"槽罐","1",,"24.5"],
    ['云AZ2973',"卷烟","1200",,"100"],
    ['云A362LH',"卷烟","3000",,"160"],
    ['云C9P330',"卷烟","2000",,"140"],
    ['沪C1178A',"发动机B02","144","24",],
    ['皖C84280',"包裹","160","12",],
    ['沪D90582',"包裹","180","12",],
    ['皖A7T499',"包裹","300","30",],
    ['皖A47469',"包裹","165","12",],
    ['湘AB649T',"手机","636","8.56",],
    ['湘AB6302',"手机","154","2.29",],
    ['湘FCK639',"手机","200","2.782",],
    ['湘A7Z28D',"手机","338","3.509",],
    ['沪DL8197',"包裹","170","12",],
    ['皖LB4477',"包裹","175","12",],
    ['沪D66130',"包裹","190","12",],
    ['皖CA2077',"包裹","150","12",],
    ['皖KK7152',"包裹","170","12",],
    ['苏E5J536',"包裹","290","30",],
    ['赣CB6591',"家用空调","146",,"131.79"],
    ['粤BR6871',"家用空调","141",,"126.95"],
    ['皖C95131',"家用空调","136",,"122.17"],
    ['苏CGE805',"家用空调","172",,"154.8"],
    ['苏H0802W',"家用空调","180",,"162.12"],
    ['湘CBB228',"手机","350","4.55",],
    ['湘A00FG5',"手机","420","5.46",],
    ['湘CK119L',"手机","222","2.886",],
    ['湘B2H103',"手机","375","4.875",],
    ['湘D278JD',"手机","190","2.47",],
    ['苏NC9253',"家用空调","182",,"163.45"],
    ['苏H14617',"家用空调","184",,"165.58"],
    ['豫N78030',"家用空调","167",,"150"],
    ['皖N96449',"家用空调","184",,"166"],
    ['沪D90582',"包裹","180","12",],
    ['皖A7S423',"包裹","300","30",],
    ['皖A47469',"包裹","160","12",],
    ['沪D66130',"包裹","160","12",],
    ['皖LB4477',"包裹","160","12",],
    ['皖KE9130',"家用空调","182",,"164"],
    ['皖NF3566',"家用空调","146",,"131"],
    ['皖KE9130',"家用空调","154",,"139"],
    ['皖KE9130',"家用空调","136",,"122"],
    ['豫CC5110',"红木","1200","31.8",],
    ['豫B4V025',"红木","1500","33.32",],
    ['豫A37990',"红木","1400","31.74",],
    ['豫CC7741',"红木","1500","32.1",],
    ['皖S1E730',"家用空调","179",,"161"],
    ['皖S77762',"家用空调","182",,"164"],
    ['苏A74791',"家用空调","179",,"161"],
    ['皖S1E115',"家用空调","179",,"161"],
    ['苏MF2001',"家用空调","184",,"166"],
    ['皖LB4477',"包裹","180","12",],
    ['皖AC6237',"包裹","200","12",],
    ['苏E3X896',"包裹","195","12",],
    ['苏E5J536',"包裹","290","30",],
    ['皖KE8586',"家用空调","160",,"144"],
    ['皖S77905',"家用空调","177",,"159"],
    ['沪DL8197',"包裹","160","12",],
    ['皖A7J381',"家用空调","140",,"126"],
    ['皖KL8175',"家用空调","151",,"136"],
    ['川R69862',"养殖设备","100","16",],
    ['吉AS6159',"养殖设备","100","16",],
    ['川R48217',"养殖设备","100","16",],
    ['川R61746',"养殖设备","100","16",],
    ['苏M06010',"家用空调","136","122"],
    ['豫AN2181',"家用空调","143","129"],
    ['皖A7G363',"家用空调","152","137"],
    ['沪DR7381',"包裹","160","12",],
    ['闽E56670',"家用空调","129",,"116"],
    ['皖S2R893',"家用空调","174",,"157"],
    ['皖S2M920',"家用空调","136",,"122"],
    ['皖C18009',"家用空调","134",,"121"],
    ['苏B77985',"配件","2","1.655",],
    ['浙A5F191',"配件","44","16.772",],
    ['沪DF5967',"配件","18","6.59",],
    ['皖S2K783',"配件","3","1",],
    ['皖S59248',"家用空调","177",,"159"],
    ['豫P2Z218',"家用空调","180",,"162"],,
    ['皖KG6328',"家用空调","112",,"101"],
    ['闽E56780',"家用空调","151",,"136"],
    ['皖A7S385',"包裹","300","30",],
    ['皖KJ8196',"家用空调","179",,"160.8"],
    ['皖S77762',"家用空调","174",,"157"],
    ['苏MF2001',"家用空调","167",,"150"],,
    ['皖KG3593',"家用空调","150",,"135"],
    ['皖K68017',"配件","4","3.486",],
    ['浙A88815',"配件","5","1.528",],
    ['皖KF9958',"配件","1","1",],
    ['皖S98460',"配件","5","1.45",],
    ['皖KL6713',"家用空调","188",,"169"],
    ['豫N27595',"家用空调","119",,"107"],
    ['豫PX7666',"家用空调","149",,"134"],
    ['皖AC6237',"包裹","170","12",],
    ['豫N67523',"家用空调","163",,"147"],
    ['豫PJ1871',"家用空调","159",,"143"],
    ['豫P5C590',"家用空调","162",,"146"],
    ['豫P52739',"家用空调","136",,"122"],
    ['豫HJ8586',"家用空调","144",,"130"],
    ['豫P6G389',"家用空调","169",,"152"],
    ['豫G25868',"家用空调","188",,"169"],
    ['晋KA3581',"洗衣机","156",,"140.563"],
    ['沪D32421',"包裹","180","12",],
    ['晋KN0529',"洗衣机","159",,"143.284"],
    ['晋RN4565',"洗衣机","167",,"150.314"],
    ['鄂AHT159',"家用空调","62",,"55.78"],
    ['豫P3B990',"家用空调","65",,"58.42"],
    ['鄂ALR997',"家用空调","64",,"57.21"],
    ['鄂AHT159',"家用空调","62",,"55.79"],
    ['豫K21960',"家用空调","67",,"59.91"],
    ['豫C82058',"家用空调","63",,"56.41"],
    ['赣CJ6102',"家用空调","67",,"60.28"],
    ['鄂AHT159',"家用空调","62",,"55.55"],
    ['赣OH0266',"家用空调","267",,"240"],
    ['皖S72120',"家用空调","186",,"167"],
    ['苏AE8839',"家用空调","178",,"160.01"],
    ['皖S75648',"家用空调","179",,"161"],
    ['苏BB1571',"家用空调","132",,"119"],
    ['浙J27833',"汽配","5","4.739",],
    ['鲁DG6985',"汽配","10","4.67",],
    ['皖S2N568',"汽配","11","6.715",],
    ['皖S2W019',"汽配","10","4.67",],
    ['皖KG3593',"家用空调","198",,"178"],
    ['辽D80657',"家用空调","132",,"119"],
    ['皖A7F163',"家用空调","132",,"119"],
    ['皖N91610',"家用空调","132",,"119"],
    ['皖KK6638',"家用空调","197",,"177"],
    ['皖S2G055',"汽配","2","1.068",],
    ['皖S78228',"汽配","3","1.166",],
    ['苏CV9915',"汽配","12","5.604",],
    ['苏FD5786',"汽配","7","1",],
    ['皖KE0125',"家用空调","148",,"133"],
    ['沪EA4444',"包裹","165","12",],
    ['皖S1A706',"家用空调","154",,"139"],
    ['皖SB3121',"家用空调","154",,"139"],
    ['豫AZ3825',"家用空调","128",,"115.1"],
    ['浙A6S777',"家用空调","136",,"122.5"],
    ['赣B38469',"家用空调","149",,"134"],
    ['晋KB8259',"洗衣机","152",,"136.408"],
    ['赣B38469',"家用空调","62",,"55.54"],
    ['苏NBB573',"家用空调","57",,"51.38"],
    ['皖CA0153',"家用空调","61",,"54.69"],
    ['浙A2E550',"汽配","35","7.86",],
    ['皖KL0881',"汽配","6","1.36",],
    ['沪DG1699',"汽配","12","3",],
    ['浙J55475',"汽配","3","1.93",],
    ['皖C91856',"家用空调","61",,"54.56"],
    ['皖S1E671',"家用空调","59",,"53.52"],
    ['皖S1A153',"家用空调","60",,"54.12"],
    ['皖S77359',"家用空调","62",,"55.43"],
    ['皖S77912',"家用空调","62",,"55.42"],
    ['沪ES7132',"包裹","185","12",],
    ['皖S59248',"家用空调","61",,"54.77"],
    ['皖M14801',"家用空调","62",,"55.71"],
    ['皖S77912',"家用空调","60",,"54.28"],
    ['赣K59170',"汽配","16","6.538",],
    ['浙A6L978',"汽配","240","33.364",],
    ['皖KD3067',"汽配","16","1",],
    ['浙A6R699',"汽配","12","5.604",],
    ['皖NF0276',"家用空调","197",,"177"],
    ['皖S77359',"家用空调","189",,"170"],
    ['苏MC6331',"家用空调","172",,"155"],
    ['皖LB4477',"包裹","160","12",],
    ['皖LA9609',"家用空调","150",,"135"],
    ['皖L85887',"家用空调","177",,"161"],
    ['皖AB6019',"包裹","295","30",],
    ['沪EA3556',"包裹","175","12",],
    ['沪DL8197',"包裹","165","12",],
    ['苏MJ6911',"白酒","11","1","76"],
    ['皖C93029',"纯电动客车","1","15",],
    ['沪DS3728',"包裹","180","12",],
    ['晋M30639',"纯电动客车","1","15",],
    ['皖LB5876',"纯电动客车","1","15",],
    ['皖LA5053',"纯电动客车","1","15",],
    ['苏E6R196',"广坤","111","11",],
    ['皖C15297',"家用空调","156",,"140"],
    ['苏M36107',"家用空调","180",,"162"],
    ['皖C15297',"家用空调","193",,"174"],
    ['皖KJ3883',"家用空调","153",,"138"],
    ['苏M21886',"家用空调","180",,"162"],
    ['皖A7N065',"包裹","290","30",],
    ['赣CT9712',"包裹","165","12",],
    ['沪EJ6083',"包裹","185","12",],
    ['皖A7T499',"包裹","290","30",],
    ['沪DR7381',"包裹","165","12",],
    ['沪DL8197',"包裹","170","12",],
    ['皖A7R022',"包裹","175","12",],
    ['豫Q28091',"阳极板","20","31",],
    ['翼AV9662',"阳极板","32","30",],
    ['翼AV9662',"阳极板","20","30",],
    ['翼AKN981',"阳极板","23","30",],
    ['豫PG6095',"阳极板","30","32",],
    ['辽AW5149',"铬矿","1","16.546",],
    ['晋J1669X',"铬矿","1","19.646",],
    ['晋J1556X',"铬矿","1","21.94",],
    ['晋J3978X',"铬矿","1","20.008",],
    ['晋J1867X',"铬矿","1","14.12",],
    ['辽AW5149',"铬矿","1","17.18",],
    ['辽AW5126',"铬矿","1","16.98",],
    ['辽AS1686',"铬矿","1","10.307",],
    ['川B34539',"养殖设备","100","16",],
    ['冀BZ4562',"养殖设备","100","16",],
    ['皖LC1383',"发动机B02","144","24",],
    ['皖M97885',"家用空调","157",,"141"],
    ['皖M93330',"家用空调","172",,"155"],
    ['苏A74791',"家用空调","153",,"138"],
    ['赣DH0982',"家用空调","140",,"126.34"],
    ['皖A7R352',"家用空调","153",,"138"],
    ['皖HB5375',"小家电","181",,"163"],
    ['皖S77912',"家用空调","156",,"140"],
    ['皖S77359',"家用空调","196",,"176"],
    ['皖KE1336',"家用空调","144",,"130"],
    ['皖M18829',"家用空调","184",,"166"],
    ['豫B4V993',"红木","1600","31.94",],
    ['豫B60328',"红木","1800","31.82",],
    ['豫A7159H',"红木","1800","31.58",],
    ['豫C008K2',"红木","1900","32.78",],
    ['豫D76T29',"红木","2000","31.9",],
    ['皖C84280',"包裹","175","12",],
    ['沪D90582',"包裹","170","12",],
    ['皖A7S385',"包裹","290","30",],
    ['苏AN9598',"家用空调","142",,"128"],
    ['皖S77359',"家用空调","160",,"144"],
    ['皖S77912',"家用空调","119",,"107"],
    ['苏M02929',"家用空调","134",,"121"],
    ['沪ES7132',"包裹","215","12",],
    ['沪DL8197',"包裹","195","12",],
    ['沪DL8197',"包裹","208","12",],
    ['沪EA3556',"包裹","215","12",],
    ['皖S1E140',"包裹","205","12",],
    ['皖NB4898',"发动机B02","144","24",],
    ['沪D90582',"包裹","210","12",],
    ['皖AB6019',"包裹","300","30",],
    ['沪C88L10',"AD钙奶饮料220g(1*24)(提手礼盒装)","1750","10.325",],
    ['皖M98905',"广西版二代钙奶100g(1*48)","550","29.7",],
    ['皖LB2229',"促销广西版非定价版纯净水596ml(1*24)","299","20.19",],
    ['苏E6R196',"方瓶冰红茶1kg(1*12)","210","25.55",],
    ['皖NA6768',"方瓶冰红茶1kg(1*13)","200","24.99",],
    ['皖NB5008',"促销广西版非定价版纯净水596ml(1*24)","270","21",],
    ['皖LA5053',"促销广西版非定价版纯净水596ml(1*24)","280","21.9",],
    ['鲁PH5208',"广西版二代钙奶100g(1*48)","570","30.1",],
    ['川A98562',"广西版二代钙奶100g(1*48)","560","29.75",],
    ['皖NB7104',"AD钙奶饮料220g(1*24)(提手礼盒装)","1600","11.85",],
    ['皖KK9220',"家用空调","146",,"131"],
    ['皖S77359',"家用空调","202",,"182"],
    ['皖KE0125',"家用空调","139",,"125"],
    ['皖KG7128',"家用空调","157",,"141"],
    ['沪EP3691',"养殖设备","100","16",],
    ['鲁H7F625',"养殖设备","100","16",],
    ['辽AC1663',"养殖设备","100","16",],
    ['川R64117',"养殖设备","100","16",],
    ['皖S78620',"铝制品","1","32.734",],
    ['云AZ2970',"烟草","120","1",],
    ['浙A2M517',"红酒","600","7.7",],
    ['沪D08659',"红酒","350","3.9",],
    ['苏FN8157',"红酒","90","1",],
    ['沪DJ1067',"红酒","800","26.86",],
    ['皖KJ3883',"家用空调","145",,"130.51"],
    ['皖KL1885',"家用空调","160",,"143.8"],
    ['皖KN2181',"家用空调","178",,"160"],
    ['皖KM9581',"家用空调","168",,"151"],
    ['皖C20335',"配件","2","0.945",],
    ['皖SA2572',"配件","1","1",],
    ['皖KH9785',"配件","9","12.051",],
    ['皖KL0862',"配件","3","3.81",],
    ['皖KA3191',"配件","1","1",],
    ['皖KE3768',"家用空调","177",,"159"],
    ['苏H10039',"家用空调","183",,"165"],
    ['苏NU7392',"家用空调","183",,"165"],
    ['皖NA9190',"家用空调","132",,"119"],
    ['皖KF9237',"配件","4","3.243",],
    ['皖C14292',"配件","4","5.006",],
    ['浙A0N376',"配件","131","23.409",],
    ['豫PF0811',"配件","4","1.427",],
    ['苏CAP295',"配件","2","1.429",],
    ['皖NA9190',"家用空调","180",,"162"],
    ['皖SB3121',"家用空调","210",,"189"],
    ['皖SB0777',"家用空调","181",,"163.2"],
    ['皖KE9188',"家用空调","173",,"155.55"],
    ['皖KH2392',"汽配","20","12.607",],
    ['浙D30967',"汽配","13","5.252",],
    ['沪EC1082',"汽配","12","5.604",],
    ['苏NAV661',"家用空调","61",,"54.77"],
    ['苏NBB015',"家用空调","62",,"55.62"],
    ['皖S97812',"家用空调","59",,"52.65"],
    ['苏H14621',"家用空调","63",,"56.53"],
    ['沪DG3852',"汽配","6","3.338",],
    ['浙A2N382',"汽配","16","8.83",],
    ['皖S55013',"汽配","56","30.882",],
    ['苏JF5737',"汽配","1","0.1",],
    ['苏JU6888',"汽配","4","1.96",],
    ['皖M6F453',"家用空调","61",,"55.03"],
    ['皖M6E516',"家用空调","63",,"56.39"],
    ['苏NE3051',"家用空调","64",,"57.69"],
    ['苏H10039',"家用空调","61",,"54.8"],
    ['浙A2L501',"汽配","1","0.15",],
    ['沪DL9407',"汽配","87","9.129",],
    ['浙A9L068',"汽配","26","31.664",],
    ['沪D66130',"包裹","190","12",],
    ['皖CA2077',"包裹","201","12",],
    ['皖A7S432',"包裹","290","30",],
    ['皖LB4477',"包裹","220","12",],
    ['苏F59831',"汽配","18","25.73",],
    ['浙A5M766',"汽配","32","19.6",],
    ['苏BW8832',"汽配","26","12.563",],
    ['苏E6R196',"聚丙烯","100","30",],
    ['皖LB2229',"聚丙烯","90","28",],
    ['皖M98905',"玻璃","51","32.2",],
    ['皖A7R546',"发动机B02","144","24",],
];
var jsonArr = exl.map(function(item){
    return {carNum:formatCarNum(item[0]||''),name:item[1]||'',number:toThousands(item[2])||'-',weight:item[3]||'-',volume:item[4]||'-'}
})
var NEWDATA = {22:404820,23:404820,25:404820,26:422100,27:439380,28:456660,29:473940};//每天的上限量
var isProduction = location.hostname.indexOf('test') < 0;
var url = isProduction ? 'http://scm.tf56.com/scmCloudWeb/index/getServerTime.do' : 'http://scmtest.tf56.com/scmCloudWeb/index/getServerTime.do';
url = 'http://scmtest.tf56.com/scmCloudWeb/index/getServerTime.do';
//获取服务器时间,设置为当前页面的时间
var time = new Date();
function getServerTime(callback){
    G.ajax({
        data: {},
        url: url,
        'X-Requested-With':'XMLHttpRequest',
        callback: function successHandler(data){
            if (data) {
                var code = data.code;
                if (code === '00000') {
                    time = new Date(data.module);
                }
            }
            callback&&callback(time)
        }
    });
}
//定义函数：构建要显示的时间日期字符串
function showTime(date) {
    let today = date;
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    month  = month<10  ? "0"+month : month;
    day  = day <10  ? "0"+day : day;
    hours  = hours<10  ? "0"+hours : hours;
    minutes = minutes<10 ? "0"+minutes : minutes;
    seconds = seconds<10 ? "0"+seconds : seconds;

    let str = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    time = new Date(str);
    $("#time").html(str);
    window.setTimeout(function(){
        //加一秒
        time = new Date(new Date(time).getTime()+1000);
        showTime(time);
    },1000);
}
//处理车牌
function formatCarNum(str) {
    var temp1 = str.substring(0,3);
    var temp2 = str.substring(6);
    return temp1+'***'+temp2;
}
// 千分位
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
//【本月新增】：5月26日9点从404820开始，每15秒加1，动态增加效果。
function getData(time){
    var today = new Date(time).getDate();
    var yesterday = today -1;
    var total = NEWDATA['25'];
    if(NEWDATA[today+'']&&NEWDATA[yesterday+'']){
        total = NEWDATA[yesterday+''];
        var divisor = 15*1000;//15秒
        //获取今天 9:00:00毫秒数
        var ruleTime = new Date(2018,4,today,9,0,0).getTime();
        var todayTime = new Date().getTime();
        var gap = todayTime - ruleTime;
        if(gap>0){
            var val = parseInt(gap/divisor);
            total+=val;
            if(total>=NEWDATA[today+'']){//到达上限
                total = NEWDATA[today+''];
            }
        }
        return total;
    }else{
        //超过五月29号就显示29号的上限值
        var maxTime = new Date(2018,4,29,18,0,0).getTime();
        var nowTime = new Date().getTime();
        if(nowTime>maxTime){
            return NEWDATA['29'];
        }
    }
    return total;
}
//滚动表格
var speed = 3000;
var table = document.getElementById('table');
var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');
var tableData = $('#tableData');

jsonArr.forEach(function(item){
    tableData.append('<tr><td><div class="circle"></div>'+item.carNum+'</td><td title="'+item.name+'">'+item.name+'</td><td>'+item.number+'</td><td>'+item.weight+'</td><td>'+item.volume+'</td></tr>')
})
table2.innerHTML = table1.innerHTML;
var interval;
function Marquee() {
    clearInterval(interval);
    var time=1000;
    var start=0;
    if (table2.offsetTop - table.scrollTop <= 0) {
        table.scrollTop -= table1.offsetHeight;
    } else {
        var top = table.scrollTop+36;
        $('#table').animate({scrollTop: top+'px'}, 1000);
    }
}

// table.onmouseover = function() {
//     clearInterval(MyMar);
// }
//
// table.onmouseout = function() {
//     MyMar = setInterval(Marquee, speed);
// }
//生成柱状图
function createBar(id,opt,callback) {
    require.config({
        paths: {
            echarts: './lib/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],
        function (ec) {
            let myChart = ec.init(document.getElementById(id));
            var option = {
                color:[color],
                tooltip: {
                    show:false,
                },
                toolbox: {
                    show:false
                },
                legend: {
                    show:false,
                    data:[]
                },
                grid:{
                    borderWidth:0,
                    x:20,
                    y:0,
                    x2:20,
                    y2:30,
                },
                calculable : false,
            };

            if(opt){
                option = $.extend(option,opt)
            }
            myChart.setOption(option);
            callback&&callback(myChart);
        }
    );
}
//生成饼状图
function createPie(id,opt) {
    require.config({
        paths: {
            echarts: './lib/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],
        function (ec) {
            let myChart = ec.init(document.getElementById(id));
            var option = {
                tooltip: {
                    show:false,
                },
                toolbox: {
                    show:false
                },
                legend: {
                    show:false,
                    data:[]
                },
                calculable : false,
            };

            if(opt){
                option = $.extend(option,opt)
            }
            myChart.setOption(option);
        }
    );
}
function createChart1(date){
    var baseData = NEWDATA['25'];
    var newData = getData(date);
    $('#newData').html(toThousands(newData));
    var data = [412560,337023,354816,402408,newData];
    var dataShadow =[];
    var max = Math.max.apply( Math, data );
    for(var i=1;i<=data.length;i++){
        dataShadow.push(max+100000);
    }
    var opt = {
        xAxis : [
            {
                type : 'category',
                splitLine:{show: false},//去除网格线
                data : ['1月','2月','3月','4月','5月'],
                axisLabel:{
                    textStyle:{
                        color:color
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false,
                splitArea : {show : true},//保留网格区域
                splitLine:{show: false},
                axisLabel:{
                    textStyle:{
                        color:color
                    }
                }

            }
        ],
        series : [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {color: '#071a4f'},
                    emphasis:{color: 'transparent'},
                },
                barCategoryGap:'70%',
                barGap:'-100%',//设置柱状图宽度时此属性失效
                data: dataShadow,
                z:1,
                animation: false
            },
            {
                name:'订单量',
                type:'bar',
                data:data,
                z:10,
                itemStyle: {
                    normal: {
                        label : {
                            show: true,
                            position: 'top',
                            textStyle:{
                                color:'#0099ff'
                            }
                        },
                        color:function (params) {
                            return ['#7179cb','#0098ff','#8dd06b','#ffb660','#fc7257'][params.dataIndex]
                        }
                    }
                },
            },
        ]
    };
    createBar('chart1',opt,function (echart) {
        setInterval(function(){
            var lastData = newData;
            newData=getData(time);
            if(lastData!=newData){
                $('#newData').html(toThousands(newData));
                let series = echart.getSeries();
                series[1].data.splice(series[1].data.length-1,1,newData)
                echart.setSeries(series)
            }
        },15000)
    })
}
function createChart2(){
    var data = [1360, 496, 677, 2681, 1992];
    var dataShadow =[];
    var max = Math.max.apply( Math, data );
    for(var i=1;i<=data.length;i++){
        dataShadow.push(5000);
    }
    var opt = {
        legend: {
            show:true,
            data:['总重量','总体积'],
            textStyle:{
                color:color
            }
        },
        tooltip:{
            show:false
        },
        grid:{
            borderWidth:0,
            x:80,
            y:40,
            x2:80,
            y2:20,
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月'],
                splitLine:{
                    show: false,
                },//去除网格线
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle:{
                        color:color
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '总重量',
                axisLabel: {
                    formatter: function(value){
                        return toThousands(value);
                    },
                    textStyle:{
                        color:color
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#0b1c82'
                    }
                },
            },
            {
                type: 'value',
                name: '总体积',
                interval: 7,
                axisLabel: {
                    formatter: function(value){
                        return toThousands(value);
                    },
                    textStyle:{
                        color:color
                    }
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color:'#0b1c82'
                    }
                },
            }
        ],
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {color: '#0352a0'},
                    emphasis:{color: 'transparent'},
                },
                barCategoryGap:'80%',
                barGap:'-100%',//设置柱状图宽度时此属性失效
                data: dataShadow,
                z:1,
                animation: false
            },
            {
                name:'总重量',
                type:'bar',
                data:data,
                itemStyle: {
                    normal: {
                        label : {
                            show: false, position: 'top'
                        },
                        color:function (params) {
                            return '#0099ff'
                        }
                    }
                },
            },
            {
                name:'总体积',
                type:'line',
                yAxisIndex: 1,
                data:[16034, 3725, 5925, 17954, 12647],
                itemStyle: {
                    normal: {
                        color:'#fd9929'
                    }
                },
            }
        ]
    };
    createBar('chart2',opt);
}
function createChart3(){
    var opt =   {
        legend: {
            orient : 'vertical',
            x : 'right',
            y:'bottom',
            textStyle:{
                color: color
            },
            itemGap:15,
            data:[{name:'制造业',icon:'circle'},{name:'批发和零售业',icon:'circle'},{name:'交通运输、仓储和邮政业',icon:'circle'},{name:'采矿业',icon:'circle'},{name:'农、林、牧、渔业',icon:'circle'},{name:'其他行业',icon:'circle'}],//{name:'制造业',icon:'circle'}
        },
        tooltip : {
            trigger: 'item',
        },
        calculable : false,
        series : [
            {
                name:'',
                type:'pie',
                radius : '100%',
                center: ['30%', '50%'],
                data:[
                    {value:186, name:'制造业'},
                    {value:80, name:'批发和零售业'},
                    {value:52, name:'交通运输、仓储和邮政业'},
                    {value:47, name:'采矿业'},
                    {value:40, name:'农、林、牧、渔业'},
                    {value:56, name:'其他行业'},
                ],
                itemStyle: {
                    normal: {
                        label:{            //饼图图形上的文本标签
                            show:true,
                            position:'inner', //标签的位置
                            textStyle : {
                                fontWeight : 300 ,
                                fontSize : 12    //文字的字体大小
                            },
                            formatter:'{d}%'
                        },
                        labelLine:{
                            show:false,
                        },
                        color:function (params) {
                            return ['#8dd06a','#fc7255','#8188d2','#4dceff','#7fdcff','#ffb660'][params.dataIndex]
                        }
                    }
                },
            }
        ]
    };
    createPie('chart3',opt);
}
function createChart5(){
    var data = [107183,92482,89351,78632,59703,28704,27867,12592,13000];
    var opt = {
        grid:{
            borderWidth:0,
            x:20,
            y:40,
            x2:20,
            y2:40,
        },
        xAxis : [
            {
                type : 'category',
                splitLine:{show: false},//去除网格线
                data : ['石家庄','南充','郑州','苏州','南充','长沙','青岛','杭州','武汉'],
                axisLabel:{
                    textStyle:{
                        color:color
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false,
                splitArea : {show : true},//保留网格区域
                splitLine:{show: false},
                axisLabel:{
                    textStyle:{
                        color:color
                    }
                }

            }
        ],
        series : [
            {
                name:'仓库面积',
                type:'bar',
                data:data,
                barWidth:20,
                itemStyle: {
                    normal: {
                        label : {
                            show: true, position: 'top'
                        },
                        color:function (params) {
                            return '#10ddd0';
                        }
                    }
                },
            },
        ]
    };
    createBar('chart5',opt)
}
//arr [{title:'',value:''}], 求和
function getSum(arr){
    var sum=0;
    for(var i in arr){
        sum+=arr[i].value;
    }
    return sum;
}
/**
 * 横向柱状图
 * @param options 数组，用生成柱状元素
 * */
$.fn.generateBar = function(options,flag){
    if(!options) return
    var self = $(this);
    var sum = getSum(options);
    if(!flag){
        options.forEach(function(item,i){
            var rate = (item.value/sum)*100;
            var width = rate+'%';
            self.append('<div class="progress"><span class="p-title">'+item.title+'</span><div class="p-bar"><div class="p-inner" style="width:'+width+'"></div></div><span class="p-value">'+toThousands(item.value)+'</span></div>')
        });
    }else{
        options.forEach(function(item,i){
            var width = (item.value/sum)*100+'%';
            self.append('<div class="progress opacity"><span class="p-title">'+item.title+'</span><div class="p-bar"><div class="p-inner" style="width:'+width+'"></div></div><span class="p-value">'+toThousands(item.value)+'</span></div>')
        });
    }

}
function createChart6(){
    var opt =   {
        calculable : false,
        series : [
            {
                name:'',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle: {
                    normal: {
                        label:{            //饼图图形上的文本标签
                            show:true,
                            align : 'center',
                            baseline : 'middle',
                            textStyle : {
                                fontWeight : 300 ,
                                fontSize : 12    //文字的字体大小
                            },
                            formatter:'{b}{d}%'
                        },
                        labelLine:{
                            show:true,
                        },
                        color:function (params) {
                            return ['#8dd06a','#fc7255','#8188d2','#4dceff','#7fdcff','#ffb660'][params.dataIndex]
                        }
                    }
                },
                data:transData
            }
        ]
    };
    createPie('chart6',opt);
}
//依赖初始时间计算的方法
function generateByTime(time){
    showTime(time);
    createChart1(time);
}
function init() {
    createChart2();
    createChart3();
    createChart5();
    createChart6();
    var MyMar = setInterval(Marquee, speed);
    $('#chart4').generateBar(costumerData);
    getServerTime(generateByTime);
}