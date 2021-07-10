import React from 'react';

const YearButton=(props)=>{
        const {year,onFilterYear}=props;
        return (
            <div className="col-lg-5 col-md-5 col-sm-5 btn btn-success m-2" 
            onClick={()=>onFilterYear(year)}>{year}</div>
        );
}

export default YearButton;