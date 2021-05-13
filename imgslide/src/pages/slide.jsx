import React,{Component} from 'react'

class slide extends Component{
    constructor(props){
        super(props);
        state = {
            imgUlWidth:null
        }
    
    }
    componentDidMount(){
        this.setState({
            imgUlWidth : this.getWidth.offsetWidth,
            imgListSumWidth: this.getWidth.offsetWidth * this.props.contentMainImgList.length,
        });
    }
    render(){
        const {contentMainImgList, contentMainName} = this.props;
        const {slideX} = this.state;
        return(
            <div>test</div>
        )
    }
}

export default slide;