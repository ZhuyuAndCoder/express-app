var color = ['#FC7255', '#4DCEFF', '#F5A623', '#8188D2', '#7FDCFF', '#8DD06A']; //饼图颜色设置
//自动播放
function autoPlay(){
	let oBtn = true;
	pageOneRefresh();
	pageTwoRefresh();
	pageSevenRefresh();

//  setInterval(function(){
//  	$('li').toggleClass('current');   	
//      if (oBtn) {
//      	oBtn = false;
//      	pageTwoRefresh();
//      } else {
//      	oBtn = true;
//      	pageOneRefresh();
//      }
//  },30000);
}

//页面1数据刷新
function pageOneRefresh() {
	require.config({
        paths: {
			echarts: '../../lib/echarts'
        }
	});
	line(wlddDayData, 'wlddDay', '物流订单趋势图（近7天）');
	line(wlddMonthData, 'wlddMonth', '物流订单趋势图（近6月）');
	bar(ddlDayData1, ddlDayData2, 'ddlDay', '采购/销售订单量趋势图（近7天）');
	bar(ddlMonthData1, ddlMonthData2, 'ddlMonth', '采购/销售订单量趋势图（近6月）');
	$('#ddlTop').barRotate(ddlTopData);
	$('#moneyTop').barRotate(moneyTopData);
	$('#ddlTop1').barRotate(ddlTop1Data);
	$('#ddlTop2').barRotate(ddlTop2Data);
}

//页面2数据刷新
function pageTwoRefresh() {
	require.config({
        paths: {
			echarts: '../../lib/echarts'
        }
	});
	$('#ywsrTop1').barRotate(ywsrTop1Data);
	$('#ywsrTop2').barRotate(ywsrTop2Data);
	$('#ywsrTop3').barRotate(ywsrTop3Data);
	pie(yswsMonthData, 'yswsMonth', '已收/未收占比（近1个月）');
	pie(ywsrPieData, 'ywsrPie', '业务收入占比（近1个月）');
	area(ywsrDayData, 'ywsrDay', '业务收入趋势（近7天）');
	area(ywsrMonthData, 'ywsrMonth', '业务收入趋势（近6个月）');
	area1(ysysMonthData, 'ysysMonth', '业务收入趋势（近6个月）');
}

//页面7数据刷新
function pageSevenRefresh() {
	require.config({
        paths: {
			echarts: '../../lib/echarts'
        }
	});
	lineMap(mapData(lineMapData, 'valueNote', 'valueText', 'valueLong'));
	$('#ccTop').barRotate(ccTopData);
	$('#rcTop').barRotate(rcTopData);
//	$('#tableData').tableShow(tableData);
}

//定义函数：构建要显示的时间日期字符串
function showTime() {
	let today = new Date();
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

	$("#timeShow").html(str);
	window.setTimeout("showTime()",1000);
}

//折线图设置
const lineSet = (data, name) => {
	var yMax = 12000;
	var dataShadow = [];
	var dataAxis = data.key;
	var dataArr = data.value;
	
	for (var i = 0; i < dataArr.length; i++) {
	    dataShadow.push(yMax);
	}
	return {
		grid: {
			width: '77%',
			heigth: '82%',
			x: '15%',
			y: '3%',
			x2: '8%',
			y2: '15%',
			borderWidth: 0
		},
		xAxis: {
			type: 'category',
	        data: dataAxis,
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: '#0954C0',
				    width: 1,
				    type: 'solid'
	        	}
	        },
	        splitLine: {
	        	show: false
	        },
	        z: 10
	    },
	    yAxis: {
	        axisLine: {
	            lineStyle: {
	            	color: '#0954C0',
				    width: 1,
				    type: 'solid'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        splitLine: {
	        	lineStyle: {
	            	color: ['#0954C0'],
				    width: 0.5,
				    type: 'solid'
	            }
	        }
	    },
	    series: [
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                	color: 'rgba(0,153,255,0.3)'
	                },
				    emphasis: {
				        color: 'rgba(0,153,255,0.3)'
				    }
	            },
	            barGap:'-100%',
	            barCategoryGap:'70%',
	            data: dataShadow,
	            animation: false
	        },
	        {
	        	name: name,
	            type: 'line',
	            itemStyle: {
	                normal: {
	                	color: '#FD9929'
	                },
				    emphasis: {
				        color: '#FD9929'
				    }
	            },
	            data: dataArr
	        }
	    ]
	}
};

//折线图实现
function line(data, id, name) {
	require(
		[
			'echarts',
			'echarts/chart/line',
			'echarts/chart/bar'
		],
		function (ec) {
			let ele = ec.init(document.getElementById(id));
			let option = lineSet(data, name);
			ele.setOption(option);
		}
	);
}

