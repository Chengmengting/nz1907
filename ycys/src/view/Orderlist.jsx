import React, { Component } from 'react'
import style from '../assets/css/Orderlist.module.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class Orderlist extends Component {
    constructor(){
        super()
        this.flag=true
        this.state={
            flag:true
        }
    }

    render() {
        const a = 0;
      const  Render=(
            <div className={style.card}>
            <div className={style.card_top}>
                <div className={style.card_status} style={{color: 'red'}}>待确认</div>
                <div className={style.card_date}>2020-05-02 22:06:40</div>
            </div>
            <div className={style.card_con}>
                <div className={style.card_con_left}></div>
                <div className={style.card_con_rigth}>
                    <div className={style.room_name}>厦门简里</div>
                    <div className={style.room_title}>木子-海景大床房</div>
                </div>
            </div>
            <div className={style.card_bottom}>
                <div className={style.card_price}> 应付金额：
                    <span className={style.total_amount}>¥1278.00</span>
                </div>
            </div>
        </div>
        )
        const  ListRender=(
            <div className={style.card}>
            <div className={style.card_top}>
                <div className={style.card_status} style={{color: '#999'}}>已取消</div>
                <div className={style.card_date}>2020-05-02 22:06:40</div>
            </div>
            <div className={style.card_con}>
                <div className={style.card_con_left}></div>
                <div className={style.card_con_rigth}>
                    <div className={style.room_name}>厦门简里</div>
                    <div className={style.room_title}>木子-海景大床房</div>
                </div>
            </div>
            <div className={style.card_bottom}>
                <div className={style.card_price}> 应付金额：
                    <span className={style.total_amount}>¥1278.00</span>
                </div>
                <div className={style.card_delete}>删除订单</div>
            </div>
        </div>
        )
        return (
            <div>
                <div className={style.page}>
                    <div className={style.nav_bar}>
                        <div className={style.nav_left} onClick={()=>{this.setState({flag:true})}}>进行中</div>
                        <div className={style.nav_rigth} onClick={()=>{this.setState({flag:false})}}>已结束</div>
                    </div>
                </div>
                {
                    
                }
                <div className={style.status_w}>
                    {
                        this.state.flag ? Render : ListRender
                    }
                    {/* <div className={style.card}>
                        <div className={style.card_top}>
                            <div className={style.card_status}>待确认</div>
                            <div className={style.card_date}>2020-05-02 22:06:40</div>
                        </div>
                        <div className={style.card_con}>
                            <div className={style.card_con_left}></div>
                            <div className={style.card_con_rigth}>
                                <div className={style.room_name}>厦门简里</div>
                                <div className={style.room_title}>木子-海景大床房</div>
                            </div>
                        </div>
                        <div className={style.card_bottom}>
                            <div className={style.card_price}> 应付金额：
                                <span className={style.total_amount}>¥1278.00</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className={style._end}><span className={style._end_icon}></span>The end<span className={style._end_icon}></span></div>
            </div>
        )
    }
}
