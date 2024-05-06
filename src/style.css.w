+include managed.css.w

[data-selected].bubble
	box-shadow		0 0 3px 0 @accent

.control_item
	height			100px
	border			1px solid @secondary
	border-radius	25px
	padding			10px 15px
	margin-bottom	5px
	margin-right	50px
	position		relative
	overflow		hidden
.control_item .row1
	font-size		200%
.control_item .title
	font-weight		900
.control_item .state
	margin-left		10px
.control_item .switch
	position		absolute
	font-weight		100
	bottom			0
	top				0
	right			0
	width			100px
	background		@primaryd
	display			flex
	align-items		center
	justify-content	center
	font-size		180%
	letter-spacing	-1px
.control_item .info
	font-size		140%

.time_item
	font-family		Segoe UI
	align-items		center
	margin			10px 0
	border-radius	25px
	line-height		1
.time_item .time
	font-size		600%
.time_item .date
	font-size		200%
.time_item .hours
	font-weight		900
.time_item .mins
	font-weight		600
	margin-left		20px
.time_item .secs
	font-weight		100
	margin-left		20px