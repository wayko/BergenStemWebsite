<?php
<header>
<div class="row leftright">
<div class="col-xs-3 col-md-3"><a href="http://bergen.edu"><img src="images/bcc.gif" class="footimg"/></a></div>
<div class="col-xs-3 col-md-3"><a href="http://www.bergenstem.org/home.php?p=b2b"><img src="images/b2b.png" class="footimg"/></a></div>
<div class="col-xs-3 col-md-3"><a href="http://www.bergen.edu/faculty-staff/grants-administration/awards/stem-gps/the-stem-gps-team"><img src="images/stemgps.png" class="footimg3"/></a></div>
<div class="col-xs-3 col-md-3"><a href="https://www.facebook.com/bergen.stem"><img src="images/stemfb.gif" class="footimg4"/></a></div>
</div>
</header>
<header class="topHead1">
<h1>STEM Student Union @ Bergen Community College
<small> 
<span class="glyphicon glyphicon-education glyphblack"></span>
</small>
</h1>
</header>
<nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-header">
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
<ul class="">
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
<ul class="">
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Faculty</a>
<ul class="dropdown-menu">
<li><a href="#">Sivo</a></li>
<li role="separator" class="divider"></li>
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Calendar</a>
<ul class="dropdown-menu dropcal">
<!--calendar-->
<article>
<div class="calnder">
<div class="column_right_grid calender">
<div class="clndr-event">
<section id="calendar">
<a href="#small-dialog" class="popup-with-zoom-anim">ADD EVENT</a>
</section>
</div>
<!-- pop-up-box -->
<script type="text/javascript" src="js/modernizr.custom.min.js"></script>    
<link href="style/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
<script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
<!-- //pop-up-box -->
<div id="small-dialog" class="mfp-hide">
<div class="event-text">
<form>						
<input type="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}"/>
<input type="date" value="Select date" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Select date';}"/>
<textarea value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message..</textarea>
<input type="submit" value="Add" >
</form>
</div>
</div>
<script>
$(document).ready(function() {
$('.popup-with-zoom-anim').magnificPopup({
type: 'inline',
fixedContentPos: false,
fixedBgPos: true,
overflowY: 'auto',
closeBtnInside: true,
preloader: false,
midClick: true,
removalDelay: 300,
mainClass: 'my-mfp-zoom-in'
});
												
});
</script>	
<div class="cal1">
<div class="clndr">
<div class="clndr-controls">
<div class="clndr-control-button">
<p class="clndr-previous-button">previous</p>
</div>
<div class="month">SEPTEMBER 2015</div>
<div class="clndr-control-button rightalign">
<p class="clndr-next-button">next</p>
</div>
</div>
<table class="clndr-table">
<thead>
<tr class="header-days">
<td class="header-day">SUN</td>
<td class="header-day">MON</td>
<td class="header-day">TUE</td>
<td class="header-day">WED</td>
<td class="header-day">THU</td>
<td class="header-day">FRI</td>
<td class="header-day">SAT</td>
</tr>
</thead>
<tbody>
<tr>
<td class="day past adjacent-month last-month calendar-day-2015-04-26"><div class="day-contents">26</div></td>
<td class="day past adjacent-month last-month calendar-day-2015-04-27"><div class="day-contents">27</div></td>
<td class="day past adjacent-month last-month calendar-day-2015-04-28"><div class="day-contents">28</div></td>
<td class="day past adjacent-month last-month calendar-day-2015-04-29"><div class="day-contents">29</div></td>
<td class="day past adjacent-month last-month calendar-day-2015-04-30"><div class="day-contents">30</div></td>
<td class="day past calendar-day-2015-05-01"><div class="day-contents">1</div></td>
<td class="day past calendar-day-2015-05-02"><div class="day-contents">2</div></td>
</tr>
<tr>
<td class="day past calendar-day-2015-05-03"><div class="day-contents">3</div></td>
<td class="day past calendar-day-2015-05-04"><div class="day-contents">4</div></td>
<td class="day past calendar-day-2015-05-05"><div class="day-contents">5</div></td>
<td class="day past calendar-day-2015-05-06"><div class="day-contents">6</div></td>
<td class="day past calendar-day-2015-05-07"><div class="day-contents">7</div></td>
<td class="day past calendar-day-2015-05-08"><div class="day-contents">8</div></td>
<td class="day past calendar-day-2015-05-09"><div class="day-contents">9</div></td>
</tr>
<tr>
<td class="day past event calendar-day-2015-05-10"><div class="day-contents">10</div></td>
<td class="day past event calendar-day-2015-05-11"><div class="day-contents">11</div></td>
<td class="day past event calendar-day-2015-05-12"><div class="day-contents">12</div></td>
<td class="day past event calendar-day-2015-05-13"><div class="day-contents">13</div></td>
<td class="day today event calendar-day-2015-05-14"><div class="day-contents">14</div></td>
<td class="day calendar-day-2015-05-15"><div class="day-contents">15</div></td>
<td class="day calendar-day-2015-05-16"><div class="day-contents">16</div></td>
</tr>
<tr>
<td class="day calendar-day-2015-05-17"><div class="day-contents">17</div></td>
<td class="day calendar-day-2015-05-18"><div class="day-contents">18</div></td>
<td class="day calendar-day-2015-05-19"><div class="day-contents">19</div></td>
<td class="day calendar-day-2015-05-20"><div class="day-contents">20</div></td>
<td class="day event calendar-day-2015-05-21"><div class="day-contents">21</div></td>
<td class="day event calendar-day-2015-05-22"><div class="day-contents">22</div></td>
<td class="day event calendar-day-2015-05-23"><div class="day-contents">23</div></td>
</tr>
<tr>
<td class="day calendar-day-2015-05-24"><div class="day-contents">24</div></td>
<td class="day calendar-day-2015-05-25"><div class="day-contents">25</div></td>
<td class="day calendar-day-2015-05-26"><div class="day-contents">26</div></td>
<td class="day calendar-day-2015-05-27"><div class="day-contents">27</div></td>
<td class="day calendar-day-2015-05-28"><div class="day-contents">28</div></td>
<td class="day calendar-day-2015-05-29"><div class="day-contents">29</div></td>
<td class="day calendar-day-2015-05-30"><div class="day-contents">30</div></td>
</tr>
<tr>
<td class="day calendar-day-2015-05-31"><div class="day-contents">31</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-01"><div class="day-contents">1</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-02"><div class="day-contents">2</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-03"><div class="day-contents">3</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-04"><div class="day-contents">4</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-05"><div class="day-contents">5</div></td>
<td class="day adjacent-month next-month calendar-day-2015-06-06"><div class="day-contents">6</div></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</article>
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
<ul class="dropdown-menu projectli">
<div class="row">
<div class="col-md-6">
<li><img src="images/algea1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Algae Biodiesel</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/blockhouse1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Block House</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/cchem1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Computational Chemistry</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/computervision1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Computer Vision</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/cosmic1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Cosmic Ray Muon Detector</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/eeg1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">EEG Brain Project</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/electriccar1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Electric Vehicle Conversions</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/groundstation.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Ground Station</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/highalt1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">High Altitude Balloon</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/hydro.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Hydroponics</a></li>
<li role="separator" class="divider"></li>
</div>
<div class="col-md-6">
<li><img src="images/organic.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Organic Chemistry</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/pedal.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Pedal Charger Project</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/radio.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Radio Jove and Meteor Studies</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/robitics1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Robotics Team</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/rocket.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Rocket Team</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/seiso.jpg" class="smallimg" alt="Coming Soon"/><a href="#">Seismometer</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/solar.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Solar Concentractor</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/unmanned.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Unmanned Aerial Vehicle</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/uav1.jpg" class="smallimg" alt="Coming Soon" /><a href="#">UV-4 UAV</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/water.jpg" class="smallimg" alt="Coming Soon" /><a href="#">Water Chemistry</a></li>
<li role="separator" class="divider"></li>
<li><img src="images/vegeta.jpg" class="smallimg" alt="Coming Soon" /><a href="#">V.E.G.E.T.A. (Wind Turbine)</a></li>
<li role="separator" class="divider"></li>
</div>
</div>
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">B2B</a>
<ul class="">
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">FAQ</a>
<ul class="">
</ul>
</li>
</ul>
<ul class="nav navbar-nav">
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Register</a>
<ul class="dropdown-menu dropreg">
<form action="">
<div>
<div class="row">
	<div class="col-md-12">
		<input type="text" name="name" id="name"  placeholder="name"/>
	</div>
	<div class="col-md-12">
		<input type="text" name="email" id="email"  placeholder="email"/>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<input type="text" name="subject" id="subject" placeholder="subject"/>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<textarea name="message" id="message" placeholder="message"></textarea>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<button class="btn btn-info" id="sendrequest">Send Message</button>
		<button class="btn button-alt">Clear Form</button>
	</div>
</div>
</div>
</form>
</ul>
</li>
</ul>
</div><!-- /.navbar-collapse -->
</div>
</div>
</nav>
?>