<style scoped  lang="less">
@import "../assets/less/color.less";
.index-style{
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
}
.content{
    position: relative;
    height: 1080px;
    width: 1920px;
    padding:20px 63px;
    background: url("../assets/img/background.jpg") no-repeat;
    .title-name{
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        text-align: center;
        text-shadow:5px 2px 6px #004878;
    }
    .now-time{
        line-height: 20px;
        color:#00f6ff;
        width: 200px;
    }
    .now-time{
        position: absolute;
        line-height: 20px;
        top: 0;
        color:#00f6ff;
        width: 200px;
    }
    .select-center{
        width: e("calc(100% - 710px)");
        .center-head{
            position: relative;
            .right{
                right: 10px;
            }
            .left{
                left: 10px;
            }
        }
        .echart{
            height: 200px;
            width: 100%;
        }
    }
}

.blue{
    background: url("../assets/img/bule.png") no-repeat center;
}
.red{
    background: url("../assets/img/red.png") no-repeat center;
}
.yellow{
    background: url("../assets/img/yellow.png") no-repeat center;
}
.perpo{
    background: url("../assets/img/perpo.png") no-repeat center;
}
.title-name{
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-shadow:5px 2px 6px #004878;
}
.count{
  margin-top: 30px;
}
.count-title{
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}
.count-cld{
  width: 355px;
}
.center-title{
  line-height: 75px;
  padding-top: 45px;
  color: #00f6ff;
  font-size: 26px;
  font-weight: bold;
}
.down-left{
  width: 355px;
}
.down-center{
  width: 1050px;
  position: relative;
  .bottom-style{
      position: absolute;
      bottom: -175px;
      width: 1050px;
  }
  .map-info{
        width: 200px;
        height: 255px;
        position: absolute;
        right: 50px;
        top: 35px;
        background: url('../assets/img/mashright.png') no-repeat center;
        background-size: 100%;
        padding: 10px;
        td{
            padding: 5px;
            color: #00f6ff;
        }
  }
}
.down-right{
  width: 355px;
}
.small-count{
    width: 355px;
    height: 250px;
    padding: 0 10px;
    border: 1px solid @blue;
    border-radius:5px; 
    background: rgba(78,178,179,0.1);
    box-shadow:@blue 0px 0px 10px inset;
    .echart{
        height: 200px;
    }
}
.top-count{
    width: 355px;
    height: 230px;
    padding: 0 10px;
    border: 1px solid @blue;
    background: rgba(78,178,179,0.1);
    border-radius:5px; 
    box-shadow:@blue 0px 0px 10px inset;
    .echart{
        height: 180px;
    }
}
.small-title{
  height: 40px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.center-count{
    width: 350px;
    height: 250px;
    padding: 0 10px;
    border: 1px solid @blue;
    background: rgba(78,178,179,0.1);
    box-shadow:@blue 0px 0px 10px inset;
    #rateChart{
        height: 200px;
    }
    .scroll{
        height: 200px;
        overflow: hidden;
        padding: 0 20px;
        li{
            color: #fff;
            font-size: 14px;
            height: 25px;
            line-height: 25px;
            text-align: left;
        }
    }
}
.map-chart{
  width: 60%;
  height: 100%;
}
.build-map{
  .tutorial{
    width: 1050px;
    height: 600px;
    z-index: 3;
  }
}
.count-center{
    width: 25%;
    height: 100%;
    .color-blue{
        color: #00f6ff;
    }
    .color-red{
        color: #ff254b;
    }
    .color-yellow{
        color: #ffe001;
    }
    .color-perpo{
        color: #ad46f3;
    }
    .new-title{
        font-size: 18px;
        font-weight: bold;
        margin-top: 50px;
    }
}
.center-num{
    width: 100%;
    height: 30px;
    margin-top: 96px;
    overflow: hidden;
    // background: url("../assets/img/num-content.png") no-repeat center top;
    li {
        background: rgba(0,246,255,0.2);
        width: 20px;
        font-size: 16px;
        font-weight: bold;
        height: 30px;
        line-height: 30px;
        position: relative;
        margin-left: 1px;
        animation:mymovebige 1s;
        -webkit-animation:mymovebige 1s;
    }
    .no-color{
        width: 20px;
        color: rgba(0,0,0,0);
    }
}
@keyframes mymovebige
{
    0% { 
        width: 20px;
        height: 30px;
        margin-top: 30px;
    }
    100% {
    }
}
</style>
<template>
  <div class="index-style">
    <div class="content">
      <!-- 标题 -->
        <div class="clearfix mb15">
            <div class="top-count fl">
                <p class="small-title">旅客、货邮、航班小时趋势图</p>
                <div class="echart"  id="hourChart"></div>
            </div>
            <div class="fl select-center">
                <div class="center-head">
                    <p class="now-time left">{{nowTime}}</p>
                    <p class="title-name" @click="changeli">广州白云机场实时数据分析平台</p>
                     <p class="now-time right">{{forecast}}</p>
                </div>
                <div class="echart clearfix mgt">
                    <div class="count-center fl blue">
                        <ul class="center-num center">
                            <li class="color-blue" v-for="(item,index) in nowPeople" :class="{'no-color':item =='i'}" :key="index+item">{{item}}</li>
                        </ul>
                        <p class="new-title color-blue">实时旅客</p>
                    </div>
                    
                    <div class="count-center fr yellow">
                        <ul class="center-num center">
                            <li class="color-yellow" v-for="(item,index) in nowInternationalPeople" :class="{'no-color':item =='i'}" :key="index+item">{{item}}</li>
                        </ul>
                        <p class="new-title color-yellow">实时国际旅客</p>
                    </div>
                </div>
            </div>
            <div class="fl top-count">
                <p class="small-title">航班执行率</p>
                <div class="echart"  id="airRate"></div>
            </div>
        </div>
      <!-- 三大块内容 -->
      <div class="clear">
        <!-- 左侧表格 -->
        <div class="down-left fl mr18">
            <div class="small-count mb15">
              <p class="small-title" >旅客男女比重</p>
              <div class="echart"  id="gender"></div>
            </div>
            <div class="small-count mb15">
              <p class="small-title">机场代理比重</p>
              <div class="echart"  id="proportion"></div>
            </div>
            <div class="small-count">
              <p class="small-title">航站楼人均消费趋势</p>
              <div class="echart" id="consume"></div>
            </div>
        </div>
        <!-- 中间内容 -->
        <div class="down-center fl">
          <!-- 地图 -->
          <div class="build-map">
            <div id="canvas" class="tutorial"></div>
            <div id="tooltip" :style="{left:tootipPos.left+'px',top:tootipPos.top+'px',display:tootipPos.display}"></div>
          </div>
          <div class="map-info">
                <table>
                    <tr>
                        <td>航班进：</td>
                        <td>99999</td>
                    </tr>
                    <tr>
                        <td>航班出：</td>
                        <td>99999</td>
                    </tr>
                    <tr>
                        <td>XXXX：</td>
                        <td>XXXXXXXXXX</td>
                    </tr>
                </table>
          </div>
          <div class="clearfix bottom-style echart">
                <div class="count-center fl perpo">
                    <ul class="center-num center">
                        <li class="color-perpo" v-for="(item,index) in nowAirs" :class="{'no-color':item =='i'}" :key="index+item">{{item}}</li>
                    </ul>
                    <p class="new-title color-perpo" @click="changeMapCenter">实时航班</p>
                </div>
                <div class="count-center fr red">
                    <ul class="center-num center">
                        <li class="color-red" v-for="(item,index) in nowGoods" :class="{'no-color':item =='i'}" :key="index+item">{{item}}</li>
                    </ul>
                    <p class="new-title color-red">实时邮货</p>
                </div>
          </div>
        </div>
        <!-- 右侧图表 -->
        <div class="down-right fr">
            <div class="small-count mb15">
              <p class="small-title">执行率前5大机场业务量</p>
              <div class="echart" id="business"></div>
            </div>
            <div class="small-count mb15">
              <p class="small-title">5大航日靠桥率</p>
              <div class="echart" id="percentChart"></div>
            </div>
            <div class="small-count">
              <p class="small-title">靠桥率趋势图</p>
              <div class="echart" id="bridge"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const blue = '#0780df'     /*主颜色中危*/
