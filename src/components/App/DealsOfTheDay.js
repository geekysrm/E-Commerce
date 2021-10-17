import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Card, Icon, Col, Row } from 'antd';

const styles={
  col:{
    width: 250
  },
  card:{
    width: 240
  },
  icon:{
    fontSize: 30, color: '#08c'
  },
  image:{
    height: 370 , width: "100%"
  }
}

export default function DealsOfTheDay() {
    return (
        <div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={10} style={{padding: 10}}>
          <Col span={8} style={{ width: '100%' }}>
            <Card bordered={false}>
              <h2>Deals of the Day</h2>
              <Button type="primary" size={"large"}>View all</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={10} style={{padding: 10 }}>
          <Col span={8} style={styles.col}>
            <Card
              style={styles.card}
              cover={<img alt="tissot" src="./assets/DealsTissot.png" style={styles.image}/>}
              actions={[<Icon type="shopping-cart" style={styles.icon}/>,
              <Icon type="heart-o" style={styles.icon}/>,
              <Icon type="ellipsis" style={styles.icon}/>]}
            >
              <h3>Tissot new Collection</h3>
            </Card>
          </Col>
          <Col span={8} style={styles.col}>
            <Card
              style={styles.card}
              cover={<img alt="tissot" src="./assets/DealsRado1.png"  style={styles.image} />}
              actions={[<Icon type="shopping-cart" style={styles.icon}/>,
              <Icon type="heart-o" style={styles.icon}/>,
              <Icon type="ellipsis" style={styles.icon}/>]}
            >
              <h3>Rado new Collection</h3>

            </Card>
          </Col>
          <Col span={8} style={styles.col}>
            <Card
              style={styles.card}
              cover={<img alt="tissot" src="./assets/DealsRado2.png" style={styles.image} />}
              actions={[<Icon type="shopping-cart" style={styles.icon}/>,
              <Icon type="heart-o" style={styles.icon}/>,
              <Icon type="ellipsis" style={styles.icon}/>]}
            >
              <h3>Rado new Collection</h3>

            </Card>
          </Col>
          <Col span={8} style={styles.col}>
            <Card
              style={styles.card}
              cover={<img alt="tissot" src="./assets/DealsRado3.png" style={styles.image} />}
              actions={[<Icon type="shopping-cart" style={styles.icon}/>,
              <Icon type="heart-o" style={styles.icon}/>,
              <Icon type="ellipsis" style={styles.icon}/>]}
            >
              <h3>Rado new Collection</h3>

            </Card>
          </Col>
          <Col span={8} style={styles.col}>
            <Card
              style={styles.card}
              cover={<img alt="tissot" src="./assets/DealsFitbit.jpeg" style={styles.image} />}
              actions={[<Icon type="shopping-cart" style={styles.icon}/>,
              <Icon type="heart-o" style={styles.icon}/>,
              <Icon type="ellipsis" style={styles.icon}/>]}
            >
              <h3>FitBit new Collection</h3>

            </Card>
          </Col>

        </Row>
      </div>
        </div>
    )
}



export default DealsOfTheDay;
