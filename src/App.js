import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { Pane, Button, Text, Heading, Icon } from 'evergreen-ui';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
  <Pane flex={1} alignItems="center" display="flex">
    <Heading size={600}>https://hire.thisfrontend.dev</Heading>
  </Pane>
  <Pane>
    {/* Below you can see the marginRight property on a Button. */}
    <Button marginRight={16}>Button</Button>
    <Button appearance="primary">Primary Button</Button>
  </Pane>
</Pane>
<Pane clearfix>
  <Pane
    elevation={0}
    float="left"
    backgroundColor="white"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 0</Text>
    <Icon icon="endorsed" size={40} />
    <Text size={300}>Flat Panes</Text>
  </Pane>
  <Pane
    elevation={1}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 1</Text>
    <Text size={300}>Floating Panes</Text>
  </Pane>
</Pane>
      </div>
    );
  }
}

export default App;
