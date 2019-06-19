import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet,ToastAndroid} from 'react-native'

class SwichExample extends Component {
   state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
   }
   watchID: ?number = null;
   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         const lastPosition = JSON.stringify(position);
         ToastAndroid.show('Watch', ToastAndroid.SHORT);
         this.setState({ lastPosition });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000, distanceFilter :1 });
   }
   componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Initial position:
            </Text>
            
            <Text>
               {this.state.initialPosition}
            </Text>
            
            <Text style = {styles.boldText}>
               Current position:
            </Text>
            
            <Text>
               {this.state.lastPosition}
            </Text>
         </View>
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   boldText: {
      fontSize: 30,
      color: 'red',
   }
})