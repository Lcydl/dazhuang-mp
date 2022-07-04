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
			<view class="uni-flex uni-row">
				<view class="text">横向布局-自动宽度</view>
				<view class="text">横向布局-自动宽度</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="text">横向布局-自动宽度</view>
				<view class="text">横向布局-自动宽度</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			swiperConfig: {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				indicatorActiveColor: '#292c4b'
			}
		}
	},
	onLoad() {

	},
	methods: {

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
</style>
