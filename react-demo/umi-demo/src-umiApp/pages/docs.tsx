import "./docs.css"
import { Button } from 'antd-mobile'
import React from 'react'
import { Grid ,Card ,Tag ,Tabs ,List,Image,} from 'antd-mobile'
// import { DemoBlock } from 'demos'
import { users } from './users'
import { useState } from "react"
import { Link, Outlet } from 'umi';
// import { withRouter } from 'react-router-dom';
import { history } from 'umi';


const DocsPage = () => {
  // const history = withRouter();
  const [dataList, setDataList] = useState([
    { num: '12', id: 1 },
    { num: '1', id: 2 },
  ]);
  const [money, setMoney] = useState(1000.0);
  
  const zhuanchu = () => {
    setMoney((prevMoney) => {
      const newMoney = prevMoney - 1;
      const newDataList = [
        ...dataList,
        { num: '-1', id: dataList.length + 1 },
      ];
      setDataList(newDataList);
      return newMoney;
    });
  };
  const zhuangru = () => {
    // history.push('/');
    history.push('/');
  }
  
  return (
    <div className="shopPage">
      <div className="top">
        <h1>this is top</h1>
      </div>
      <div className="middle">
        <Card>
        <div className="xiaoqq">
          <div>总金额</div>
          <div><h1>{money}元</h1></div>
          <div> <Tag color='warning'> 开始收益 </Tag></div>
        </div>
        <div className="twoBtn">
        <Grid columns={2} gap={8}>
          <Grid.Item>
            <Button onClick={zhuangru}>
            转入
            </Button>
          </Grid.Item>
          <Grid.Item>
          <Button  onClick={zhuanchu}>转出</Button>
          </Grid.Item>
        </Grid>
          </div>
        </Card>
        
      </div>
      <div className="nav">
      <Card >
      <Grid columns={5} gap={8}>
          <Grid.Item>
            <div className={'grid-demo-item-block'}>A</div>
          </Grid.Item>
          <Grid.Item>
          <div className={'grid-demo-item-block'}>A</div>
          </Grid.Item>
          <Grid.Item>
          <div className={'grid-demo-item-block'}>A</div>
          </Grid.Item>
          <Grid.Item>
          <div className={'grid-demo-item-block'}>A</div>
          </Grid.Item>
          <Grid.Item>
          <div className={'grid-demo-item-block'}>A</div>
          </Grid.Item>
        </Grid>
      </Card>
        
      </div>
      <div className="list">
        <div className="menu">
        <Tabs defaultActiveKey='1'>
          <Tabs.Tab title='账单' key='fruits'>
            <div className="detail">
            <List header='用户列表'>
              {users.map(user => (
                <List.Item
                  key={user.name}
                  prefix={
                    <Image
                      src={user.avatar}
                      style={{ borderRadius: 20 }}
                      fit='cover'
                      width={40}
                      height={40}
                    />
                  }
                  description={user.description}
                >
                  {user.name}
                </List.Item>
              ))}
            </List>
            </div>
          </Tabs.Tab>
          <Tabs.Tab title='统计' key='vegetables'>
          <div className="detail">
            <List header='用户列表'>
              {dataList.map(user => (
                <List.Item key={user.id} >
                  转出： {user.num}元
                </List.Item>
              ))}
            </List>
            </div>

          </Tabs.Tab>
        </Tabs>
        </div>

      </div>
    </div>
  );
};

export default DocsPage;
