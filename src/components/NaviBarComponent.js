import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Avatar from 'material-ui/Avatar';

const recentsIcon = <FontIcon className="material-icons">Upload File</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">Logout</FontIcon>;
const tofik = <FontIcon className="material-icons"><Avatar src="http://sites.ieee.org/poland-apaemtt/files/2013/06/Wojciech-Krzysztofik.jpg"
size={50}/></FontIcon>;

const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class NaviBarComponent extends Component {
  constructor(props)
  {
    super(props);
    
  this.state = {
    selectedIndex: 0,
    fileName: ''
  };

  this.handleUploadImage = this.handleUploadImage.bind(this);

  }
  select = (index) => this.setState({selectedIndex: index});

  handleUploadImage(ev) {
    
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    console.log(this.uploadInput.files[0].name)
    this.setState({fileName: this.uploadInput.files[0].name});

    fetch('http://kacperkluka.me/', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then( body => this.props.dispatch(body));
});
    
}

  render() {

    const style = {margin: 5};
    
    const data = new FormData();

    return (
      <div>
      <Paper zDepth={1}>

        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <form onSubmit={this.handleUploadImage}>
        <button>
          <BottomNavigationItem
            label="Upoad File"
            icon={recentsIcon}
            onClick={() => console.log(this.state.fileName)}
          />
        </button>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" accept='.zip'/>
          </form>
          <BottomNavigationItem
            label="Logout"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            
            icon={tofik}
            onClick={() => this.select(1)}
          />
          
        </BottomNavigation>
        
    
      </Paper>
      
      </div>
    );
  }
}

export default NaviBarComponent;