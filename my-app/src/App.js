import logo from './logo.svg';
import './App.css';
import twitter from './twitter.svg';
import strava from './strava.svg';
import calendar from './calendar.svg';

function App() {
  return (
	  
    <div className="App">
		<div className='nav-bar'>
			<div className='me'>Paolo Bondi</div>
			<div className='linkedin'>LinkedIn</div>
			<div className='resume'>Resume</div>
		</div>
		<div className='body'>
		<h1 className='proj-title'>
			Projects
		</h1>
			<div className='projects'>
				<div className='proj-link'>
					<div>
						<a className='a-img' target='_blank' href='https://twitter.com/vaxbot1'>
							<img src={twitter} alt = '' className='img'  />	
						</a>
						<div className='twitter-container'>
							<div>
								Twitter Vaccine Bot
							</div>
							<div className='twitter-info'>
								Tweets the most recent data regarding vaccine appointments in the los angeles area
							</div>
						</div>
						
					</div>
				</div>
				<div className='proj-link2'>
					<div>
						<a className='a-img' target='_blank' href='https://main.d3jlja8r03ruhu.amplifyapp.com/'>
							<img src={strava} alt = '' className='img'  />	
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
						<a className='a-img' target='_blank' href='https://main.d2mu5t2r1us665.amplifyapp.com/'>
							<img src={calendar} alt = '' className='img'  />	
						</a>
						<div className='strava-intensity-container'>
							<div>
								Strava Search Feature
							</div>
							<div className='strava-intesity-info'>
								See all previous activities performed and search for a specific activity
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<h1 className='proj-title'>
				Work
			</h1>
			<div className='proj-link'>
					<div>
						<a className='a-img' target='_blank' href='https://analytics.doctorevidence.com/'>
							<img src={require('./DRE.png')} alt = '' className='img'  />	
						</a>
						<div className='twitter-container'>
							<div>
								Twitter Vaccine Bot
							</div>
							<div className='twitter-info'>
								Tweets the most recent data regarding vaccine appointments in the los angeles area
							</div>
						</div>
						
					</div>
				</div>
		</div>

    </div>

  );
}

export default App;