//柱状图设置
const barSet = (data1, data2, name) => {
	var dataAxis = data1.key;
	var dataArr1 = data1.value;
	var dataArr2 = data2.value;
	
	return {
		grid: {
			width: '77%',
			heigth: '82%',
			x: '15%',
			y: '3%',
			x2: '8%',
			y2: '15%',
			borderWidth: 0
		},
		xAxis: {
			type: 'category',
	        data: dataAxis,
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: '#0954C0',
				    width: 1,
				    type: 'solid'
	        	}
	        },
	        splitLine: {
	        	show: false
	        },
	        z: 10
	    },
	    yAxis: {
	        axisLine: {
	            lineStyle: {
	            	color: '#0954C0',
				    width: 1,
				    type: 'solid'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        splitLine: {
	        	lineStyle: {
	            	color: ['#0954C0'],
				    width: 0.5,
				    type: 'solid'
	            }
	        }
	    },
	    series: [
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                	color: '#0EC3BD'
	                },
				    emphasis: {
				        color: '#0EC3BD'
				    }
	            },
	            barGap: 0,
	            barCategoryGap:'40%',
	            data: dataArr1
	        },
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                	color: '#0099FF'
	                },
				    emphasis: {
				        color: '#0099FF'
				    }
	            },
	            barCategoryGap:'40%',
	            data: dataArr2
	        }
	    ]
	}
};

//柱状图实现
function bar(data1, data2, id, name) {
	require(
		[
			'echarts',
			'echarts/chart/bar'
		],
		function (ec) {
			let ele = ec.init(document.getElementById(id));
			let option = barSet(data1, data2, name);
			ele.setOption(option);
		}
	);
}

//获取数组最大值
Array.prototype.max = function(){ 
	return Math.max.apply({},this) 
}

//横向柱状图实现
$.fn.barRotate = function(data){
    let axis = data.key;
    let arr = data.value;
    let str = '';
    var self = $(this);
    var max = arr.max();
    if(!data) return;
    for (var i=0;i<arr.length;i++ ) {
    	var width = (arr[i]/max)*100+'%';
    	self.append('<div class="barCell"><div class="barLeft">'+axis[i]+'</div><div class="barBg"><div class="barShow" style="width:'+width+'"><div class="trans"></div></div></div><div class="barRight">'+arr[i]+'</div></div>');
    }
}

//饼图数据处理
function pieData(arr, name, value) {
	let len = arr.length > 6 ? 6 : arr.length;
	arr.sort(function (a, b) {
		a[value] = parseFloat(a[value] || 0);
		b[value] = parseFloat(b[value] || 0);
		if (a[value] > b[value]) {
            return -1;
        }
		if (a[value] < b[value]) {
            return 1;
        }
        return 0;
    });
	arr = arr.slice(0, len);
	arr.map((ele) => {
		ele.name = ele[name];
		ele.value = ele[value];
	});

    return arr;
}

//饼图设置
const pieSet = (data, name) => {
	pieData(data, 'valueText', 'valueLong')
	return {
		color: color,
		series: [{
			name: name,
			type: 'pie',
			radius: ['40%', '60%'],
			center: ['45%', '45%'],
			startAngle: -45,
			itemStyle: {
				normal: {
					label: {
						formatter: "{d}%\n{b}",
						textStyle: {
							color: '#fff'
						}
					}
				}
			},
			name: name,
			data: data
		}]
	}
};

//饼图实现
function pie(data, id, name) {
	require(
		[
			'echarts',
			'echarts/chart/pie'
		],
		function (ec) {
			let ele = ec.init(document.getElementById(id));
			let option = pieSet(data, name);
			ele.setOption(option);
		}
	);
}

//区域图设置（三条）
const areaSet = (data, name) => {
	var dataAxis = data.key;
	var dataArr1 = data.value1;
	var dataArr2 = data.value2;
	var dataArr3 = data.value3;
	return {
		grid: {
			width: '77%',
			heigth: '82%',
			x: '15%',
			y: '3%',
			x2: '8%',
			y2: '15%',
			borderWidth: 0
		},
		xAxis: [{
			type: 'category',
	        data: dataAxis,
	        boundaryGap : false,
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: '#0954C0',
				    width: 1,
				    type: 'solid'
	        	}
	        },
	        splitLine: {
	        	show: false
	        }
	    }],
	    yAxis: [{
	    	type : 'value',
	        axisLine: {
	            lineStyle: {
	            	color: '#0954C0',
				    width: 1,
				    type: 'solid'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        splitLine: {
	        	lineStyle: {
	            	color: ['#0954C0'],
				    width: 0.5,
				    type: 'solid'
	            }
	        }
	    }],
	    series : [
	        {
	            name:'商贸'+name,
	            type:'line',
	            stack: '总量',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:dataArr1
	        },
	        {
	            name:'物流'+name,
	            type:'line',
	            stack: '总量',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:dataArr2
	        },
	        {
	            name:'商贸物流'+name,
	            type:'line',
	            stack: '总量',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:dataArr3
	        }
	    ]
	}
};

