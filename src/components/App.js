import React from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import "./App.scss";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    projectName: 'Paul Mitchell Interactive Pods',
                    projectGridDescription: 'Interactive AIR Application',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: We Are Matik</h4>
                            <p>I was lead developer and software architect on this large project at Caesar's Palace in Las Vegas. We built 5 touch-screen games, a user/prize database, a leaderboard, and a prize center. The players scanned an RFID badge at 5 stations to play games and win prizes, while learning about Paul Mitchell's products and test their knowledge.</p>

                            <p>Awards won:<br />
                            Davey Award 2013 Best In Show, 2013 Gold Award<br />
                            The Communicator Awards - Interactive Media Excellence - Direct Marketing</p>

                            <p>(All work and images property of We Are Matik)</p>

                            <p><a target="_blank" href="http://wearematik.com/work/the-gathering-2013/">We Are Matik: Project Detail</a></p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/paul_mitchell.jpg'),
                    images: [
                        require('../assets/project_images/paul_mitchell/pm1.jpg'),
                        require('../assets/project_images/paul_mitchell/pm2.jpg'),
                        require('../assets/project_images/paul_mitchell/pm3.jpg')
                    ]
                },
                {
                    projectName: 'Mo-Fi Headphones: Mobile Site',
                    projectGridDescription: 'Responsive mobile website',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: Milo Digital</h4>
                            <p>Responsive mobile site which includes an animated carousel, sticky header, full screen photo gallery, and accordion footer menu.</p>

                            <p>(All work and images property of BlueMic and/or MiloDigital.)</p>
                            <p><a target="_blank" href="http://mofiheadphones.com/mobile">Mo-Fi Headphones Mobile Site</a>(best viewed on a mobile device)</p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/mofi_mobile.jpg'),
                    images: [
                        require('../assets/project_images/mofi/mofi_mobile.jpg')
                    ]
                },
                {
                    projectName: 'John Wick Theatrical Website',
                    projectGridDescription: 'Interactive AIR Application',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: Heavenspot via Milo Digital</h4>
                            <p>I was a the lead front-end developer for this responsive theatrical site. Site features included an animated interactive canvas with zoom/pan features, photo and video galleries, and HTML5 video transitions.</p>

                            <p>(All work and images property of Lionsgate and Heavenspot.)</p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/john_wick.jpg'),
                    images: [
                        require('../assets/project_images/john_wick/jw1.jpg'),
                        require('../assets/project_images/john_wick/jw2.jpg')
                    ]
                },
                {
                    projectName: 'NYT Paid Post Ad for TD Ameritrade',
                    projectGridDescription: 'Parallax/animated landing page',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: HYFN/Milo Digital</h4>
                            <p>Responsive landing page article/advertisement. HTML5 animations and parallax. Built using RequireJS, HTML5, SASS, JS/JQuery.</p>

                            <p>(All work and images property of HYFN and/or MiloDigital.)</p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/td_ameritrade.jpg'),
                    images: [
                        require('../assets/project_images/td_ameritrade/tdameritrade2.jpg'),
                        require('../assets/project_images/td_ameritrade/tdameritrade1.jpg'),
                        
                    ]
                },
                {
                    projectName: 'Samsung Galaxy Gesture Wall',
                    projectGridDescription: 'Interactive AIR Mobile Application',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: We Are Matik</h4>
                            <p>Using Adobe AIR for Android and a large number of Samsung Galaxy mobile devices, we built a gesture wall which displayed Samsung-branded content on Samsung G4s. This wall was displayed at a NYC launch event featuring Bruno Mars, and was repurposed for a Samsung popup shop at Comic Con 2013 in San Diego, CA.</p>

                            <p>(All work and images property of We Are Matik)</p>
                            <p><a target="_blank" href="http://wearematik.com/work/samsung-galaxy-gesture-wall/">We Are Matik: Project Detail</a></p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/samsung.jpg'),
                    images: [
                        require('../assets/project_images/samsung/Gesture_Dark_01.jpg'),
                        require('../assets/project_images/samsung/Gesture_Dark_02.jpg'),
                        require('../assets/project_images/samsung/samsung1.jpg'),
                        require('../assets/project_images/samsung/Gesture_Comicon.jpg'),
                        require('../assets/project_images/samsung/samsung2.jpg'),
                        require('../assets/project_images/samsung/samsung3.jpg'),
                        
                    ]
                }
            ]
        }
    }

    render(){
        return (
            <div className="site-container">
                <Header />
                <ProjectGrid projects={this.state.projects} />
            </div>
            
        );
    }
}

export default App;