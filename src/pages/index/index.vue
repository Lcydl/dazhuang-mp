<template>
	<view class="index-wrap">
		<!-- banner -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperConfig.indicatorDots"
				:autoplay="swiperConfig.autoplay" :interval="swiperConfig.interval" :duration="swiperConfig.duration"
				:indicator-active-color="swiperConfig.indicatorActiveColor">
				<swiper-item>
					<view class="swiper-item uni-bg-red"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue"></view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 模块入口 -->
		<view class="module">
			<uni-row :gutter="30">
				<uni-col :span="12">
					<view class="index-module">
						<view class="title">电话咨询</view>
						<view class="subtitle">
							<view>及时解决难题</view>
							<view class="price">98</view>元/45分钟
						</view>
					</view>
				</uni-col>
				<uni-col :span="12">
					<view class="index-module">
						<view class="title">在线咨询</view>
						<view class="subtitle">
							<view>及时解决难题</view>	
							<view class="price">29</view>元/3次
						</view>
					</view>
				</uni-col>
			</uni-row>
			<uni-row :gutter="30">
				<uni-col :span="12">
					<view class="index-module">
						<view class="title">法律服务</view>
						<view class="subtitle">
							全方位降低维权成本
						</view>
					</view>
				</uni-col>
				<uni-col :span="12">
					<view class="index-module">
						<view class="title">邀请有礼</view>
						<view class="subtitle">
							好友助力，领免费服务
						</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<!-- 领域专区 -->
		<view class="zone">
			<view class="title-bar">
				<view class="title">领域专区</view>
				<view class="more">查看更多</view>
			</view>
			<uni-row class="category">
				<uni-col :span="6">
					<img src="../../static/mock/ic_labor_dispute.png" alt="劳动纠纷" />
					<view class="type">劳动纠纷</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_bond.png" alt="债权债务" />
					<view class="type">债权债务</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_marriage.png" alt="婚姻家事" />
					<view class="type">婚姻家事</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_crown_case.png" alt="刑事案件" />
					<view class="type">刑事案件</view>
				</uni-col>
			</uni-row>
			<!-- TODO: 推广模块 -->
		</view>
		<!-- 推荐咨询 -->
		<view class="zone">
			<view  class="title-bar">
				<view style="display: inline-block;">
					<text class="title">推荐咨询</text>
					<text class="subtitle">最新咨询</text>
				</view>
				<view class="more">查看更多</view>
			</view>
			<ul class="counsel_list">
				<li class="counsel">
					<view class="user">
						<view class="user-info">
							<view class="avatar avatar-user"></view>
							<view class="phone">177********</view>
							<view class="tag">劳动纠纷</view>
						</view>
						<view class="content">
							在私人家里干活，意外受伤，双方决定私了，协商赔偿款，双方一直拖欠款项，应该如何处理......
						</view>
					</view>
					<view class="lawyer">
						<view class="lawyer-info">
							<view class="name">法律顾问</view>
							<view class="avatar avatar-lawyer"></view>
						</view>
						<view class="content">
							用人单位应该按照约定日期支付劳动者工资，并不得......
						</view>
					</view>
				</li>
			</ul>
		</view>
		<!-- 常见问题 -->
		<view class="zone">
			<view class="title-bar">
				<view class="title">常见问题</view>
			</view>
			<ul class="question_list">
					<li>
						<view class="question">Q遇到法律问题，该怎么办呢？</view>
						<view class="answer">非专业人士遇到法律问题，上网搜索答案情况不同，难以保证适用性，同人法律提供专业法律服务，专业人员给出专业解决方案</view>
						<view class="dvider"></view>
					</li>
					<li>
						<view class="question">咨询法律问题前，需要准备什么？</view>
						<view class="answer">为了有效利用您的咨询时间，需要您在咨询前，尽可能把您的问题梳理清楚。</view>
						<view class="dvider"></view>
					</li>
					<li>
						<view class="question">律师超时未联系，怎么处理？</view>
						<view class="answer">有时律师可能因为开庭等事项，导致无法及时响应。如果超时未致电，请联系客服，客服会为您协调解决。</view>
						<view class="dvider"></view>
					</li>
				</ul>
		</view>
		<!-- 附近门店 -->
		<view class="zone">
			<view class="title-bar">
				<view class="title">附近门店</view>
			</view>
		</view>
	</view>
