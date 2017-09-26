import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTab from '../components/LeftTab'
import '../CSS/Info.css'

class CareInfo extends Component {

    render(){
        return (
            <div>
            <Navbar /> 
            <div className="row container-fluid">
                <LeftTab />
                <div className="info-layout">
            <div className="row justify-content-start">
                <div className="info-topic">HOW TO CARE FOR THAI SILK </div>
                <div className="info-content">
                &emsp;&emsp;&emsp;Tips for shine and bright colors of silk.
                    After rinsed your fabric with clean water, Mix 1 tablespoon of vinegar with 1-2 liters of water, then the silk soak 
                    for 1-2 minutes to sink all over the water in a mixture of distilled vinegar. And then rinse with clean water and squeeze lightly,
                    and then Dry in the shade away from direct sunlight. Some people like fragrances and want to make the fabric soft, soaked in silk in a softener, 
                    water, silicone or baby oil for one of the last water before dry your fabric.
                    <br></br><br></br>                
                    Ironing
                    <br></br>&emsp;&emsp;&emsp;Iron on the inside while the silk is damp or dampen the silk with a misted spray of distilled water rinse the whole area thoroughly. Then Ironing with steam iron.
                    In general silk is a protein fiber so it is destroyed by the UV rays which have in the sunlight.
                    In alkaline conditions And high temperatures will cause the silk to fall and reduce the luster of the silk. So understanding the nature of silk will allow us to avoid destroying a silk  by ignorance.
                    <br></br><br></br>
                    Tips to storage a silk
                    <br></br>&emsp;&emsp;&emsp;When folded a silk it will cause wrinkles in silk, to reduce this problem you can roll a silk instead of fold a silk.
                    <br></br><br></br>
                    Tips to protect a silk from an insects
                    <br></br>&emsp;&emsp;&emsp;If we rarely use a silk and keep it in a closet it could have insects destroy fabric.
                    To prevent this problem, you have to cracked pepper seeds slightly then, put it a small bag and hang in the corner of the closet.
                <div className="info-ref">References:
                “Facebook.” การดูแลรักษาผ้าไหมไทย, www.facebook.com/notes/ดาหวันไหมไทย/การดูแลรักษาผ้าไหมไทย/916689258365515/.
               </div>                    
                </div>
            </div>
        </div>
            </div>
        </div>
        );
    }
}

export default CareInfo