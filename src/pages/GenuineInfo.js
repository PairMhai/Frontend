import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTab from '../components/LeftTab'
import '../CSS/Info.css'

class GenuineInfo extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row container-fluid">
                    <LeftTab />
                    <div className="info-layout">
                <div className="row justify-content-start">
                    <div className="info-topic">HOW TO DETERMINE IF SILK IS GENUINE</div>
                    <div className="info-content">
                    &emsp;&emsp;&emsp;There are many ways to determine if silk is genuine, we must look at weaves, pattern, prices, lustre, and testing by using burn or wedding ring. 
                    <br></br>&emsp;&emsp;&emsp;1. Price, genuine silk with high quality must have an expensive price.
                    <br></br>&emsp;&emsp;&emsp;2. Lustre, there are many different color that combination into silk so when the light effect to silk, color of silk must be change along the light angle.
                    <br></br>&emsp;&emsp;&emsp;3. Weave, silks were made by hand-woven or machine-woven they must have their identify.
                    <br></br>&emsp;&emsp;&emsp;4. Pattern 
                    <br></br>&emsp;&emsp;&emsp;5. Testing by using burn, if it’s smell after burning like burnt hair and produces black ashes, it mean that is genuine silk.
                    <br></br>&emsp;&emsp;&emsp;6. Testing by using wedding ring, this testing cannot use for all type of silk. We can use this testing with low weight silk by pull silk through wedding ring. If its can thread the wedding ring, it mean that is genuine silk.
        
        <div className="info-ref">Reference: http://www.mizpah.biz/how-do-i-tell-if-my-silk-genuine-or-artificial</div>
        
                    </div>
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default GenuineInfo