var data1;
let search = function(keyword){       //定义请求地区天气的函数
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://www.tianqiapi.com/free/day?appid=21987411&appsecret=Xlj9SF7r&city='+keyword);
    xhr.send();
    xhr.onreadystatechange=function(){
            if (xhr.readyState===4){
                if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                    let data = JSON.parse(xhr.response);
                    // console.log(data);
                    let city_name = document.getElementById('city_name');
                    let middle_tem = document.getElementById('middle_tem');
                    let middle_weather = document.getElementById('middle_weather')
                    let wind = document.getElementById('wind');
                    let img = document.getElementById('back');
                    city_name.innerHTML = data.city;
                    middle_tem.innerHTML = data.tem+'° &nbsp';
                    middle_weather.innerHTML = data.wea;
                    wind.innerHTML = data.win+' &nbsp&nbsp&nbsp&nbsp'+data.win_speed;
                    img.src = 'img2/'+data.wea_img+'.jpg';
                }
            }
        }
    const xhr0 = new XMLHttpRequest();
    xhr0.open('GET','https://www.tianqiapi.com/free/week?appid=21987411&appsecret=Xlj9SF7r&city='+keyword);
    xhr0.send();
    xhr0.onreadystatechange=function(){
            if (xhr0.readyState===4){
                if(xhr0.status>=200&&xhr0.status<300||xhr0.status==304){
                    let data0 = JSON.parse(xhr0.response);
                    // console.log(data0);
                    let today_img = document.getElementById('logo1');
                    let tomorrow_img = document.getElementById('logo2');
                    let today_wea = document.getElementById('weather1');
                    let tomorrow_wea = document.getElementById('weather2');
                    let today_tem = document.getElementById('temperature1');
                    let tomorrow_tem = document.getElementById('temperature2');
                    
                    today_wea.innerHTML = data0.data[0].wea;
                    tomorrow_wea.innerHTML = data0.data[1].wea;
                    today_tem.innerHTML = data0.data[0].tem_day+'/'+data0.data[0].tem_night+'°';
                    tomorrow_tem.innerHTML = data0.data[1].tem_day+'/'+data0.data[1].tem_night+'°';
                    today_img.src = 'img1/'+data0.data[0].wea_img+'.png';
                    tomorrow_img.src = 'img1/'+data0.data[1].wea_img+'.png';
                    let day_tem1 = data0.data[0].tem_day;
                    let day_tem2 = data0.data[1].tem_day;
                    let day_tem3 = data0.data[2].tem_day;
                    let day_tem4 = data0.data[3].tem_day;
                    let day_tem5 = data0.data[4].tem_day;
                    let day_tem6 = data0.data[5].tem_day;
                    let day_tem7 = data0.data[6].tem_day;

                    let night_tem1 = data0.data[0].tem_night;
                    let night_tem2 = data0.data[1].tem_night;
                    let night_tem3 = data0.data[2].tem_night;
                    let night_tem4 = data0.data[3].tem_night;
                    let night_tem5 = data0.data[4].tem_night;
                    let night_tem6 = data0.data[5].tem_night;
                    let night_tem7 = data0.data[6].tem_night;

                    let day1 = data0.data[0].date;
                    let day2 = data0.data[1].date;
                    let day3 = data0.data[2].date;
                    let day4 = data0.data[3].date;
                    let day5 = data0.data[4].date;
                    let day6 = data0.data[5].date;
                    let day7 = data0.data[6].date;
                    //图表echarts
                    var chartDom = document.getElementById('main');
                    var myChart = echarts.init(chartDom);
                    var option;
                    option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: [day1, day2, day3, day4, day5, day6, day7],
                            show:false,
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} °C'
                            },
                            show:false,
                        },
                        series: [
                            {
                                name: '最高气温',
                                type: 'line',
                                data: [day_tem1, day_tem2, day_tem3, day_tem4, day_tem5, day_tem6, day_tem7],
                            },
                            {
                                name: '最低气温',
                                type: 'line',
                                data: [night_tem1, night_tem2, night_tem3, night_tem4, night_tem5, night_tem6, night_tem7],
                            }
                                ]
                    };
                    option && myChart.setOption(option);
                }
            }
        }
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET','https://v0.yiketianqi.com/api?version=v62&appid=21987411&appsecret=Xlj9SF7r&city='+keyword);
    xhr1.send();
    xhr1.onreadystatechange=function(){
            if (xhr1.readyState===4){
                if(xhr1.status>=200&&xhr1.status<300||xhr1.status==304){
                    data1 = JSON.parse(xhr1.response);
                    // console.log(data1);
                    let txt = document.getElementsByClassName('txt');
                    let hours1 = document.getElementsByClassName('hours_img');
                    let hours_tem = document.getElementsByClassName('hours_tem');
                    let number = document.getElementById('number');
                    let wear = document.getElementById('wear');
                    let umbrella = document.getElementById('unbrella');
                    let car = document.getElementById('car');
                    let sport = document.getElementById('sport');
                    let sunrise = document.getElementById('sunrise');
                    let fish = document.getElementById('fish');
                    let tour = document.getElementById('tour');
                    let transport = document.getElementById('transport');
                    let pollution = document.getElementById('pollution');
                    let comfort = document.getElementById('comfort');
                    let cloth = document.getElementById('cloth');
                    let face = document.getElementById('face');
                    let exercise = document.getElementById('exercise');
                    let guomin = document.getElementById('guomin');
                    let stomach = document.getElementById('stomach');
                    for (let i = 0; i < 25; i++) {
                        txt[i].innerHTML=data1.hours[i].hours;
                        hours1[i].src = 'img1/'+data1.hours[i].wea_img+'.png';
                        hours_tem[i].innerHTML = data1.hours[i].tem+'°';
                    }
                    let place = data1.zhishu;
                    exercise.innerHTML = place.chenlian.level;
                    wear.innerHTML = place.chuanyi.level;
                    umbrella.innerHTML = place.daisan.level;
                    fish.innerHTML = place.diaoyu.level;
                    stomach.innerHTML = place.ganmao.level;
                    cloth.innerHTML = place.liangshai.level;
                    tour.innerHTML = place.lvyou.level;
                    car.innerHTML = place.xiche.level;
                    sunrise.innerHTML = place.ziwaixian.level;

                }
            }
        }
    const day7 = new XMLHttpRequest();
    day7.open('GET','https://v0.yiketianqi.com/api?version=v9&appid=21987411&appsecret=Xlj9SF7r&city='+keyword);
    day7.send();
    day7.onreadystatechange=function(){
            if (day7.readyState===4){
                if(day7.status>=200&&day7.status<300||day7.status==304){
                    let data2 = JSON.parse(day7.response);
                    let date = document.getElementsByClassName('date');
                    let weather = document.getElementsByClassName('weather');
                    let weather_night = document.getElementsByClassName('weather_night');
                    let img7_day = document.getElementsByClassName('days7_img');
                    let img7_night = document.getElementsByClassName('days7_night');
                    let wind = document.getElementsByClassName('wind');
                    let wind_level = document.getElementsByClassName('wind_level');
                    for(let i = 0;i<7;i++){
                        date[i].innerHTML = data2.data[i].date;
                        weather[i].innerHTML = data2.data[i].wea_day;
                        weather_night[i].innerHTML = data2.data[i].wea_night;
                        img7_day[i].src = 'img1/'+data2.data[i].wea_day_img+'.png';
                        img7_night[i].src = 'img1/'+data2.data[i].wea_night_img+'.png';
                        wind[i].innerHTML = data2.data[i].hours[0].win;
                        wind_level[i].innerHTML = data2.data[i].win_speed;
                    }
                        
                }
            }
        }
    }
