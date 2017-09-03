import React , {Component} from 'react'

class LeftTab extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                <br></br>
                   <a>&nbsp;&nbsp;SORT BY :</a>
                   <br></br>
                   <br></br>
                   &nbsp;&nbsp;<input type="radio" name="radio-btn" />&nbsp;&nbsp;PRICE
                   &nbsp;&nbsp;<input type="radio" name="radio-btn" />&nbsp;&nbsp;ALPHABET
                   <br></br>
                   <br></br>
                    <form action="" method="get" class="search">

                    <div class="form__field">
                        &nbsp;&nbsp;<input type="search" name="search" placeholder="Enter here" class="form__input"></input>
                        <input type="submit" value="Search" class="button"></input>
                  
                    </div>
                    </form>
                    <br></br>
                   <a>&nbsp;&nbsp;PRICE RANGE :</a>
                   <br></br>
                   <br></br>
                   


                
                </div>
                </div>

                
        );
    }
}

export default LeftTab