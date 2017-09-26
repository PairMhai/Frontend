import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabInformation from '../components/LeftTabInformation'
import '../CSS/Info.css'

class Information extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div class="container-fluid">
                <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
                <LeftTabInformation />
                </div>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <div className="info-topic">HISTORY OF THAI SILK </div>
                    <div className="info-content">
                    &emsp;&emsp;&emsp;The history of silk began 4700 years ago in China. The evidence shows that China spreaded the culture of silk weaving 
                process to nearby countries, including Thailand. However, the archeologists found the remnant of silk cloth in Ban Chiang, 
                Chiang Mai province. The oldest remnant of cloth is from 3000 years old approximately. At the King Rama V reign, 
                his majesty supported silk farming (sericulture) and Thai weaving. But at that time the technology knowledge 
                was not ready for silk farming, Thai people could only create rough silk materials. Not too long after that,
                the King created the silk department, which later called the Queen Sirikit Department of Sericulture, to support silk farming. 
                The King also hired the Japanese expert to help improving silk farming processes in Thailand. Nevertheless, after the King 
                passed away the silk farming became unpopular. Until 2479 BE, the government started to promote silk farming again along with
                the year 2491 BE,  Jim Thompson founded the company selling Thai silk products and materials. 
                <br></br>&emsp;&emsp;&emsp;Nowaday, silk weaving and silk market have grown and develop to be more industrial in order to 
                export goods to foreign countries, including Thailand.
                <div className="info-ref"> References:
“ประวัติ และความเป็นมาของผ้าไหมไทย.” ประวัติ และความเป็นมาของผ้าไหมไทย ~, thaiphamai.blogspot.com/2013/04/blog-post.html.
</div>
               

                    </div>

                
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default Information