(function(){
var app = angular.module('bergenstem', ['ngRoute']).
	config(function($routeProvider, $locationProvider){
		
		$routeProvider.
			when("/",{templateUrl:"partials/list.html"})
	})
app.controller('StemController', function() {
	this.project = projects;
	this.project2 = projects2;
	this.project3 = projects3;
	this.project4 = projects4;
	});
	var projects = [
	{
		projectName: 'Algae Biodiesel',
		projectDesc:[
		{
		para1:'The transportation industry is responsible for a significant amount of greenhouse gas emissions in the atmosphere. Researchers have been exploring methods to maximize growth and lipid production in algae. Algae are the most promising candidates for future fuels because of their unique ability to produce a high lipid concentration. ',
		para2:'The algae lipids, high energy hydrocarbons, are harvested and extracted from the algal cells and refined to produce biodiesel. STEM students selected the micro-algae Chlorella vulgaris in this research for its ability to produce high lipid content. An increase in general algal growth can be accomplished by exposing the organisms to optimal conditions, which include various parameters such as nutrient source, light intensity, oxygen level, carbon dioxide level, pH, and photobioreactor design.',
		para3:'The main purpose of the project’s study is to determine which MG dilution provides most optimal growth under controlled conditions.'
		}
		],
		images:[
		
		 'images/algea1.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Professor Bruce Benjamin (bbenjamin@bergen.edu) ',
		projectMembers:[
			'',
			''
		],
		projectMeeting:'For more information please contact the Bruce Benjamin',
		projectBlog: ''
	},
	{
		projectName: 'Block House',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/blockhouse1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Computational Chemistry',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/cchem1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	,
	{
		projectName: 'Computer Vision',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/computervision1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Cosmic Ray Muon Detector',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/cosmic1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	];
	
	var projects2 = [
	{
		projectName: 'EEG Brain Project',
		projectDesc:[
		{
		para1:'The transportation industry is responsible for a significant amount of greenhouse gas emissions in the atmosphere. Researchers have been exploring methods to maximize growth and lipid production in algae. Algae are the most promising candidates for future fuels because of their unique ability to produce a high lipid concentration. ',
		para2:'The algae lipids, high energy hydrocarbons, are harvested and extracted from the algal cells and refined to produce biodiesel. STEM students selected the micro-algae Chlorella vulgaris in this research for its ability to produce high lipid content. An increase in general algal growth can be accomplished by exposing the organisms to optimal conditions, which include various parameters such as nutrient source, light intensity, oxygen level, carbon dioxide level, pH, and photobioreactor design.',
		para3:'The main purpose of the project’s study is to determine which MG dilution provides most optimal growth under controlled conditions.'
		}
		],
		images:[
		
		 'images/eeg1.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Professor Bruce Benjamin (bbenjamin@bergen.edu) ',
		projectMembers:[
			'',
			''
		],
		projectMeeting:'For more information please contact the Bruce Benjamin',
		projectBlog: ''
	},
	{
		projectName: 'Electric Vehicle Conversions',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/electriccar1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Ground Station',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/groundstation.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	,
	{
		projectName: 'High Altitude Balloon',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/highalt1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Organic Chemistry',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/organic.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	];
	
	var projects3 = [
	{
		projectName: 'Pedal Charger Project',
		projectDesc:[
		{
		para1:'The transportation industry is responsible for a significant amount of greenhouse gas emissions in the atmosphere. Researchers have been exploring methods to maximize growth and lipid production in algae. Algae are the most promising candidates for future fuels because of their unique ability to produce a high lipid concentration. ',
		para2:'The algae lipids, high energy hydrocarbons, are harvested and extracted from the algal cells and refined to produce biodiesel. STEM students selected the micro-algae Chlorella vulgaris in this research for its ability to produce high lipid content. An increase in general algal growth can be accomplished by exposing the organisms to optimal conditions, which include various parameters such as nutrient source, light intensity, oxygen level, carbon dioxide level, pH, and photobioreactor design.',
		para3:'The main purpose of the project’s study is to determine which MG dilution provides most optimal growth under controlled conditions.'
		}
		],
		images:[
		
		 'images/pedal.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Professor Bruce Benjamin (bbenjamin@bergen.edu) ',
		projectMembers:[
			'',
			''
		],
		projectMeeting:'For more information please contact the Bruce Benjamin',
		projectBlog: ''
	},
	{
		projectName: 'Radio Jove and Meteor Studies',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/radio.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Robotics Team',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/robitics1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	,
	{
		projectName: 'Rocket Team',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/rocket.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Seismometer',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/seiso.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	];
	
	var projects4 = [
	{
		projectName: 'Solar Concentractor',
		projectDesc:[
		{
		para1:'The transportation industry is responsible for a significant amount of greenhouse gas emissions in the atmosphere. Researchers have been exploring methods to maximize growth and lipid production in algae. Algae are the most promising candidates for future fuels because of their unique ability to produce a high lipid concentration. ',
		para2:'The algae lipids, high energy hydrocarbons, are harvested and extracted from the algal cells and refined to produce biodiesel. STEM students selected the micro-algae Chlorella vulgaris in this research for its ability to produce high lipid content. An increase in general algal growth can be accomplished by exposing the organisms to optimal conditions, which include various parameters such as nutrient source, light intensity, oxygen level, carbon dioxide level, pH, and photobioreactor design.',
		para3:'The main purpose of the project’s study is to determine which MG dilution provides most optimal growth under controlled conditions.'
		}
		],
		images:[
		
		 'images/solar.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Professor Bruce Benjamin (bbenjamin@bergen.edu) ',
		projectMembers:[
			'',
			''
		],
		projectMeeting:'For more information please contact the Bruce Benjamin',
		projectBlog: ''
	},
	{
		projectName: 'Unmanned Aerial Vehicle',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/unmanned.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'UV-4 UAV',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/uav1.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	,
	{
		projectName: 'Water Chemistry',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/water.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'V.E.G.E.T.A. (Wind Turbine)',
		projectDesc:[
		{
		para1:'An off the grid block house for the purpose of storing, working and testing STEM projects. Tests such as material efficiency and heat transfer. Solar panel and wind turbine data collection.'
		}
		],
		images:[
		
		 'images/vegeta.jpg',
		
			
		],
		projectLeader: 'Russell Cardenas (russellcardenas@hotmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[
			'test1',
			'test1a'
		],
		projectMeeting:'test1',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	}
	];
	
})();