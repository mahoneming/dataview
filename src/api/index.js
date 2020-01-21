import axios from '@/libs/api.request'

// 专家团队
export function getExpertList(params) {
    return axios.request({
        url: '/api/expert/listType',
        method: 'get',
        params
    })
}

// 新闻列表
export function getNewsList(data) {
    return axios.request({
        url: '/api/news/listAll',
        method: 'post',
        data
    })
}
// 天气
export function getWeather(data) {
    return axios.request({
        url: 'http://wthrcdn.etouch.cn/weather_mini?city='+data,
        method: 'get',
    })
}
// 地球数据
export function getEarthDat() {
    return axios.request({
        url: '/api/earth/earthData',
        method: 'get',
    })
}


