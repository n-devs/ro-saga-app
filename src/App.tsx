
import {
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
// import './theme/variables.css';
import './theme/btn.css';
import React from 'react';
import { Grid } from '@mui/material';
import RegisterDialog from './components/RegisterDialog';
import { isMobile } from "mobile-device-detect";

setupIonicReact();

const App: React.FC = () => {
  const [ipv4, setIPv4] = React.useState<string>("")
  const [play, setPlay] = React.useState<boolean>(false)
  const [register, setRegister] = React.useState<boolean>(false)
  const refEl = React.useRef<null | any>(null)

  var window: any & Window & typeof global
  const handleClickPlay = () => {
    setPlay(true)


    // fetch("https://raw.githubusercontent.com/n-devs/public-ip/data/ip-address.json").then(res => res.json())
    //   .then(data => {
    setTimeout(() => {

      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'game.js';
      document.getElementsByTagName('body')[0].appendChild(script);

      // }).catch(err => { throw err });
      refEl.current.style.display = 'none'
    }, 1000)
  }

  const handleClickRegister = () => {
    setRegister(true)
  }

  const handleCloseRegister = () => {
    setRegister(false)
  }

  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/n-devs/public-ip/data/ip-address.json").then(res => res.json())
      .then(data => {
        setIPv4(data.ipv4)
      })

  }, [])

  return (
    <>

      {play ? (<div ref={refEl} style={{
        position: 'fixed',
        zIndex: 1,
        bottom: '10vh',
        width: ' 100%',
        display: 'flex',
        justifyContent: 'center',
        height: "10vh"
      }}>
        <span className="loader"></span>

      </div>) : (<>
        <RegisterDialog open={register} ipv4={ipv4} onClose={handleCloseRegister}></RegisterDialog>
        <div id="box-install" style={{
          position: 'fixed',
          zIndex: 1,
          bottom: '10vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6} style={{
                  justifyContent: 'flex-end',
                  display: 'flex',
                }}>
                  <button className="btn-1" style={{
                    display: 'block',
                    fontSize: isMobile ? "large" : 'xxx-large',
                    fontWeight: 'bold',
                  }} onClick={handleClickRegister}>
                    Register
                  </button>
                </Grid>
                <Grid item xs={6} >
                  <button className="btn-1" style={{
                    display: 'block',
                    fontSize: isMobile ? "large" : 'xxx-large',
                    fontWeight: 'bold',
                  }} onClick={handleClickPlay}>
                    Play Now!
                  </button>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </div>
      </>)}

    </>
  );
};

export default App;
