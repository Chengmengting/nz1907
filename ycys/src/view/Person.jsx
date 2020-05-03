import React, { Component } from 'react'
import style from '../assets/css/Person.module.css'
export default class Person extends Component {
    constructor(){
        super()
        // console.log(66,this.props)
    }
    componentDidMount(){
        console.log("我的",this.props)
    }
    render() {
        return (
            <div>
                <div className={style.page}>
                    <div className={style.header}>
                        <img className={style.header_bg} src="https://wechat.yitianyishu.com/minsu/static/image/account_image_bg@2x.png" alt=""/>
                        <div className={style.header_con}>
                            <img className={style.avatar} src="https://cdn.yitianyishu.com/js/dist/images/lazy.png" alt=""/>
                            <div className={style.nickname}>177****4970</div>
                        </div>
                    </div>
                    <div className={style.order_w}>
                        <div className={style.myorder}>
                            <div className={style.total_order} onClick={()=>{this.props.history.push("/minsu/orderlist.html")}}>全部订单</div>
                            <div className={style.needpay_order}>待支付</div>
                            <div className={style.order_num}>代入住</div>
                        </div>
                        <div className={style.menu_li}>
                            <span className={style.menu_span}>砍价订单</span>
                            <span className={style.arrow}></span>
                        </div>
                    </div>
                        
                    <div className={style.menu_list}>
                        <div className={style.my_collect}>
                            <span className={style.menu_span}>我的收藏</span>
                            <span className={style.arrow}></span>
                        </div>
                        <div className={style.my_coupon}>
                            <span className={style.menu_span}>优惠券</span>
                            <span className={style.arrow}></span>
                        </div>
                        <div className={style.my_setting}>
                            <span className={style.menu_span}>设置</span>
                            <span className={style.arrow}></span>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    componentWillMount() {
        console.log(2222,this.props);

    }
}