//区域图设置（二条）
const areaSet1 = (data, name) => {
	var dataAxis = data.key;
	var dataArr1 = data.value1;
	var dataArr2 = data.value2;
	return {
		grid: {
			width: '77%',
			heigth: '82%',
			x: '15%',
			y: '3%',
			x2: '8%',
			y2: '15%',
			borderWidth: 0
		},
		xAxis: [{
			type: 'category',
	        data: dataAxis,
	        boundaryGap : false,
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: '#0954C0',
				    width: 1,
				    type: 'solid'
	        	}
	        },
	        splitLine: {
	        	show: false
	        }
	    }],
	    yAxis: [{
	    	type : 'value',
	        axisLine: {
	            lineStyle: {
	            	color: '#0954C0',
				    width: 1,
				    type: 'solid'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#0099FF'
	            }
	        },
	        splitLine: {
	        	lineStyle: {
	            	color: ['#0954C0'],
				    width: 0.5,
				    type: 'solid'
	            }
	        }
	    }],
	    series : [
	        {
	            name:'商贸'+name,
	            type:'line',
	            stack: '总量',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:dataArr1
	        },
	        {
	            name:'物流'+name,
	            type:'line',
	            stack: '总量',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:dataArr2
	        }
	    ]
	}
};

//区域图实现
function area(data, id, name) {
	require(
		[
			'echarts',
			'echarts/chart/line'
		],
		function (ec) {
			let ele = ec.init(document.getElementById(id));
			let option = areaSet(data, name);
			ele.setOption(option);
		}
	);
}

//区域图实现(二条)
function area1(data, id, name) {
	require(
		[
			'echarts',
			'echarts/chart/line'
		],
		function (ec) {
			let ele = ec.init(document.getElementById(id));
			let option = areaSet1(data, name);
			ele.setOption(option);
		}
	);
}

//地图数据处理
function mapData(arr, from, to, value) {
	let data = {
		line: []
	};
	arr.map((ele) => {
		data.line.push([
			{
				name: ele[from]
			},
			{
				name: ele[to],
				value: ele[value]
			}
		]);
	});
	return data;
}

//地图
function lineMap(lineMapData) {
	require(
		[
			'echarts',
			'echarts/chart/map'
		],
		function (ec) {
			let lineMap = ec.init(document.getElementById('lineMap'));
			let lineMapOption = {
				color: ['#FFFF00'],
				series: [
					{
						name: '线路流向图',
						type: 'map',
						mapType: 'china',
						itemStyle: {
							normal: {
								label: {
									show: true,
									textStyle: {
										color: '#fff'
									}
								},
								borderColor: '#000124',
								borderWidth: 1,
								areaStyle: {
									color: '#008BFF'
								}
							},
							emphasis: {
								label: {
									show: true,
									textStyle: {
										color: '#fff'
									}
								},
								borderColor: '#000124',
								borderWidth: 1,
								areaStyle: {
									color: '#008BFF'
								}
							}
						},
						data: [],
						geoCoord: geo,
						markLine: {
							smooth: true,
							effect: {
								show: true,
								scaleSize: 1,
								period: 30,
								color: '#FFFF00'
							},
							itemStyle: {
								normal: {
									borderWidth: 1,
									lineStyle: {
										type: 'solid',
										color: '#19DD34'
									},
									textStyle: {
										color: '#19DD34'
									}
								}
							},
							data: lineMapData.line
						},
//						markPoint: {
//							symbol: 'emptyCircle',
//							effect: {
//								show: true,
//								scaleSize: 1,
//								shadowBlur: 0
//							},
//							data: lineMapData.point
//						}
					}
				]
			};
			lineMap.setOption(lineMapOption);
		}
	);
}

//列表表格
$.fn.tableShow = function(jsonArr){
    var self = $(this);
    if(!jsonArr) return;
    jsonArr.forEach(function(item){
	    self.append('<tr><td><div class="circle"></div>'+item.carNum+'</td><td>'+item.name+'</td><td>'+item.number+'</td><td>'+item.weight+'</td><td>'+item.volume+'</td></tr>')
	});
}