let weather_page = function(){
    document.getElementById('search1').className = 'search1';
    document.getElementById('weather_page').className = 'search2';
}
let search_page = function(){
    document.getElementById('search1').className = 'search2';
    document.getElementById('weather_page').className = 'search1';
}
let text = document.getElementById('text');
document.onkeydown = function(event){
    event = event || window.event;
    if(event.keyCode==13){
        text = text.value;
        search(text);
        weather_page();
    }
}
let chart = document.getElementById('head_location');
chart.onclick = function(){
    search_page();
}
let cancel = document.getElementsByClassName('cancel')[0];
cancel.onclick = function(){
    weather_page();
}
let beijing = document.getElementById('beijing');
let shanghai = document.getElementById('shanghai');
let guangzhou = document.getElementById('guangzhou');
let shenzhen = document.getElementById('shenzhen');
let zhengzhou = document.getElementById('zhengzhou');
let xian = document.getElementById('xian');
let nanjing = document.getElementById('nanjing');
let hangzhou = document.getElementById('hangzhou');
let wuhan = document.getElementById('wuhan');
let chengdu = document.getElementById('chengdu');
let shenyang = document.getElementById('shenyang');
let tianjin = document.getElementById('tianjin');
beijing.onclick = function(){
    let keyword = beijing.innerHTML;
    search(keyword);
    weather_page();
}
shanghai.onclick = function(){
    let keyword = shanghai.innerHTML;
    search(keyword);
    weather_page();
}
guangzhou.onclick = function(){
    let keyword = guangzhou.innerHTML;
    search(keyword);
    weather_page();
}
shenzhen.onclick = function(){
    let keyword = shenzhen.innerHTML;
    search(keyword);
    weather_page();
}
zhengzhou.onclick = function(){
    let keyword = zhengzhou.innerHTML;
    search(keyword);
    weather_page();
}
xian.onclick = function(){
    let keyword = xian.innerHTML;
    search(keyword);
    weather_page();
}
nanjing.onclick = function(){
    let keyword = nanjing.innerHTML;
    search(keyword);
    weather_page();
}
hangzhou.onclick = function(){
    let keyword = hangzhou.innerHTML;
    search(keyword);
    weather_page();
}
wuhan.onclick = function(){
    let keyword = wuhan.innerHTML;
    search(keyword);
    weather_page();
}
chengdu.onclick = function(){
    let keyword = chengdu.innerHTML;
    search(keyword);
    weather_page();
}
shenyang.onclick = function(){
    let keyword = shenyang.innerHTML;
    search(keyword);
    weather_page();
}
tianjin.onclick = function(){
    let keyword = tianjin.innerHTML;
    search(keyword);
    weather_page();
}
let ul= document.getElementById('ul1')
let startX = 0;
let moveX = 0;
let index = 1;
let focus1 = document.getElementById('live');
focus1.offsetWidth = 0
var w;

