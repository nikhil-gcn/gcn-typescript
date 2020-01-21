import React, { Component } from 'react';

import { createPlayer } from '@discovery/sonic-player-eurosport';

const env = {
    CLIENT_NAME: "test-site",
    HOST: "eu1-test.disco-api.com",
    SONIC_REALM: "eurosports"
  };
  
  const Player = createPlayer({ env });

  class Player_Web extends Component{
    render(){
      return(
        <div>
          <Player
          streamId={{ id: "97896", type: "VIDEO" }}
          />
        </div>
      )
    }
  }
  
export default Player_Web;
