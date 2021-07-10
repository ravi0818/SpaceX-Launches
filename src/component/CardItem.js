import React from 'react';

const CardItem=(props)=>{
        const {flight_number,mission_name,launch_year,launch_success,rocket,links,details}=props.item;
        const land_success=rocket.first_stage.cores[0].land_success;
        return (
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="shadow p-3" style={{height:'100%',position:'relative'}}>
                    <div style={styles.imageContainer}><img src={links.mission_patch} style={styles.image}/></div><br></br>
                    <div>
                        <h3>#{flight_number} {mission_name}</h3><br></br>
                        <p><b>Rocket Name : </b>{rocket.rocket_name}</p>
                        <p><b>Launch Year : </b>{launch_year}</p>
                        <p><b>Launch :</b> {launch_success?'Successful':'Unsuccessful'}</p>
                        <p><b>Land :</b> {land_success==undefined?'NA':(land_success?'Successful':'Unsuccessful')}</p>
                    </div>
                </div>
            </div>
        );
}

const styles={
    image:{
        height:'100%',
        width:'100%',
        objectFit:'cover',
        borderRadius:4,
        background:'#ccc',
    },
    imageContainer:{
        width:'100%'
    }
}


export default CardItem;