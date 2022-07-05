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
		<view>
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

.index-module {
	height: 100px;
	background-color: #f3f4fc;
	border-radius: 10px;
	margin-top: 15px;
	padding: 10px;
	box-sizing: border-box;
}

.index-module .title {
	color: #333333;
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
</style>
