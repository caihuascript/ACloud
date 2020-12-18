/** @format */

import React from "react";
import "./AppContainer.scss";
import { Input, Button } from "antd";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.colorChange = this.colorChange.bind(this);
    }
    colorChange(val) {
        //此方法是替换全局皮肤
        window.less.modifyVars({
            "@primary-color": val,
            "@link-color": val,
            "@btn-primary-bg": val
        });
    }
    render() {
        return (
            <div className={"body"}>
                <main className={"page"}>
                    <p className={"txt"}>{"<p>标签使用css原生变量var实现变色..."}</p>
                    <p className={"part_title txt"}>主题色设置</p>
                    <Input placeholder={"antd组件变色"} />
                    <Button type="primary" style={{ marginBottom: 50 }} onClick={() => this.colorChange("#13c2c2")}>
                        antd组件变色
                    </Button>
                </main>
            </div>
        );
    }
}

export default AppContainer;
