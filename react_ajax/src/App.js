import React, { Component } from 'react';
{
  var num = 0;
  var kind = 0;
} //이미지 전환을 위한 넘버

class img_path extends Component{
  render(){
    return(
      <div>img!!</div>
    );
  }
}
class Nav extends Component{
  // componentDidMount(){
  //   fetch('list.json') //ajax 통신
  //   .then(function(result){ // then 은 연결후 데이터 처리를 할때 사용
  //     return result.json();
  //   })
  //   .then(function(json){
  //     console.log(json);
  //     this.setState({list:json});
  //   }.bind(this));
  // }
  render(){
    var listTag = [];
    for (var i =0; i<this.props.list.length; i++){
      var li = this.props.list[i];
      listTag.push(
      <li key ={li.id}>
        <a href = {li.id} data-id = {li.id} onClick={function(e){
          e.preventDefault();
          console.log("trigger");
          this.props.onClick(e.target.dataset.id);
        }.bind(this)}>
          {li.title}
        </a>
      </li>)
    }
    return(
    <nav>
      <ul>
        {listTag}
      </ul>
    </nav>
    );
  }
}
class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}
class NowLoading extends Component{
  render(){
    return <div>Now Loading....</div>
  }
}

class App extends Component {
  state = {
    article:{
    item:{title:'Welcome', desc : 'Hello, React & Ajax'},
    isLoading:false
  },
    list:{
      items:[],
      isLoading:false
    }
  }
  componentDidMount(){
    var newList = Object.assign({},this.state.list,{isLoading : true});
    this.setState({list:newList})
    fetch('list.json') //ajax 통신
    .then(function(result){ // then 은 연결후 데이터 처리를 할때 사용
      return result.json();
    })
    .then(function(json){
      console.log(json);
      this.setState({list:{ //리스트 데이터 
      items:json,
      isLoading:false}});
    }.bind(this));
  }
  render(){
    var NavTag = null;
    if(this.state.list.isLoading){
      NavTag = <NowLoading></NowLoading>
    }
    else{
      NavTag= <Nav list = {this.state.list.items} onClick = {function(id){
        var newArticle = Object.assign({},this.state.article,{isLoading : true});
        this.setState({article:newArticle});
        fetch(id+'.json').then(function(result){
          return result.json();
        })
        .then(function(json){
          this.setState({
            article:{
              item:{
              title :json.title,
              desc: json.desc,
          isLoading:false}
          }
          })
        }.bind(this));
      }.bind(this)}></Nav>
    }
    var ArticleTag=null;
    if(this.state.article.isLoading){
      ArticleTag = <NowLoading></NowLoading>
    }
    else{
      ArticleTag = <Article title={this.state.article.item.title} desc = {this.state.article.item.desc}></Article>;
    }
    return (
      <div className="App">
        <h1>Web</h1>
        {NavTag}
        {ArticleTag}
      </div>
    )
  }
}
export default App;
