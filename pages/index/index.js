Page({
	data: {
		// card 表示名片的信息
		card: {}
	},
	// 监听onload方法
	onLoad: function () {
		var me = this;
		// 获取storage存储
		wx.getStorage({
			key: 'cardData', 
			success: function (res) {
				// console.log(res)
				// 适配数据
				res.data.logo = (res.data.username + '').slice(-2);
				// 更新数据，渲染内容
				me.setData({
					card: res.data
				})
			}
		})
	},
	gotoCreateCard: function () {
		// 进入编辑页面
		wx.navigateTo({
			url: '../card/card'
		})
	}
})