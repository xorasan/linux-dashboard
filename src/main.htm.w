+htm
body
	+include managed.htm.w
	
	[template=control_item] .control_item .bubble
		[id=icon] .icon
		.flex .row1
			[id=title] .title
			[id=state] .state
		[id=info] .info
		[id=switch] .switch

	[template=time_item] .flex .vertical .time_item .bubble
		.flex .time
			[id=hours] .hours
			[id=mins] .mins
			[id=secs] .secs
		[id=date] .date
	
	[view=main]
		[id=list]