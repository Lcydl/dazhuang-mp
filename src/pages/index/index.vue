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
					<view>劳动纠纷</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_bond.png" alt="债权债务" />
					<view>债权债务</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_marriage.png" alt="婚姻家事" />
					<view>婚姻家事</view>
				</uni-col>
				<uni-col :span="6">
					<img src="../../static/mock/ic_crown_case.png" alt="刑事案件" />
					<view>刑事案件</view>
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
						<view>
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
	height: 100px;
	background-color: #f3f4fc;
	border-radius: 10px;
	margin-top: 15px;
	padding: 10px;
	box-sizing: border-box;
}

.index-module .title {
	font-weight: 600;
	font-size: 22px;
}

.index-module .subtitle {
	color: #999999;
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
}

.title-bar {
	height: 40px;
	line-height: 40px;
}

.title-bar .title {
	font-size: 24px;
	font-weight: 600;
	display: inline-block;
}

.title-bar .subtitle {
	font-size: 20px;
	color: #666666;
	margin-left: 20px;
}

.title-bar .more {
	color: #999999;
	float: right;
}

.category img {
	width: 50px;
	height: 50px;
	border-radius: 21px;
	box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.1);
}

.counsel_list {
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
}

.user .tag {
	font-size: 14px;
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
	margin-right: 10px;
}
</style>
