import React, { Component } from 'react'
import { Card,} from 'antd'

const tabList = [
    {
        key: 'tab1',
        tab: '这是什么网站？',
    },
    {
        key: 'tab2',
        tab: '此网站应用的技术',
    },
];

const contentList = {
    tab1: <div>
            <h2>这是一个个人图片展示网站</h2>
            <p>用来上传一些好看的图片</p>
            <p>目前仅供自己使用</p>
            <p>如果需要，也可以分享给大家使用(嘻嘻:其实就是懒得写权鉴~)😏</p>
        </div>,
    tab2: <div>
            <h2>技术应用</h2>
            <p>此网站主要采用了以下技术</p>
            <p>react@16.x</p>
            <p>antd@3.x</p>
            <p>本人目前react、Vue都会，但为了技术的提高，选用了react这门比较复杂的框架，</p>
            <p>大家有兴趣可以使用Vue开发试试，相信比react会简单不少</p>
            <code>gitHub仓库在此：<a href="https://github.com/Darren-web/gallery.git">https://github.com/Darren-web/gallery.git</a></code>
        </div>,
};
class About extends Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    };
    
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };
    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%' }}
                    title="关于我们"
                    extra={<a href="https://github.com/Darren-web/gallery.git">GitHub</a>}
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                    >
                    {contentList[this.state.key]}
                </Card>
            </div>
        )
    }
}
export default About;