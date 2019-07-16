import React, {Component} from 'react';
import Flight from './Flights/Flight';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Customers from './Customers/Customers';





function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 0 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }
  


class Main extends Component {
constructor(){
    super();
    this.state ={
        value: 0
    }
    this.handleChange = this.handleChange.bind(this);
}
   
         

        
   
handleChange  (event, value) {
    this.setState({ value });
  };
    

    render() {
        const value = this.state.value;
        return (
            <div>

          <NoSsr>
        <div >
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="Flights management" />
              <LinkTab label="Customers manegement" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
              <Flight/>
          </TabContainer>}
          {value === 1 && <TabContainer>
              <Customers/>
          </TabContainer>}
        </div>
      </NoSsr>
                
            </div>
        )
    }
}
export default Main;
