import React from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import Skills from './Skills';
import About from './About';
import Footer from './Footer';
import "./App.scss";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    projectName: 'Seed&Spark',
                    projectGridDescription: 'Crowdfunding and streaming platform',
                    projectDetailDescription: (
                        <div>
                            <p>I was lead front-end developer on the entirety of this site.  Built in Javascript/VueJS with a Laravel PHP backend framework.</p>

                            <p>(All work and images property of Seed&Spark.)</p>
                            <p><a target="_blank" href="http://seedandspark.com">Seed&Spark website</a></p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/ss.jpg'),
                    images: [
                        require('../assets/project_images/ss/fund.jpg'),
                        require('../assets/project_images/ss/library.jpg'),
                        require('../assets/project_images/ss/campaign.jpg'),
                        require('../assets/project_images/ss/class.jpg'),
                        require('../assets/project_images/ss/distro-dash.jpg'),
                        require('../assets/project_images/ss/project-dash.jpg'),
                        require('../assets/project_images/ss/messages.jpg')
                    ]
                },
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
                },
                {
                    projectName: 'Cisco.com',
                    projectGridDescription: 'Cisco homepage flash banner and internal tools',
                    projectDetailDescription: (
                        <div>
                            <h4>Agency: The1stMovement</h4>
                            <p>I built a variety of Flash tools for Cisco, including a hero banner with a custom videoplayer, and microsites built in Flash for both internal and external use.</p>

                            <p>(All work and images property of The1stMovement and Cisco)</p>
                        </div>
                    ),
                    projectThumbnail: require('../assets/project_thumbnails/cisco.jpg'),
                    images: [
                        require('../assets/project_images/cisco/betterBusiness.jpg'),
                        require('../assets/project_images/cisco/cisco_homepage.jpg'),
                        require('../assets/project_images/cisco/cisco_together.jpg'),
                        require('../assets/project_images/cisco/smallbusiness.jpg'),
                        
                    ]
                },
                {
                    projectName: 'LA Gay and Lesbian Center - An Evening With Womem',
                    projectGridDescription: 'Charity Event HTML Website',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/aeww.jpg'),
                    images: [
                        require('../assets/project_images/aeww/aeww.jpg')]
                },
                {
                    projectName: 'Estelle Leeds - Artist Management',
                    projectGridDescription: 'Website managed in Joomla',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/estelle.jpg'),
                    images: [
                        require('../assets/project_images/estelle/estelle.jpg')]
                },
                {
                    projectName: 'Diane Maire Photography',
                    projectGridDescription: 'Portfolio HTML Website',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/dianamaire.jpg'),
                    images: [
                        require('../assets/project_images/dianamaire/dianamaire.jpg')]
                },
                {
                    projectName: 'Muse Hairdressing',
                    projectGridDescription: 'HTML Website',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/muse.jpg'),
                    images: [
                        require('../assets/project_images/muse/muse1.jpg')]
                },
                {
                    projectName: 'El Monte Collision Center',
                    projectGridDescription: 'Flash Website',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/elmonte.jpg'),
                    images: [
                        require('../assets/project_images/elmonte/elmonte.jpg')]
                },
                {
                    projectName: 'Flash and HTML5 Banners',
                    projectGridDescription: 'Various Flash and HTML5 banners for Aruba, GOOD, Adaptive Insights',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/good.jpg'),
                    images: [
                        require('../assets/project_images/banners/good.jpg'),
                        require('../assets/project_images/banners/ai1.jpg'),
                        require('../assets/project_images/banners/aruba.jpg'),
                        require('../assets/project_images/banners/aruba2.jpg')]
                },
                {
                    projectName: 'Flash ad games',
                    projectGridDescription: 'Various Flash and HTML5 games for Florida\'s Natural, Jack in the Box, CA Milk, and Mott\'s',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/milkswap.jpg'),
                    images: [
                        require('../assets/project_images/games/florida.jpg'),
                        require('../assets/project_images/games/jacks.jpg'),
                        require('../assets/project_images/games/milkswap.jpg'),
                        require('../assets/project_images/games/motts.jpg')]
                },
                {
                    projectName: 'Honeys Getting Hitched',
                    projectGridDescription: 'Wedding Website',
                    projectDetailDescription: '',
                    projectThumbnail: require('../assets/project_thumbnails/honeys.jpg'),
                    images: [
                        require('../assets/project_images/honeys/honeys.jpg')]
                }
            ]
        }
    }

    render(){
        return (
            <div className="site-container">
                <Header />
                {/*
                <div className="hero">
                    <div className="wrapper">
                        <h1>Front End Web Development</h1>
                    </div>
                </div>
                */}
                <ProjectGrid projects={this.state.projects} />
                <Skills />
                <About />
                <Footer />
            </div>
            
        );
    }
}

export default App;