</template>

<script>
import UniRow from '../../components/uni-row/uni-row.vue'
import UniCol from '../../components/uni-col/uni-col.vue'

export default {
    data() {
        return {
            background: ["color1", "color2", "color3"],
            swiperConfig: {
                indicatorDots: true,
                autoplay: false,
                interval: 2000,
                duration: 500,
                indicatorActiveColor: "#292c4b"
            }
        };
    },
    onLoad() {
    },
    methods: {},
    components: { 
		UniRow, 
		UniCol 
	}
}
</script>

<style>
.index-wrap {
	padding: 15px;
	color: #333333;
}

.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
}

.swiper {
	height: 300rpx;
}

.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
	background-size: 100%;
}

.uni-bg-red {
	background-image: url('../../static/mock/banner1.png');
}

.uni-bg-green {
	background-image: url('../../static/mock/banner2.png');
}

.uni-bg-blue {
	background-image: url('../../static/mock/banner3.png');
}

.module, .category, .counsel_list {
	margin-top: 10px;
}

.index-module {
	height: 86px;
	background-color: #f3f4fc;
	border-radius: 4px;
	margin-top: 15px;
	padding: 10px;
	box-sizing: border-box;
}

.index-module .title {
	font-weight: 600;
	font-size: 16px;
}

.index-module .subtitle {
	color: #999999;
	font-size: 13px;
}

.index-module .price {
	color: #eb6100;
	display: inline-block;
}

.zone {
	margin-top: 30px;
}

.category {
	text-align: center;
	font-size: 14px;
}

.title-bar {
	height: 40px;
	line-height: 40px;
}

.title-bar .title {
	font-size: 20px;
	font-weight: 600;
	display: inline-block;
}

.title-bar .subtitle {
	font-size: 17px;
	color: #666666;
	margin-left: 20px;
}

.title-bar .more {
	color: #999999;
	float: right;
	font-size: 14px;
}

.category img {
	width: 46px;
	height: 46px;
	border-radius: 21px;
	box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.1);
}

.category .type {
	margin-top: 4px;
}

ul {
	list-style-type: none;
	padding: 0;
}

.counsel .avatar {
	width: 36px;
	height: 36px;
	border-radius: 18px;
	background-color: #eeeeee;
	display: inline-block;
}

.avatar-user {
	background: url('../../static/icon/user.png') no-repeat center 80%;
	background-size: 49% 80%;
}

.avatar-lawyer {
	background: url('../../static/icon/lawyer.png') no-repeat center 93%;
	background-size: 80%;
}

.user .user-info {
	height: 40px;
	position: relative;
}

.user .user-info > *, .lawyer-info > * {
	display: inline-block;
	vertical-align: middle;
}

.user .user-info .phone {
	margin-left: 10px;
}

.user .content {
	margin: 12px 0;
	font-size: 14px;
}

.user .tag {
	font-size: 12px;
    padding: 4px 10px;
    background-color: #cfa972;
    color: #ffffff;
    border-radius: 3px;
	position: absolute;
    right: 0;
    top: 6.5px;
}

.lawyer {
	color: #666666;
	background-color: #f9f9f9;
	padding: 15px;
}

.lawyer .lawyer-info {
	text-align: end;
	height: 40px;
}

.lawyer .lawyer-info .name {
	font-size: 14px;
	margin-right: 10px;
}

.lawyer .content {
	font-size: 13px;
}

.question_list li {
	margin-bottom: 20px;
}

.question_list .question {
	font-weight: 600;
	font-size: 14px;
}

.question_list .answer {
	font-size: 13px;
	color: #666666;
}

.dvider {
	display: block;
    height: 1px;
    width: 100%;
	background-color: #dcdfe6;
    position: relative;
}
</style>