ul.ontouchstart = function(e){
    startX = e.targetTouches[0].pageX;
    w = focus1.offsetWidth-750;
    // console.log(w);
}
ul.ontouchmove = function(e){
    moveX = e.targetTouches[0].pageX - startX;
    // console.log(moveX);
    let translateX = -index*w +moveX;
    ul.style.transition = 'none'; //取消过渡
    ul.style.transform = 'translateX('+translateX+'px)';
}//底部滑动图
ul.ontouchend = function(e){
    // moveX = e.targetTouches[0].pageX - startX;
    if(Math.abs(moveX)>50){
        if(moveX>0){
            index = 0;
        }
        else{
            index=1;
        }
    }
    var translatex = -index*375;
    // console.log(translatex);
    ul.style.transition = 'all .3s';
    ul.style.transform = 'translateX('+translatex+'px)';

}

//弹出窗口
let win_btn = document.getElementsByClassName('win_btn')[0];
let win_alert = document.getElementsByClassName('win_hide')[0];
// let cover = document.getElementsByClassName('cover')[0];
let win_alert_hide = document.getElementsByClassName('win_alert_hide')[0];
let win_h3 = document.getElementsByClassName('win_h3')[0];
let win_p = document.getElementsByClassName('win_p')[0];
let win_up = function(){
    win_alert.className = 'win_show';
    // cover.className = 'show1';
    win_alert_hide.className = 'win_alert';
}
let win_down = function(){
    win_alert.className = 'win_hide';
    win_alert_hide.className = 'win_alert_hide';
}
win_btn.onclick=()=>{
    win_down();
}
car.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.xiche.tips;
    win_h3.innerHTML = '洗车指数';
}
sport.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.chenlian.tips;
    win_h3.innerHTML = '运动指数';
}
sunrise.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.ziwaixian.tips;
    win_h3.innerHTML = '防晒指数';
}
fish.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.diaoyu.tips;
    win_h3.innerHTML = '钓鱼指数';
}
cloth.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.liangshai.tips;
    win_h3.innerHTML = '晾晒指数';
}
face.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.ziwaixian.tips;
    win_h3.innerHTML = '化妆指数';
}
exercise.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.chenlian.tips;
    win_h3.innerHTML = '晨练指数';
}
guomin.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.ganmao.tips;
    win_h3.innerHTML = '过敏指数';
}
number.onclick = ()=>{
    win_up();
    win_p.innerHTML = '4和9';
    win_h3.innerHTML = '尾号指数';
}
wear.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.chuanyi.tips;
    win_h3.innerHTML = '穿衣指数';
}
umbrella.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.daisan.tips;
    win_h3.innerHTML = '雨伞指数';
}
stomach.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.ganmao.tips;
    win_h3.innerHTML = '感冒指数';
}
tour.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.lvyou.tips;
    win_h3.innerHTML = '旅游指数';
}
transport.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.diaoyu.tips;
    win_h3.innerHTML = '交通指数';
}
pollution.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.diaoyu.tips;
    win_h3.innerHTML = '空气指数';
}
comfort.onclick = ()=>{
    win_up();
    win_p.innerHTML = data1.zhishu.chenlian.tips;
    win_h3.innerHTML = '舒适指数';
}

search('重庆');