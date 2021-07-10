import React from 'react';
import YearButton from './YearButton';

const Sidebar=(props)=>{
        const {years,onFilterYear,onLaunchSuccess,onLandSuccess,onFetchData}=props;
        return (
            <div className="sidebar shadow"  style={{position:'sticky',top:100}}>
                <div className="d-flex justify-content-between">
                    <div><h2>Filters</h2></div>
                    <div className='btn' style={{color:'blue'}} onClick={()=>onFetchData()}><b>Clear Filter</b></div>
                </div>
                <h5 style={{textAlign:"center"}}>Launch Year</h5>
                <div>
                    {years.map((year)=>{
                        return(
                            <YearButton year={year} onFilterYear={onFilterYear}/>
                        )
                    })}
                </div>
                <h5 style={{textAlign:"center"}}>Successful Launch</h5>
                <div className="col-lg-5 col-md-5 col-sm-5 btn btn-success m-2"
                onClick={()=>onLaunchSuccess(true)}>True</div>
                <div className="col-lg-5 col-md-5 col-sm-5 btn btn-success m-2"
                onClick={()=>onLaunchSuccess(false)}>False</div>
                <h5 style={{textAlign:"center"}}>Successful Landing</h5> 
                <div className="col-lg-5 col-md-5 col-sm-5 btn btn-success m-2"
                onClick={()=>onLandSuccess(true)}>True</div>
                <div className="col-lg-5 col-md-5 col-sm-5 btn btn-success m-2"
                onClick={()=>onLandSuccess(false)}>False</div>          
            </div>
        );
}

export default Sidebar;