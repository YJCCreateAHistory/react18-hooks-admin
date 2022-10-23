import Statistics from "./components/statistics"
import BarChar from "./components/barChar"
import { Tabs } from "antd";
import "./style/index.scss";
import BookSum from "./images/book_sum.png";
import AddPerson from "./images/add_person.png";
import AddTeam from "./images/add_team.png";
import Today from "./images/today.png";
import BookSum1 from "./images/book_sum.png";

const { TabPane } = Tabs;

const DataVisualize = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  interface TabList {
    label: string;
    name: number
  }
  const tabsList: TabList[] = [
    { label: "近七日", name: 2 },
  ];

  return (
    <div className="dataVisualize-box">
      <div className="content">
        <div className=" card top-box">
          <div className="top-title">站点数据</div>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            {tabsList.map(item => {
              return <TabPane tab={item.label} key={item.name}></TabPane>;
            })}
          </Tabs>
          <div className="top-content">
            <div className="item-left sle">
              <span className="left-title">访问总数</span>
              <div className="img-box">
                <img src={BookSum} alt="" />
              </div>
              <span className="left-number">848.132w</span>
            </div>
            <div className="item-center">
              <div className="gitee-traffic traffic-box">
                <div className="traffic-img">
                  <img src={AddPerson} alt="" />
                </div>
                <span className="item-value">2222</span>
                <span className="traffic-name sle">注册用户访问量</span>
              </div>
              <div className="gitHub-traffic traffic-box">
                <div className="traffic-img">
                  <img src={AddTeam} alt="" />
                </div>
                <span className="item-value">2222</span>
                <span className="traffic-name sle">未注册用户访问量</span>
              </div>
              <div className="today-traffic traffic-box">
                <div className="traffic-img">
                  <img src={Today} alt="" />
                </div>
                <span className="item-value">4567</span>
                <span className="traffic-name sle">今日访问量</span>
              </div>
              <div className="yesterday-traffic traffic-box">
                <div className="traffic-img">
                  <img src={BookSum1} alt="" />
                </div>
                <span className="item-value">1234</span>
                <span className="traffic-name sle">昨日访问量</span>
              </div>
            </div>
            <div className="item-right">
              <div className="echarts-title">注册用户 / 未注册用户 访问量占比</div>
              <div className="book-echarts">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
        <div className="card bottom-box">
          <div className="bottom-title">数据来源统计</div>
          <div className="bottom-tabs">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              {tabsList.map(item => {
                return <TabPane tab={item.label} key={item.name}></TabPane>;
              })}
            </Tabs>
          </div>
          <div className="curve-echarts">
            <BarChar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualize;
