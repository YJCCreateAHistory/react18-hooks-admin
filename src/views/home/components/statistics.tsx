import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts' //(*===所有)，导入所有 并命名为echarts

const Echarts = () => {
  const pieData: any = [
    { value: 5000, name: "注册用户访问量" },
    { value: 5000, name: "未注册用户访问量" }
  ];
  const chartRef:any = useRef()
  const options: any = {
    title: {
      text: "Gitee / GitHub",
      subtext: "访问占比",
      left: "56%",
      top: "45%",
      textAlign: "center",
      textStyle: {
        fontSize: 18,
        color: "#767676"
      },
      subtextStyle: {
        fontSize: 15,
        color: "#a1a1a1"
      }
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: "4%",
      left: "2%",
      orient: "vertical",
      icon: "circle", //图例形状
      align: "left",
      itemGap: 20,
      textStyle: {
        fontSize: 13,
        color: "#a1a1a1",
        fontWeight: 500
      },
      formatter: function (name: string) {
        let dataCopy = "";
        for (let i = 0; i < pieData.length; i++) {
          if (pieData[i].name === name && pieData[i].value >= 10000) {
            dataCopy = (pieData[i].value / 10000).toFixed(2);
            return name + "      " + dataCopy + "w";
          } else if (pieData[i].name === name) {
            dataCopy = pieData[i].value;
            return name + "      " + dataCopy;
          }
        }
      }
    },
    series: [
      {
        type: "pie",
        radius: ["70%", "40%"],
        center: ["57%", "52%"],
        silent: true,
        clockwise: true,
        startAngle: 150,
        data: pieData,
        labelLine: {
          length: 80,
          length2: 30,
          lineStyle: {
            width: 1
          }
        },
        label: {
          position: "outside",
          show: true,
          formatter: "{d}%",
          fontWeight: 400,
          fontSize: 19,
          color: "#a1a1a1"
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0.5,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#feb791" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#fe8b4c" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#b898fd" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#8347fd" // 100% 处的颜色
              }
            ]
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
    const chart = echarts.init(chartRef.current)

    // 设置图表实例的配置项和数据
    chart.setOption(options)

    // 组件卸载
    return () => {
      // myChart.dispose() 销毁实例。实例销毁后无法再被使用
      chart.dispose()
    }
  }, [])

  return (
    // 宽度要大，不然y轴有些名称可能不会显示
    <div style={{ width: "100%", height: "100%" }} ref={chartRef}></div>
  )
}
export default Echarts

