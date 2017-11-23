import React , {Component} from 'react'
import '../CSS/Info.css'

class CleanInfo extends Component {
    
    render(){
        return (
            <div className="col-md-9 push-md-3">
                 <div className="info-header">
                    Silk Information 
                </div>
                <div className="info-border">
                    <div className="info-topic-left">
                        HOW TO CLEAN
                    </div>
                    <div className="info-content">
                        &emsp;&emsp;&emsp;When we talk about silk, it is a natural product that we should take care of them carefully if not it will be destroyed and lost their value, so you should know how to clean silk in the right way. 
                        <br/>&emsp;&emsp;&emsp;First of all you must read care label before washing or do anything with silk product. There are 2 method for cleaning the silk that are Dry-cleaning and Handwashing.        
                        <br/><br/>Dry-cleaning
                        <br/>&emsp;&emsp;&emsp;This is the best way to clean your silk item because each silk item have several and complex construction such as curtains, heavy garments that is difficult to maintain in the right way with washing by water. 
                        <br/><br/>Handwashing
                        <div className="pic_zone-right">
                            <img className="info-pic" src={ require('../img/Information/clean1.jpg') } alt="clean-pic" />
                            <img className="info-pic" src={ require('../img/Information/clean.jpg') }  alt="clean-pic"/>
                        </div>
                        <br/>&emsp;&emsp;&emsp;Handwashing is suitable for some silk item such as shirt, dress, and skirts. Before you wash the silk by hand make sure that the care label allow to do that and test the dye runs by using a clean cloth in cool water with a dropping soap and rub the fabric in the part that can’t easy to see if dye runs or the sheen is changed, you must use Dry-cleaning with the item but if not you can follow this instruction.
                        <br/>&emsp;&emsp;&emsp;1. Separate the silk with difference color.
                        <br/>&emsp;&emsp;&emsp;2. Prepare warm water for washing.
                        <br/>&emsp;&emsp;&emsp;3. Use only a small amount of mild soap to wash and rub for 3-5 minutes.
                        <br/>&emsp;&emsp;&emsp;4. Rinse many time to make sure that the soap is gone.
                        <br/>&emsp;&emsp;&emsp;5. Put clear white vinegar to rinse water for maintaining the fabric and rinse again.
                        <br/>&emsp;&emsp;&emsp;6. Press the product in a clean towel to remove the water.
                        <br/>&emsp;&emsp;&emsp;7. Dry in the shade away from direct sunlight.
                        <br/><br/>Don’t Do This in Handwashing
                        <br/>&emsp;&emsp;&emsp;1. Use pre-soaking product that will destroy your product.
                        <br/>&emsp;&emsp;&emsp;2. Use detergent that will make the fabric shrink.
                        <br/>&emsp;&emsp;&emsp;3. Crush or wring your product that will damage the fabric.
                        <br/>&emsp;&emsp;&emsp;4. Tumble-dry will destroy your product. 
                        <br/>After you known about Dry-cleaning and Handwashing method for washing your silk product, you will know how to wash your silk product in the right way.
                        
                        <div className="info-ref">
                            Reference: “How Do I Take Care of My Thai Silk?” How Do I Take Care of My Thai Silk? | Mizpah International Pty Ltd, www.mizpah.biz/how-do-i-take-care-my-thai-silk.
                        </div>                    
                    </div>         
                </div>
            </div>
        )
    }
}

export default CleanInfo