import React from "react";
import Card from "./component/Card";
import Sidebar from "./component/Sidebar";

class App extends React.Component{
  constructor(){
    super();
    this.state={
        items:[],
        years:[],
        isLoaded:false
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData=()=>{
    fetch('https://api.spaceXdata.com/v3/launches?limit=100')
      .then(res=>res.json())
      .then(json=>{
        var myArray = [];
        json.map((item)=>{
          myArray.push(item.launch_year)
        });
        var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
        //console.log(json);
        this.setState({
          isLoaded:true,
          items:json,
          years:unique
        })
      });
  }
  filterYear=(year)=>{
    fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+year)
    .then(res=>res.json())
    .then(json=>{
      //console.log(json);
      this.setState({
        isLoaded:true,
        items:json,
      })
    });
  }
  launchSuccess=(isSuccess)=>{
    // console.log('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccess)
    fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccess)
    .then(res=>res.json())
    .then(json=>{
      //console.log(json);
      this.setState({
        isLoaded:true,
        items:json,
      })
    });
  }
  landSuccess=(isSuccess)=>{
    fetch('https://api.spaceXdata.com/v3/launches?limit=100&land_success='+isSuccess)
    .then(res=>res.json())
    .then(json=>{
      //console.log(json);
      this.setState({
        isLoaded:true,
        items:json,
      })
    });
  }
  render(){
    const {items,years,isLoaded}=this.state;
    if(!isLoaded){
      return(
        <div><h1>Loading...</h1></div>
      );
    }
    else{
      return(
        <div className="App container">
          <div  style={styles.topBar}><h1>SpaceX Launch Programs</h1></div><br></br>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Sidebar 
                years={years} 
                onFilterYear={this.filterYear}
                onLaunchSuccess={this.launchSuccess}
                onLandSuccess={this.landSuccess}
                onFetchData={this.fetchData}
              />
              </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <Card items={items}/>
              <div>
                <h3 style={{textAlign:"center",padding:20}}>Developed by: Ravi Kant Prasad</h3>
              </div>
              </div>        
          </div>
        </div>
      );
    }
  }
}

const styles={
  topBar:{
    position:'sticky',
    top:0,
    backgroundColor:'white',
    zIndex:1,
    padding:10
  }
}
export default App;
