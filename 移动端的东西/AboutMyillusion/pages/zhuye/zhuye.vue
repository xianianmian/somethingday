<template>
	<view>
		<header>
			<h2>我的主页</h2>
		</header>
		<!-- 幻想导航栏 -->
		<view class="huanxiang">
		  <view class="huanxiang-item " 
			v-for="(item,index) in huanxiang" :key="item.id" 
			@click="getType(item.id)"
			:class="navindex==item.id?'active':''"
			>
		    <h3>幻想{{item.id}}</h3>
		    <view class="text">详情：{{item.text}}</view>
		  </view>
		</view>
		<!-- 幻想轮播图 -->
		<view class="lunbo">
			<view>
				<view class="uni-margin-wrap">
					<swiper class="swiper" circular 	indicator-dots="true" 	autoplay="true" 	interval="4000" 	duration="true">
						<swiper-item v-for="(item,index) in imgUrl" :key="index">
							<view class="swiper-item " >
								<img :src="item" alt="">
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
<!-- 幻想信息 -->
		<view class="HxList" v-for="item in HxDataList" :key="item.id"
		@click="intoDetail(item.id,item.type)">
			<view class="lue">
				<view class="time">
					<p>大概时间：{{item.time}}</p>
				</view>
				<span>{{item.text}}</span>
			</view>
			<view class="img">
				<img :src="item.imgUrl" alt="">
			</view>
		</view>
		<!-- 添加幻想 -->
		<view class="">
			<uni-fab></uni-fab>
		</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				huanxiang: [{
					id: '1',
					type:'爬山',
					text: '爬山'
				}, {
					id: '2',
					type:'变成狗',
					text: '变成狗'
				}],
				HxDataList: [],
				imgUrl:[],
				hxType:'爬山',
				navindex:1,
				dogUrl:'https://dog.ceo/api/breeds/image/random',
				tempId:0
			}
		},
		onLoad() {
			this.getHxDataList(this.hxType)
		},
		methods: {
			// 得到幻想的信息，爬山是本地的 狗是网上的API 因为网上的不全面所以在详情那里没用
			getHxDataList(type) {
				this.HxDataList = [];
				this.imgUrl = [];
				const requests = [];
				if(type == '爬山'){
					uni.request({
					url: "/static/files/HxData.json",
					success: res => {
						this.HxDataList = res.data.data
						this.HxDataList.forEach(x=>{this.imgUrl.push(x.imgUrl)})
					}
				})
				}else{
					for (let i = 0; i < 5; i++) {
					  requests.push(uni.request({ url: 'https://dog.ceo/api/breeds/image/random' ,timeout:6000}));
					}
					let lastId = 0;
					function generateUniqueId() {
					  lastId++;
					  return lastId;
					}
					Promise.all(requests)
					  .then(responses => {
					    const newDataList = responses.map((response) => {
					      return {
					        id: generateUniqueId(), // 使用一个生成唯一id的函数给每个数据对象生成一个唯一标识
					        imgUrl: response.data.message,
									type:'变成狗',
									text:response.data.message,
									time:new Date()
					      };
					    });
					    this.HxDataList = [...this.HxDataList, ...newDataList]; // 将新获取的数据添加到原有数据之中
							this.HxDataList.forEach(x=>{this.imgUrl.push(x.imgUrl)})//轮播图数据
					  })
					  .catch(error => {
					    console.error(error);
					  });
				}
				
			},
			//切换导航栏
			getType( id) {
			  let index=this.huanxiang.findIndex(item=>{
					return item.id==id
				})
				this.navindex = index+1;
				this.hxType = this.huanxiang[index].type
				console.log(this.hxType,'ss');
				this.getHxDataList(this.hxType)
			},
			//查看幻想详细信息 
			intoDetail(id,type){
				uni.navigateTo({
					// url:`/pages/huanXiangD/huanXiangD?id=${id}&type=${type}`
					url:`/pages/huanXiangD/huanXiangD?id=${id}&type=${type}`
				})
			}
		}
	}
</script>

<style lang="scss">
	header {
		background: rgba(177, 201, 65, 0.8);
		height: 80rpx;
		width: 100%;

		h2 {
			text-align: center;
			color: rgba(249, 248, 246, 1);
		}
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

		img {
			height: 100%;
			width: 100%;
		}
	}

	.huanxiang {
		width: 80%;
		margin: 0 auto;
		text-align: center;
		display: flex;

		.huanxiang-item {
			border: 1rpx solid rgba(177, 201, 65, 1);
			border-radius: 5rpx;
			margin: 10rpx;
			width: 50%;
			h3 {
				height: 40rpx;
				color: gray;
			}
			.text {
				height: 50px;
				font-size: 14px;
				margin-top: 5px;
				color:gray;
				font-size: 40rpx;
			}
		}
		.huanxiang-item.active{
			h3{	color:rgba(177, 201, 65, 1);	}
			.text{color:rgba(177, 201, 65, 1);}
		}
	}

	.HxList {
		display: grid;
		margin: 40rpx 5rpx;
		grid-template-columns: auto 200rpx;

		.img {
			img {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.lue {
			-webkit-line-clamp: 5;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>