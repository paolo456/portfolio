import logo from './logo.svg';
import './App.css';
import twitter from './twitter.svg';
import strava from './strava.svg';
import calendar from './calendar.svg';
import dre from './DRE.png';
import usf from './usf.png';
import git from './Octocat.png'

function App() {
	const startGitAnimation = (e) => {
		//pass classname
		document.querySelector(e).classList.add('start-animation')
	}
  return (
	  
    <div className="App">
		<div className='nav-bar'>
			<div className='me'>Paolo Bondi</div>
			<div><a className='linkedin' href='https://www.linkedin.com/in/paolo-bondi/'>LinkedIn</a></div>
			<div><a className='git' href='https://github.com/paolo456'>Github</a></div>
			<div className='underline-nav'></div>
		</div>
		<div className='body'>
		<div className="slide-right">
			<h1>Projects</h1>
		</div>
		<div className='slide-underline'><div className='underline'></div></div>
			<div className='projects'>
				<div className='proj-link' >
					<div >
						<div onClick={()=> window.open('https://github.com/paolo456/VAX-app', "_blank")} className='div-git'><img src={git} className='a-git'></img></div>
						<a className='a-img' target='_blank' href='https://twitter.com/vaxbot1'>
							<img onMouseEnter={() => startGitAnimation('.a-git')} src={twitter} alt = '' className='img'  />	
						</a>
						<div className='twitter-container' >
							<div>
								Twitter Vaccine Bot
							</div>
							<div className='twitter-info'>
								Tweets the most recent data regarding vaccine appointments in the Los Angeles area
							</div>
						</div>
						
					</div>
				</div>
				<div className='proj-link2'>
					<div>
					<div onClick={()=> window.open('https://github.com/paolo456/Strava-App', "_blank")} className='div-git'><img src={git} className='a-git-strava'></img></div>
						<a className='a-img' target='_blank' href='https://main.d3jlja8r03ruhu.amplifyapp.com/'>
							<img onMouseEnter={() => startGitAnimation('.a-git-strava')} src={strava} alt = '' className='img'  />	
						</a>
						<div className='strava-intensity-container'>
							<div>
								Strava Intensity Comparison
							</div>
							<div className='strava-intesity-info'>
								Compare heart rate intensity between two activities you have performed and saved to Strava
							</div>
						</div>
						
					</div>
				</div>
				<div className='proj-link3'>
					<div>
					<div onClick={()=> window.open('https://github.com/paolo456/aws-strava-calendar', "_blank")} className='div-git'><img src={git} className='a-git-strava-search'></img></div>
						<a className='a-img' target='_blank' href='https://main.d2mu5t2r1us665.amplifyapp.com/'>
							<img onMouseEnter={() => startGitAnimation('.a-git-strava-search')} src={calendar} alt = '' className='img'  />	
						</a>
						<div className='strava-intensity-container'>
							<div>
								Strava Search Feature
							</div>
							<div className='strava-intesity-info'>
								View all previous activities performed. Search and favorite a specific activity.
							</div>
						</div>
						
					</div>
				</div>
			<div className="slide-right">
				<h1>Work</h1>
			</div>
			<div className='slide-underline'><div className='underline'></div></div>
			<div className='proj-link'>
					<div>
						<a className='a-img' target='_blank' href='https://www.drevidence.com/'>
							<img src={dre} alt = '' className='img'  />	
						</a>
						<div className='twitter-container'>
							<div>
								Doctor Evidence
							</div>
							<div className='twitter-info'>
								Created and maintained application features in Javascript, Typescript and Alkali.js
							</div>
						</div>
						
					</div>
				</div>
			<div className="slide-right">
				<h1>Education</h1>
			</div>
			<div className='slide-underline'><div className='underline'></div></div>
			<div className='proj-link'>
					<div>
						<a className='a-img' target='_blank' href='https://www.usfca.edu/'>
							<img src={usf} alt = '' className='img'  />	
						</a>
						<div className='twitter-container'>
							<div>
								University of San Francisco
							</div>
							<div className='twitter-info'>
								Bachelor of Science
							</div>
							<div className='twitter-info'>
								2015 - 2019
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
		</div>

    </div>

  );
}

export default App;
