import React from 'react';

const WeatherReport = (props) => {
    return (
        <div className='weather-report mt-4 text-center'>
            <p> <i className="fas fa-cloud-sun"></i>Today's Weather Report: 11/06</p>

            <div className="weather-card">
                <div className="d-flex justify-content-center align-items-center">
                    <h4 className='mb-0 me-2'>Sunny</h4>
                </div>

                <img className='img-fluid' src="https://pokeland-legends.club/public/assets/img/weather/sunny.webp" alt="Pokémon Legends Weather Report"></img>
            </div>

        </div>
    );
}
export default WeatherReport;