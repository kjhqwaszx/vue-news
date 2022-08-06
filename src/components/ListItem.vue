<template>
		<div>
		<ul class="news-list">
			<!-- this.$store.state.news 로 접근 가능하지만 Getters 이용 -->
			<li v-for="item in listItems" :key="item.title" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{item.points}}
				</div>
				<!-- 기타정보 영역 -->
				<div>
					<!-- 타이틀 영역 -->
					<p class="news-title">
						<template v-if="item.domain">
							<a :href="item.url"> 
								{{item.title}}
							</a>
						</template>
						<template v-else>
							<router-link :to="`/item/${item.id}`">
								{{item.title}}
							</router-link>
						</template>
					</p>
					<small class="link-text">
						{{item.time_ago}}  by 
						<router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">
							{{item.user}} 
						</router-link>
						<a v-else :href ="item.url">
							{{item.domain}}
						</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	created(){
		const pageName = this.$route.name
		let actionName = ''
		
		if(pageName === 'news'){
			actionName = 'FETCH_NEWS'
		}else if(pageName === 'ask'){
			actionName = 'FETCH_ASK'
		}else if(pageName === 'jobs'){
			actionName = 'FETCH_JOBS'
		}

		this.$store.dispatch(actionName)
	},
	computed:{
		listItems(){
			const pageName = this.$route.name

			if(pageName === 'news'){
				return this.$store.state.news
			}else if(pageName === 'ask'){
				return this.$store.state.ask
			}else if(pageName === 'jobs'){
				return this.$store.state.jobs
			}
			return []
		}
  },
	
}
</script>

<style scoped>
.news-list{
	margin: 0;
	padding: 0;
}
.post{
	list-style:none;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points{
	width: 80px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #42b883;
}
.news-title{
	margin:0;
}
.link-text{
	color: #828282
}

</style>