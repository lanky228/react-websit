import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { Table } from 'antd';
import { MyTable } from "./js/MyTable.js";
import { GCDate } from "./js/MyTable.js";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


function App() {
    const tabPanes = urlList.map(function (item) {
        return <TabPane tab={item.name} key={item.name}> < MyTable url={item.url} /></TabPane>
    });

    return (
        <div>
            <Tabs>
                {tabPanes}
            </Tabs>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
