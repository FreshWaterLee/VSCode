// import React from "react";

// const allData = new Array(25).fill(0).map((_val, i) => i + 1);
// const perPage = 10;
// const types = {
//   start: "START",
//   loaded: "LOADED"
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case types.start:
//       return { ...state, loading: true };
//     case types.loaded:
//       return {
//         ...state,
//         loading: false,
//         data: [...state.data, ...action.newData],
//         more: action.newData.length === perPage,
//         after: state.after + action.newData.length
//       };
//     default:
//       throw new Error("Don't understand action");
//   }
// };

// const MyContext = React.createContext();

// function MyProvider({ children }) {
//   const [state, dispatch] = React.useReducer(reducer, {
//     loading: false,
//     more: true,
//     data: [],
//     after: 0
//   });
//   const { loading, data, after, more } = state;

//   const load = () => {
//     dispatch({ type: types.start });

//     setTimeout(() => {
//       const newData = allData.slice(after, after + perPage);
//       dispatch({ type: types.loaded, newData });
//     }, 300);
//   };

//   return (
//     <MyContext.Provider value={{ loading, data, more, load }}>
//       {children}
//     </MyContext.Provider>
//   );
// }


// function App(){
//   const {data, loading, more, load} = React.useContext(MyContext);
//   const loader = React.useRef(load);
//   const observer =React.useRef(
//     new IntersectionObserver(entries=>{
//       const first = entries[0];
//       if(first.isIntersecting){
//         loader.current();
//       }
//     },{threshold:1})
//   );
//   const [element,setElement] = React.useState(null);

//   React.useEffect(()=>{
//     loader.current = load;
//   },[load]);

//   React.useEffect(()=>{
//     const currentElement = element;
//     const currentObserver = observer.current;

//     if(currentElement){
//       currentObserver.observe(currentElement);
//     }

//     return ()=>{
//       if(currentElement){
//         currentObserver.unobserve(currentElement);
//       }
//     };
//   },[element]);

//   return(
//     <div className = "App">
//       <ul>
//         {data.map(row =>(
//           <li key = {row} style={{background:"orange"}}>
//             {row}
//           </li>
//         ))}

//         {loading && <li>Loading...</li>}

//         {!loading && more &&(
//           <li ref = {setElement} style ={{background : "green"}}>
//             <button onClick={load}>Load More</button>
//           </li>
//         )}
//       </ul>
//     </div>
//     );
// }

// export default () => {
//   return (
//     <MyProvider>
//       <App />
//     </MyProvider>
//   );
// };
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  myref;
  intersectionObserver;

  constructor(){
    super();
    this.myref = React.createRef();
    this.state={
      count:0
    }
  }

  componentDidMount(){
    this.intersectionObserver = new IntersectionObserver(enteries=>{
      var ratio = enteries[0].intersectionRatio;
      console.log("ratio = "+ratio);
      if(ratio>0) this.setState({count:this.state.count+6});
    });
    this.intersectionObserver.observe(this.myref.current);
  }
  componentWillUnmount(){

  }

  reapeat_logo(){
    var image = ['/Main/003.jpg','/Main/002.jpg','/Main/001.jpg','/Main/007.jpg','/Main/006.jpg','/Main/004.jpg']
    var test = ['Welcome To Naju Zoo Park!!','We Have a Various Creatures!!','First Animal!!','Second Bird!!','Third Marine Life','And!! Our Zoo Parks Special Creature PokeMon!!!'];
    var str = [];
    for(var i=0; i<this.state.count; i++){
      str.push(<div key={i}>
        {/* <img src = {image[i]} className = "App-logo" alt = "logo"/> */}
        <h2>{test[i%6]}</h2>
        <img src = {image[i%6]} width = "1000px" height = "500px"/>
      </div>
      );
    }
    return str;
  }
  render(){
    return (
      <div className = "App">
        <div className = "App-header">
          <h2>Gaur Associates</h2>
          {this.reapeat_logo()}
          <div ref = {this.myref}></div>
        </div>
      </div>
    )
  }
}

export default App;