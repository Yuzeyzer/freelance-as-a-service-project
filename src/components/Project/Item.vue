<template>
	<div class="project">
		<div class="project__head">
			<h3 class="project__title">
				Prepare Documentation for the Provider's Network
			</h3>
			<div class="project__widgets">
				<div class="project__secure">
					<img :src="shieldIcon" alt="Project is Secure" />
				</div>
				<div class="project__budget">$ 30.000</div>
				<div class="project__favorite">
					<svg
						width="15"
						height="14"
						viewBox="0 0 15 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.64537 11.558L10.9654 13.566C11.5734 13.934 12.3174 13.39 12.1574 12.702L11.2774 8.92601L14.2134 6.38201C14.7494 5.91801 14.4614 5.03801 13.7574 4.98201L9.89337 4.65401L8.38137 1.08601C8.10937 0.438006 7.18137 0.438006 6.90937 1.08601L5.39737 4.64601L1.53337 4.97401C0.829371 5.03001 0.541371 5.91001 1.07737 6.37401L4.01337 8.91801L3.13337 12.694C2.97337 13.382 3.71737 13.926 4.32537 13.558L7.64537 11.558Z"
							fill="#C3CAD9"
						/>
					</svg>
				</div>
			</div>
		</div>
		<div class="project__content">
			<p>
				Based on the data, prepare standard documents for the provider's
				network. Description of connection on user switches. A description of
				the connection on the server switches and the connections between the
				switches. A description of routing between network equipment. Table of
				used ip addresses by workstations. Graphic network diagram. etc. A
				description of routing between network equipment. Table of used ip
				addresses by workstations. Graphic network diagram. etc. A description
				of routing between network equipment. Table of used ip addresses by
				workstations.
			</p>
		</div>
		<div class="project__footer">
			<div>
				<img src="" alt="" />
				<span>Jack Brady</span>
			</div>
			<div class="project__date">February 20, 12:43</div>
			<div class="project__visible">For All</div>
			<div class="project__views">49655</div>
			<div class="project__answers">35 Answers</div>
		</div>
	</div>
</template>

<script>
import shieldIcon from "./icons/shield.svg";
export default {
	setup() {
		return { shieldIcon };
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
.project {
	background: $bg-white;
	box-shadow: 0 2px vw(5) rgba(54, 61, 77, 0.03);
	border-radius: vw(10);
	padding: vw(30) 0;
	max-width: vw(825);
	margin: 0 auto vw(30);
	&__title {
		@include font(vw(15));
		color: $color-blue-60;
	}
	&__head {
		padding: vw(5) vw(30) vw(35);
		@include flex(space-between);
		border-bottom: 2px solid $bg-blue-90;
	}
	&__content,
	&__footer {
		padding: 0 vw(30);
	}
	&__content {
		@include font(vw(13));
		padding: vw(30) vw(30) vw(25);
		color: $color-blue-70;
	}
	&__widgets {
		display: flex;
	}
	&__favorite,
	&__secure {
		@include flex;
		width: vw(40);
		height: vw(40);
		border: 2px solid $bg-blue-90;
		border-radius: 50%;
	}
	&__budget {
		border: 2px solid $bg-blue-90;
		border-radius: vw(30);
		padding: vw(10) vw(20);
		box-sizing: border-box;
		margin: 0 vw(10);

		@include font(vw(12), 800);
		color: $color-blue-70;
	}
}
</style>