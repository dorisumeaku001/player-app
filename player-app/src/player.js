import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    
      
      
        {name}
        
          Team: {team}
          

          Nationality: {nationality}
          

          Jersey Number: {jerseyNumber}
          

          Age: {age}
        
      
    
  );
  
};

export default Player;