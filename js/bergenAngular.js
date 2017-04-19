(function(){
var app = angular.module('bergenstem', ['ngRoute']).
	config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider.
			when("/",{templateUrl:"partials/list.html"}).
			when("/project",{templateUrl:"partials/test.html"}).
			when("/project2",{templateUrl:"partials/test2.html"}).
			when("/project3",{templateUrl:"partials/test3.html"}).
			when("/project4",{templateUrl:"partials/test4.html"}).
			when("/project5",{templateUrl:"partials/test5.html"}).
			otherwise({redirectTo:"/"});
			
	})

app.controller('StemController', function() {
	this.project = projects;
	this.project2 = projects2;
	this.project3 = projects3;
	this.project4 = projects4;
	this.project5 = projects5;
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
		projectMembers:[{
			member1:'',
			member2:''
		}
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
		projectMembers:[{
			member1:'',
			member2:''
			
		}],                           
		projectMeeting:'',
		projectBlog: 'http://stemblockhouse.blogspot.com/'
	},
	{
		projectName: 'Computational Chemistry',
		projectDesc:[
		{
		para1:'Scientists at Carnegie Mellon University and Stanford University are trying to utilize the wisdom of the citizens with designing of an online video game(EteRNA) that asks the players to create new ways to fold RNA molecules. The scientists are looking forward to discover primary rules essential for one of the life’s building blocks.',
		para2:'They think that the ETeRNA game will also serve as a training ground for a group of citizen-experts who will help to make a new depository for biological knowledge. This game may also aid researchers in constructing stronger automated algorithms for biological breakthroughs.',
		para3:'So in Bergen Community college as our first project in Computational Chemistry group, we are going to Play EteRNA game and see how we are going to help the science. '
		}
		],
		images:[
		
		 'images/cchem1.jpg',
		
			
		],
		projectLeader: 'Farah Rezae PhD (frezae@bergen.edu) ',
		projectFac: 'Farah Rezae PhD',
		projectMembers:[{
			member1:'',
			member2:''
			
		}],                           
		projectMeeting:'Contact Farah Rezae',
		projectBlog: 'http://computationalchemistrybcc.blogspot.com/'
	},
	{
		projectName: 'Computer Vision',
		projectDesc:[
		{
		para1:'he Computer Vision team is working on autonomously landing an Unmanned Aerial Vehicle (UAV) on a recharging station. In order to do this, STEM students needed first to get the 3D world coordinates. They accomplished this by constructing a stereo camera from two off-the-shelf high-definition web cameras and calibrating it with a 4’ x 4’ chessboard pattern.',
		para2:'Using the open source Intel OpenCV library of functions in C and C++, custom-designed software was written to motion track user chosen colored objects to determine their 3D coordinates. In the summer 2014, STEM Students worked in constructing a stereo camera with a wider baseline to track objects at far distances. For future plans, students will use a method to track the UAV called SURF (Speeded-Up Robust Features), rather than using color tracking.',
		para3:'This entails matching the UAV in real time with its picture through point detection and feature matching. The SURF algorithm should provide a more robust way to track the object and find its 3D world coordinates than color tracking.'
		}
		],
		images:[
		
		 'images/computervision1.jpg',
		
			
		],
		projectLeader: '',
		projectFac: '',
		projectMembers:[{
			member1:'',
			member2:''
			
		}],                           
		projectMeeting:'Tuesday 10:00 am- 12:00 pm',
		projectBlog: 'http://bcccomputervision.blogspot.com/'
	},
	{
		projectName: 'Cosmic Ray Muon Detector',
		projectDesc:[
		{
		para1:'Hand made cosmic ray muon detector built by students. This detector can be used to measure the rate and energy of cosmic rays.'
		}
		],
		images:[
		
		 'images/cosmic1.jpg',
		
			
		],
		projectLeader: 'Nicolette Filippone (nikkastem@gmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[{
			member1:'Nicolette Filippone',
			member2:''
			
		}],                           
		projectMeeting:'TBA',
		projectBlog: ''
	}
	];
	
	var projects2 = [
	{
		projectName: 'EEG Brain Project',
		projectDesc:[
		{
		para1:'STEM Student Union Psychophysiology and Neurophysiology Experimentation and Research The Stem Student Union has obtained professionally developed instrumentation with a pedagogic learning system (from BioPac) so that students can methodically and formally learn about psychophysiology and neurophysiology.',
		para2:'Students perform laboratory exercises to conduct basic physiology experiments using ECG, EEG, EMG, and EOG for the purpose of studying Muscular, Cardiovascular, Neurophysiology and Biomedical Engineering topics. In addition, the Stem Student Union has obtained equipment (from OpenBCI) that is designed to encourage original experimentation and product engineering in the development of software and hardware in the field of brain computer interfaces. In order to be qualified to use the equipment of this project, students must pass a rigorous safety training program. This project will pool the interests of students from a wide range of disciplines.',
		para3:'Not only will it attract students who may be studying Biology or Psychology while at Bergen who are ultimately interested in medical careers, but via projects that involve brain-computer interfaces, these projects can also attract the interest of Computer Science majors and Engineering majors.'
		}
		],
		images:[
		
		 'images/eeg1.jpg',
		
			
		],
		projectLeader: 'Sheron Mehak and Alexander Thomas ( smehak@me.bergen.edu and athomas69825@me.bergen.edu )',
		projectFac: 'Dr. Coleen Dilauro and Dr. Michael Ansonoff',
		projectMembers:[{
			member1:'Alexander Thomas',
			member2:'Sheron Mehak',
			member3:'Nikita Gyawali',
			member4:'Minjoo Kim',
			member5:'Heineken Daguplo',
			member6:'Cassandra Petrizzi',
			member7:'Agatha Rodolfo',
			member8:'Johnny Lazarte',
			member9:'Jenny Borisov',
			member10:'Dan Martin'
		}],                           
		projectMeeting:'Wednesday from 9am - 11am, and Friday 12:30pm - 3pm in S-315',
		projectBlog: 'http://eegstem.blogspot.com/'
	},
	{
		projectName: 'Electric Vehicle Conversions',
		projectDesc:[
		{
		para1:'We Study the mechanics of Cars and Bicycles and learn as much about how they work as possible, so we are then able to convert them to electric powered vehicles.'
		}
		],
		images:[
		
		 'images/electriccar1.jpg',
		
			
		],
		projectLeader: 'Kassem AlHussein ()',
		projectFac: ' 	Ron Grosinger',
		projectMembers:[{
			member1:'Kassem AlHussein',
			member2:'Eric Almberg'
			
		}],                           
		projectMeeting:'Saturday 10:00 am- 4:00 pm',
		projectBlog:'http://bergenelectric.blogspot.com/'
	},
	{
		projectName: 'Ground Station',
		projectDesc:[
		{
		para1:'This project deals with the development of a portable ground station for outdoor drone/robot remote control. The main goals of this ground station are to provide STEM Student Union members with a better visibility while flying UAVs (Unmanned Air Vehicle), and protection against weather conditions in a comfortable and appropriate environment.',
		para2:'During the summer, STEM Student Union interns had an amazing engineering experience building the ground station. From scratch, they brainstormed ideas; with a computer software created a design, and built the ground station almost to its completion.'
		}
		],
		images:[
		
		 'images/groundstation.jpg',
		
			
		],
		projectLeader: 'Hiten Patel ( hitendbz@gmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[{
			member1:'Hiten Patel',
			member2:'Abreham Mindaye'
			
		}],                           
		projectMeeting:'',
		projectBlog: 'http://stemgroundstation.blogspot.com/'
	},
	{
		projectName: 'High Altitude Balloon',
		projectDesc:[
		{
		para1:'The High Altitude Balloon team builds electronic sensor payloads as well as other types of experiments and launches them 100,000 feet into the air (Well above where commercial airlines fly) using Weather balloons.',
		para2:'They keep a Blog of their activities with information on when they plan to launch a balloon next.'
		}
		],
		images:[
		
		 'images/highalt1.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Professor Paul Griffo',
		projectMembers:[{
			member1:'',
			member2:''
			
		}],                           
		projectMeeting:'Monday from 2:00 pm - 4:00 pm and Thursday from 3:00 pm - 4:00pm ',
		projectBlog: 'http://bergenballoon.blogspot.com/'
	},
	{
		projectName: 'Hydroponics',
		projectDesc:[
		{
		para1:''
		}
		],
		images:[
		
		 'images/hydro.jpg',
		
			
		],
		projectLeader: 'Dawn Steele (dsteele11@me.bergen.edu)',
		projectFac: 'Bruce Benjamin PhD',
		projectMembers:[{
			member1:'Dawn Steele',
			member2:'Aaron Gonzalez',
			member3:'Jonny Lazarte'
			
		}],                           
		projectMeeting:'Contact Dawn Steele',
		projectBlog: 'http://hydroponicsstem.blogspot.com/'
	}
	];
	
	var projects3 = [
	{
		projectName: 'Organic Chemistry',
		projectDesc:[
		{
		para1:'Organic Chemistry Descripion.'
		}
		],
		images:[
		
		 'images/organic.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Prof. Chapman',
		projectMembers:[{
			member1:'',
			member2:''
			
		}],                           
		projectMeeting:'',
		projectBlog: 'http://orgostem.blogspot.com/'
	},
	{
		projectName: 'Pedal Charger Project',
		projectDesc:[
		{
		para1:'Pedal Charger Project considers methods by which power can be generated by using human-powered system that could convert mechanical energy to electric power.',
		para2:'As we know most of resources used to generate electricity such as diesel or gasoline, are expensive and non- environmental friendly.',
		para3:'The objectives of this project are to reduce the usage of diesel and gasoline-powered machines and to promote body activity.'
		}
		],
		images:[
		
		 'images/pedal.jpg',
		
			
		],
		projectLeader: 'Maryam Echreshzadeh, Sibora Peca',
		projectFac: 'Professor Joseph Sivo (jsivo@bergen.edu)',
		projectMembers:[{
			member1:'Daniela Liberato',
			member2:'Abereham Mindaye'
			
		}],                           
		projectMeeting:'',
		projectBlog: ''
	},
	{
		projectName: 'Radio Jove and Meteor Studies',
		projectDesc:[
		{
		para1:'The Radio JOVE Project was funded by NASA in 1998 to help promote interest in radio astronomy and associated technology among high school and college students. The program produced a kit which includes hardware for building a radio receiver and antenna, and software to detect radio emissions coming from the planet Jupiter.',
		para2:'Students of Bergen Community College began assembling the kit in Spring 2016. -Students at Bergen Community College constructed a 3-element Yagi antenna in order to detect meteors entering Earth’s atmosphere. The meteor’s presence can be detected by radio transmission.',
		para3:'As the meteor burns through the atmosphere, it ionizes a region in the sky, providing a reflective surface for radio transmission. Then, radio signals that are usually blocked from a receiver due to the curvature of the Earth, are now received for the duration of ion trail.'
		}
		],
		images:[
		
		 'images/radio.jpg',
		
			
		],
		projectLeader: 'Jesse Kent (jkent@me.bergen.edu)',
		projectFac: 'Joseph Sivo Mechanical Engineering PhD',
		projectMembers:[{
			member1:'Joan Madera',
			member2:'Daniela Liberato',
			member3:'Jesse Kent',
			member4:'Jaimin Rana',
			member5:'Jonathan Romero',
			member6:'Kimberly Maldonado',
			member7:'Nikita Gyawali'
			
		}],                           
		projectMeeting:'Contact Jesse Kent',
		projectBlog: 'http://www.bergenstem.org/home.php?p=showproject&name=radiojove'
	},
	{
		projectName: 'Robotics Team',
		projectDesc:[
		{
		para1:'The newly formed BCC Robotics Team is beginning on our journey of discovery during summer of 2015. With a group varying in skill level from beginner to advanced and interests ranging from mechanical engineering to computer science, anyone and everyone can contribute and learn.',
		para2:"We're starting out with some simple things the whole team can work on, getting motor and sensor functions working with Arduino, getting practice with basic wiring and programming. Over the summer we'll be working towards a creating a rover type robot incorporating autonomous movement, remote management, advanced sensors and more.",
		para3:"Currently we're looking at applications in agriculture but with an open mind towards competitions, and the many other potential uses."
		}
		],
		images:[
		
		 'images/robitics1.jpg',
		
			
		],
		projectLeader: 'Charles Barreto (charlesibarreto@gmail.com)',
		projectFac: 'Professor Bruce Benjamin',
		projectMembers:[{
			member1:'Charles Barreto',
			member2:''
			
		}],                           
		projectMeeting:'Wednesday 12pm - 3pm and Thursday 12pm - 6pm in the New STEM room',
		projectBlog: 'http://bergenrobotics.blogspot.com/'
	},
	{
		projectName: 'Rocket Team',
		projectDesc:[
		{
		para1:''
		}
		],
		images:[
		
		 'images/rocket.jpg',
		
			
		],
		projectLeader: '',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[{
			member1:'Joan Madera',
			member2:'Daniela Liberato',
			member3:'Jesse Kent',
			member4:'Jaimin Rana',
			member5:' Jonathan Romero',
			member6:'Abraham Mindaye'
		}],                           
		projectMeeting:'',
		projectBlog: 'http://www.bergenstem.org/home.php?p=showproject&name=rocketteam'
	}
	];
	
	var projects4 = [
	{
		projectName: 'Seismometer',
		projectDesc:[
		{
		para1:'One of STEM’s many unique outputs for students to come and work together is with the seismometer project. Seismometers (or seismographs) by definition, are the instruments that detect and measure the magnitude of earthquakes, as it was discovered many years ago.',
		para2:' It is up to the STEM Union members of Bergen Community College to determine what to do with the recently built instrument, including finding a place to mantle it, coding with the Windows operating system, and detecting any movement that the seismograph captures in the process. Together, we can detect earthquakes and view them in a perspective never seen before.'
		}
		],
		images:[
		
		 'images/seiso.jpg',
		
			
		],
		projectLeader: 'Tamar Tokman (tamartokman@gmail.com), Karina Palaric',
		projectFac: 'Professor Fred Marton (fmarton@bergen.edu)',
		projectMembers:[{
			member1:'Tamar Tokman',
			member2:'Karina Palaric',
			member3:'Nicolette V Filippone'
		}],                           
		projectMeeting:'Every Monday and Wednesdays 11:00 am - 12:30 pm',
		projectBlog: 'http://seismostem.blogspot.com/'
	},
	{
		projectName: 'Solar Concentractor',
		projectDesc:[
		{
		para1:'The purpose of this project is to produce electricity by using the solar energy. In order to do so, STEM students bend a plastic-glass into a shape of a parabola by applying a momentum and force on the edges. As it is well known, all the parabolas have a focus point. Therefore, all the rays from the sun that hit the plastic-glass reflect into the focus point where they can get a high temperature.',
		para2:'At this focus point, students put an evacuated glass tube with a dark tape in between the glass that is made from cooper. The vacuum helps keeping the outer glass cool. The dark tape helps keeping the energy in the glass tube in order to get higher temperature. Inside the tube would be water that would start boiling and produce steam. Then by using electrical generator, STEM Students will generate electricity by using the produced steam.',
		para3:"So far, students have got to a temperature as high as 460 Fahrenheit's which is more than enough to even cook chicken."
		}
		],
		images:[
		
		 'images/solar.jpg',
		
			
		],
		projectLeader: '',
		projectFac: '',
		projectMembers:[{
			member1:'',
			member2:''
		}],
		projectMeeting:'',
		projectBlog: 'http://solarconcentrator1.blogspot.com/'
	},
	{
		projectName: 'Unmanned Aerial Vehicle',
		projectDesc:[
		{
		para1:'This project deals with drones, their mechanical properties and uses. The main goals are to provide students an opportunity to study the UAVs and learn how to use them for recreational and educational purposes. Also, our current goals include the creation of a 3D map of the college property, drone racing, and 3D thermal analysis of structures.'
		}
		],
		images:[
		
		 'images/unmanned.jpg',
		
			
		],
		projectLeader: 'Abreham Mindaye (mindaye.abreham@gmail.com)',
		projectFac:  	'Luis DeAbruea',
		projectMembers:[{
			member1:'Abreham Mindaye',
			member2:'Barbara Simon',
			member3:'Bilal Kellemen',
			member4:'Charles Barreto',
			member5:'Daniela Liberato',
			member6:'Eber',
			member7:'Grace Manrique',
			member8:'Ismet Demiraz',
			member9:'Sean Hodge'
		}],                           
		projectMeeting:'Wednesday and Friday, 10:30AM-1:30PM',
		projectBlog: 'http://bccstemuav.blogspot.com/'
	},
	{
		projectName: 'UV-4 UAV',
		projectDesc:[
		{
		para1:'UV-4 V/STOL UAV is an uncrewed aerial vehicle designed to transport cargo via autonomous or remote pilot operations. Students of Bergen Community College participated in several factors leading to this new aircraft design. Advanced aircraft simulation created hours of logbook support consisting of natural scenarios and ensuring optimal operations in adverse conditions.',
		para2:'The project logbook supports hours of flying in real world environments; completing several flight tests, including climb rate, maneuverability in weather conditions, and emergency procedures among other flight and support systems. The UV-4 UAV is the College’s first functional 3-D printed aircraft. The STEM initiatives at Bergen Community College (BCC) promote teamwork and creativity.'
		}
		],
		images:[
		
		 'images/uav1.jpg',
		
			
		],
		projectLeader: 'Robert Gomez (rob2k06@hotmail.com)',
		projectFac: 'Professor William Klappert, Professor Anthony Pisello, and Professor Matt King',
		projectMembers:[{
			member1:'Eric Issac',
			member2:'Abreham Mindaye',
			member3:'Anthony Vera',
			member4:'Richard Mercado',
			member5:'Nathan Schulzrinne',
			member6:'Kris Pyatt'
		}],                           
		projectMeeting:'',
		projectBlog: 'http://uv-4stem.blogspot.com/'
	},
	{
		projectName: 'Water Chemistry',
		projectDesc:[
		{
		para1:'The Water Chemistry Project at Bergen Community College is an ongoing project to test the chemical composition of the Hackensack river from shallow stream to tidewater. Experiments are conducted by taking samples of water from five locations in Bergen county and evaluating the Nitrogen Cycle by testing levels of Ammonia, Nitrites, and Nitrates while also collecting data on water temperature, clarity, pH levels, and O2 content.'
		}
		],
		images:[
		
		 'images/water.jpg',
		
			
		],
		projectLeader: '',
		projectFac: '',
		projectMembers:[{
			member1:'',
			member2:''
		}],                          
		projectMeeting:'',
		projectBlog: 'http://bccwaterchem.blogspot.com/'
	},
	];
	
	var projects5= [
	{
		projectName: 'V.E.G.E.T.A. (Wind Turbine)',
		projectDesc:[
		{
		para1:'The wind turbine team constructed a five foot vertical axis wind turbine and generator from a kit. The team designed, built and tested a novel base that allows for the full scale turbine to be attached to the roof rack of an automobile to ascertain the overall efficiency at various simulated wind speeds. Students also constructed an instrumentation panel for use with the test platform that allows for the measurement of voltage, current, power, RPM and wind speed.',
		para2:'Furthermore, the team designed a torque apparatus to isolate the efficiency of the electrical generator. From the overall efficiency and generator efficiency, the power coefficient of the wind turbine blades can be inferred. The purpose of a wind turbine system is to convert the kinetic energy of the wind into electrical energy. The system achieves this conversion in two steps. First, the blades extract the kinetic energy of the wind turning it into mechanical energy of the shaft of the turbine.',
		para3:"Second, the mechanical energy of the shaft is used to turn a generator to produce electrical energy. The purpose of testing the wind turbine is to determine the power coefficient, Cp, of the existing wind turbine design. This will serve as a baseline to evaluate the performance of the turbine and will permit future design modifications to be made."
		}
		],
		images:[
		
		 'images/vegeta.jpg',
		
			
		],
		projectLeader: 'Felipe Paucer (fpaucarv@gmail.com)',
		projectFac: 'Prof. Joseph Sivo',
		projectMembers:[{
			member1:'',
			member2:''
		}],                           
		projectMeeting:'Friday from 4:00 pm - 5:00 pm',
		projectBlog: 'http://vegeta-stem.blogspot.com/'
	}
	];
	
})();