const yellow = '#ff9f35'   /*主颜色高危*/
const red = '#e6453b'      /*主颜色严重*/
const grey = '#7289ab'     /*主颜色低危*/
const skyblue = '#01cbe3'

var echarts = require("echarts");
import 'echarts-gl';
import moment from "moment";
import { getWeather } from "../api"
import world from "../assets/img/world.jpg"
import 'echarts/map/js/world.js'
export default {
    name: 'index',
    data () {
        return {
            //地球
            chart:null,
            earthSkin:null,
            tootipPos:{
                left:0,
                top:0,
                display: 'none'
            },
            colors:{
                '严重':red,
                '高危':yellow,
                '中危':blue,
                '低危':grey,
            },
            earthData: [{
                attacked_point: [116.40, 39.90],
                attack_date: '2019-06-10 18:40:43',
                source_point: [123.43, 41.80],
                alert_level: '严重',           
                attacked_city: '北京',              
                source_city: '辽宁',                
                attack_count: 120,			
            },
            {
                attacked_point: [113.92, 22.52],    
                attack_date: '2019-02-18 18:40:43', 
                source_point: [123.43, 41.80],
                alert_level: '高危',           
                attacked_city: '深圳',           
                source_city: '辽宁',              
                attack_count: 250,			
            },
            {
                attacked_point: [84.87, 45.60],    
                attack_date: '2019-02-18 18:40:43',   
                source_point: [123.43, 41.80],
                alert_level: '中危',           
                attacked_city: '克拉玛依',           
                source_city: '辽宁',              
                attack_count: 250,           
            }],
            tootipEl: document.getElementById('tooltip'),
            
            //数量
            nowPeople:["i","i","i","i","3","5"],
            nowInternationalPeople:["i","i","i","1","1","5"],
            nowAirs:["i","i","i","4","1","5"],
            nowGoods:["i","i","i","i","1","8"],
            getData:{
                nowPeople:400,
                nowInternationalPeople:500,
                nowAirs:123,
                nowGoods:790
            },
            //时间
            nowTime:'',
            timeIntervals:null,
            forecast:null,
            //图表
            chartConsume:null,
            chartBridge:null,
            // rateChart:null,
            chartBusiness:null,
            chartHour:null,
            airRateChart:null,
            percentChart:null,
            proportionChart:null,
        }
    },
    mounted(){
        //图表
        this.setConsumeTrend();
        this.setBridgeTrend();
        this.setGenderPie();
        // this.ratePie();
        this.setBusinessChart();
        this.setHourChart();
        this.setAirRate();
        this.setPercent();
        this.setProportion();
            
        
        //日期
        this.timeIntervals = setInterval(this.getNowTime,1000);
        //天气
        let params = {};
        params.city = '广州';
        this.getWeather('广州');
        this.changeMap();
    },
    methods: {
        /* 地图 */
        changeMap(){
            let dataBar = this.setBarData();
            let option = {
                globe: [{
                    baseTexture: world,
                    heightTexture: world,
                    shading: 'color',
                    viewControl: {
                        autoRotate: false,
                        targetCoord: [116.46, 39.92]
                    }
                },{
                    baseTexture: world,
                    heightTexture: world,
                    shading: 'color',
                    viewControl: {
                        autoRotate: false,
                        targetCoord: [116.46, 39.92]
                    }
                }],
                series: [{
                    type: 'bar3D',
                    coordinateSystem: 'globe',
                    data:dataBar,
                    barSize: 1.2,
                    minHeight: 0.2,
                    globeIndex: 0 ,
                    silent: true,
                    itemStyle: {
                        color: 'orange'
                    }
                },{
                    type: 'lines3D',
                    coordinateSystem: 'globe',
                    globeIndex: 1 ,
                    effect: {
                            trailColor:'#fff',
                            show: true,
                            trailWidth: 3, 
                            constantSpeed:20,
                            trailLength: 0.2     
                        },
                        lineStyle:{
                            width: 2,
                            opacity: 0.5
                        },
                    data: this.earthData.map((item, i) =>({
                    coords: [item.source_point,item.attacked_point],
                    lineStyle: {
                        color: this.colors[item.alert_level]
                    }
                }))
                }]
            };
            this.chart = echarts.init(document.getElementById('canvas'));
            this.chart.setOption(option);
        },
        setBarData(){
            let data = this.earthData;
            return data.map((item,i) =>([item.attacked_point[0],item.attacked_point[1],item.attack_count]))
        },
        changeMapCenter(){
            this.chart.setOption({
                globe: [{
                    baseTexture: world,
                    heightTexture: world,
                    shading: 'color',
                    viewControl: {
                        autoRotate: false,
                        targetCoord: [116.46, 39.92]
                    }
                },{
                    baseTexture: world,
                    heightTexture: world,
                    shading: 'color',
                    viewControl: {
                        autoRotate: false,
                        targetCoord: [116.46, 39.92]
                    }
                }],
            },);
        },
        /* 实时天气 */
        getWeather(city){
            getWeather(city).then(res =>{
                let forecast = res.data.data.forecast;
                this.forecast = '天气: '+forecast[0].type +' '+ forecast[0].high +' ~ '+forecast[0].low;
            });
        },
        /* 实时日期 */
        getNowTime(){
            var vWeek,vWeek_s,vDay,year,month,day,hours,minutes,seconds;
            vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
            var date =  new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            hours = date.getHours();
            minutes = date.getMinutes();
            seconds = date.getSeconds();
            vWeek_s = date.getDay();
            this.nowTime = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
        },
        /* 实时数量 */
        changeli(){
            this.nowPeople = this.getData.nowPeople?this.changeNum(this.getData.nowPeople+"",6):["i","i","i","i","i","i","i"];
            this.nowInternationalPeople = this.getData.nowInternationalPeople?this.changeNum(this.getData.nowInternationalPeople+"",6):["i","i","i","i","i","i","i"];
            this.nowAirs = this.getData.nowAirs?this.changeNum(this.getData.nowAirs+"",6):["i","i","i","i","i","i","i"];
            this.nowGoods = this.getData.nowGoods?this.changeNum(this.getData.nowGoods+"",6):["i","i","i","i","i","i","i"];
        },
        /* 数字处理函数 */
        changeNum(num,count){
            let chunks = [];
            let zero = [];
            for(let i=0;i<num.length;i=i+1){
                chunks.push(num.slice(i,i+1));
            }
            if(chunks.length<count){
                for(let i = 0; i < count-chunks.length; i++){
                    zero.push('i')
                };
                return zero.concat(chunks);
            };
            return chunks;
        },
        /* 整屏数据请求 */
        timingChange(){
        },
        /* 处理数据 */
        setDateInfo(){
        },
        /* 执行率前5大机场业务量 */
        setBusinessChart(){
            let option = {
                grid: {
                    top: '40',
                    right: '3%',
                    left: '40',
                    bottom: '40'
                },
                xAxis: [{
                    type: 'category',
                    color: '#59588D',
                    data: ['XX机场', 'XX机场', 'XX机场', 'XX机场', 'XX机场'],
                    axisPointer: {
                        type: 'line'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#272456'
                        }
                    },
                    axisLabel: {
                        margin: 20,
                        color: '#00f6ff',
                        textStyle: {
                            fontSize: 12
                        },
                    },
                }],
                yAxis: [{
                    axisLabel: {
                        color: '#00f6ff',
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#272456'
                        }
                    }
                }],
                series: [{
                    type: 'bar',
                    data: [100, 90, 10, 90, 90],
                    barWidth: '20px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#41E1D4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#10A7DB' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                            shadowColor: 'rgba(0,255,225,1)',
                            shadowBlur: 4,
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            lineHeight: 30,
                            width: 80,
                            height: 30,
                            borderRadius: 200,
                            position: ['-12', '-40'],
                            distance: 1,
                            formatter: [
                                '    {d|●}',
                                ' {a|{c}}     \n',
                                '    {b|}'
                            ].join(''),
                            rich: {
                                d: {
                                    color: '#3CDDCF',
                                },
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                },
                            }
                        }
                    }
                }]
            };
            this.chartBusiness = echarts.init(document.getElementById("business"));
            this.chartBusiness.setOption(option);
        },
        //机场代理比重
        setProportion(){
            let indicator = [{
                text: 'xx机场',
                max: 6000,
            },
            {
                text: 'xx机场',
                max: 5000
            },
            {
                text: 'xx机场',
                max: 5000
            },
            {
                text: 'xx机场',
                max: 5000,
                //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
            },
            {
                text: 'xx机场',
                max: 5000
            },
            {
                text: 'xx机场',
                max: 5000
            }];
            let dataArr = [{
                value: [4300, 4700, 3600, 3900, 3800, 4200],
                name: "比重",
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#4A99FF',
                        },
                        shadowColor: '#5045f6',
                        shadowBlur: 10,
                    },
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#5045f6'
                            }, {
                                offset: 0.6,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#4A99FF'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }];
            let colorArr = ['#4A99FF', '#4BFFFC']; //颜色
            let option = {
                color: colorArr,
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                    },
                    indicator: indicator,
                    radius: 60,
                    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                        show: true,
                        areaStyle: { // 分隔区域的样式设置。
                            color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                        }
                    },
                    axisLine: { //指向外圈文本的分隔线样式
                        lineStyle: {
                            color: '#153269'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#113865', // 分隔线颜色
                            width: 1, // 分隔线线宽
                        }
                    },
                },
                series: [{
                    type: 'radar',
                    symbolSize: 4,
                    data: dataArr
                }]
            };
            this.proportionChart = echarts.init(document.getElementById("proportion"));
            this.proportionChart.setOption(option);
        },
        //五大航靠桥率
        setPercent(){
            let data = [
                {
                    name: 'xx航班',
                    value: 54
                },{
                    name: 'xx航班',
                    value: 44
                },{
                    name: 'xx航班',
                    value: 35
                },{
                    name: 'xx航班',
                    value: 30
                },{
                    name: 'xx航班',
                    value: 20
                }]
                let arr = [['30%', '20%'],['60%', '20%'],['20%', '65%'],['50%', '65%'],['80%', '65%'],];
                let arrT = ["37%","37%","82%","82%","82%",];
                let titleArr= [], seriesArr=[];
                let colors=[['#389af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'],['#a181fc', '#e3d9fe']]
                data.forEach(function(item, index){
                    titleArr.push(
                        {
                            text:item.name,
                            left: arr[index][0],
                            top: arrT[index],
                            textAlign: 'center',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: '16',
                                color: colors[index][0],
                                textAlign: 'center',
                            },
                        }        
                    );
                    seriesArr.push(
                        {
                            name: item.name,
                            type: 'pie',
                            clockWise: false,
                            radius: [30, 35],
                            itemStyle:  {
                                normal: {
                                    color: colors[index][0],
                                    shadowColor: colors[index][0],
                                    shadowBlur: 0,
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                }
                            },
                            hoverAnimation: false,
                            center: arr [index],
                            data: [{
                                value: item.value,
                                label: {
                                    normal: {
                                        formatter: function(params){
                                            return params.value+'%';
                                        },
                                        position: 'center',
                                        show: true,
                                        textStyle: {
                                            fontSize: '14',
                                            fontWeight: 'bold',
                                            color: colors[index][0]
                                        }
                                    }
                                },
                            }, {
                                value: 100-item.value,
                                name: 'invisible',
                                itemStyle: {
                                    normal: {
                                        color: colors[index][1]
                                    },
                                    emphasis: {
                                        color: colors[index][1]
                                    }
                                }
                            }]
                        }    
                    )
                });
            
                
            let option = {
                title:titleArr,
                series: seriesArr
            };
            this.percentChart = echarts.init(document.getElementById("percentChart"));
            this.percentChart.setOption(option);
        },
        //航班执行率
        setAirRate(){
            var xdata = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

            var dataArr = [300, 250, 290, 203, 255, 188, 156, 190, 230, 301, 280, 200, 330, 270, 203, 255, 188, 156, 283, 371, 293, 228, 239, 293, 203, 320, 395, 206, 280, 290];

            var option = {
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '10%',
                    top: '14%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: xdata,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "##DFDFDF",
                            fontSize: 14
                        }
                    },
                    axisLine: {
                        show: false
                    },
                },

                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#DFDFDF",
                            fontSize: 14
                        },
                        formatter: '{value}',
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)',
                        }
                    },
                },
                series: [{
                    name: '1',
                    type: 'bar',
                    barWidth: '60%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(78,197,163,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(89,170,147,0.1)'
                            }]),
                            barBorderRadius: 20,
                        },
                    },
                    data: dataArr
                }, ]
            };
            this.airRateChart = echarts.init(document.getElementById("airRate"));
            this.airRateChart.setOption(option);
        },
        //'旅客', '货邮', '航班小时趋势图
        setHourChart(){
            var color = ['#1a9bfc', '#7049f0', '#01babc' ]
            var name = ['旅客', '货邮', '航班']
            var data = [
                [13.7, 3.4, 13.5, 16.1, 7.4, 15.2],
                [17.4, 13.7, 13.5, 3.4, 15.2, 13.5],
                [13.4, 7.4, 13.7, 13.5, 16.1, 13.7]
            ]
            var series = [];
            for (var i = 0; i <3; i++) {
                series.push({
                    name: name[i],
                    type: "line",
                    symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
                    symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                    smooth: true, //是否平滑曲线显示
                    showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[i]
                            }, {
                                offset: 0.8,
                                color: 'rgba(255,255,255,0)'
                            }], false),
                            // shadowColor: 'rgba(255,255,255, 0.1)',
                            shadowBlur: 10,
                            opacity:0.3,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: color[i],
                            lineStyle: {
                                width: 1,
                                type: 'solid' //'dotted'虚线 'solid'实线
                            },
                            borderColor: color[i], //图形的描边颜色。支持的格式同 color
                            borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ] 
                            barBorderRadius: 0,
                            label: {
                                show: false,
                            },
                            opacity:0.5,
                        }
                    },
                    data: data[i],
                })
            }
            let option = {
                legend: {
                    itemGap:5,
                    itemWidth:5,
                    textStyle: {
                        color: '#fff',
                        fontSize: '10'
                    },
                    data:  name
                },
                grid: {
                    borderWidth: 0,
                    top: 40,
                    bottom: 25,
                    textStyle: {
                        color: "#fff"
                    }
                },
                xAxis: [{
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            color: '#32346c'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#32346c ',
                        }
                    },
                    boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
                    axisTick: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#bac0c0',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                    },
                    data:  ['01:00', '02:00',  '04:00',  '05:00',  '06:00', ],
                }],
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#32346c',
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#32346c ',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#bac0c0',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                    },
                },
                series: series,
            }
            this.chartHour = echarts.init(document.getElementById("hourChart"));
            this.chartHour.setOption(option);
        },
        //消费趋势图
        setConsumeTrend(){
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    }
                },
                color: ["#0080ff"],
                toolbox: {
                    // feature: {
                    //     saveAsImage: {}
                    // }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top:'10%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6ba1bb',
                            fontSize: 12,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0a2b52',
                            width: 0.5, //这里是为了突出显示加上的
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#0a2b52',
                            width: 1, //这里是为了突出显示加上的
                        }
                    },
                    
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6ba1bb' //字体颜色
                        }
                    },
                    splitLine:{
                            show:false,
                        },
                }],
                series: [{
                    name: '数量',
                    type: 'line',
                    smooth: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color:'#723ac3', //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'solid',
                                color: "#0078D7"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 0, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: [20, 70, 60, 80, 100, 90],
                }]
            };
            this.chartConsume = echarts.init(document.getElementById("consume"));
            this.chartConsume.setOption(option);
        },
        //靠桥率趋势图
        setBridgeTrend(){
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    }
                },
                color: ["#0080ff"],
                toolbox: {
                    // feature: {
                    //     saveAsImage: {}
                    // }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top:'10%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6ba1bb',
                            fontSize: 12,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0a2b52',
                            width: 0.5, //这里是为了突出显示加上的
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#0a2b52',
                            width: 1, //这里是为了突出显示加上的
                        }
                    },
                    
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6ba1bb' //字体颜色
                        }
                    },
                    splitLine:{
                            show:false,
                        },
                }],
                series: [{
                    name: '靠桥率',
                    type: 'line',
                    smooth: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color:'#723ac3', //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'solid',
                                color: "#0078D7"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 0, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: [20, 70, 60, 80, 100, 90],
                }]
            };
            this.chartBridge = echarts.init(document.getElementById("bridge"));
            this.chartBridge.setOption(option);
        },
        //男女比例饼状图
        setGenderPie(){
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                visualMap: {
                    show: false,
                    min: 500,
                    max: 600,
                    inRange: {
                        //colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: '人数',
                    type: 'pie',
                    radius: '70%',
                    selectedMode: 'single',
                    selectedOffset: 10,
                    clockwise: true,
                    center: ['50%', '50%'],
                    color: ['#4EC5A3','#FB7293'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                    data: [{
                            value: 3600,
                            name: '男',
                        },
                        {
                            value: 5400,
                            name: '女'
                        }
                    ].sort(function(a, b) {
                        return a.value - b.value
                    }),
                    roseType: 'radius',

                    label: {
                        normal: {
                            // formatter: ['{c|{b}{d}%}', '{b|{b}}'].join('\n'),
                            formatter: ['{b|{b}{d}%}', '{c|{c}万人}'].join('\n'),
                            rich: {
                                b: {
                                    color: '#d9efff',
                                    fontSize: 12,
                                    height: 40
                                },
                                c: {
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight:'bold',
                                    lineHeight: 5
                                },
                            },
                        }
                    },
                    itemStyle:{
                    borderWidth:'20',
                    color:'pink',
                    borderColor:'#FFF',
                    normal:{
                    borderWidth:'0',
                    borderColor:'rgba(0,0,0,2)',
                    },
                    },
                    labelLine: {
                        normal: {
                            backgroundColor:'yellow',
                            borderColor:'skyblue',
                            borderWidth:10,
                            lineStyle: {
                            borderColor:'skyblue',
                            borderWidth:10,
                            backgroundColor:'yellow',
                        }
                    },


                    
                    }
                }]
            };
            this.chartGender = echarts.init(document.getElementById("gender"));
            this.chartGender.setOption(option);
        },
    },
    beforeDestroy() {
        if(this.timeInterval!=null){
            clearInterval(this.timeIntervals);
            this.timeInterval = null;
        };
        this.chart && this.chart.dispose();
        this.chart = null;
    },
    watch: {
    },
    computed:{
    },
}
</script>
