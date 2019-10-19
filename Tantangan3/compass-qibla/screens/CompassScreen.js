import React, {useRef, useEffect, useState, useCallback} from 'react'
import { View, Modal, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { Magnetometer } from "expo-sensors";

import Colors from '../Constants/Colors'
import FontSize from '../Constants/FontSize'
import IconSize from '../Constants/IconSize'

import * as API from '../Api'

const CompassScreen = props => {
  const animatedValue = new Animated.Value(0)
  const animatedValueRef = useRef(animatedValue)
  const [qiblaDegree, setQiblaDegree] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);

  const spinAnimation = () => {
    // console.log("here")
    Animated.timing(animatedValueRef.current, {
      toValue: rotateDegree,
      duration: 350,
      easing: Easing.linear
    }).start()
  }

  const rotate = animatedValueRef.current.interpolate({
    inputRange: [0, 360],
    outputRange: ['-0deg', '-360deg']
  })

  // get qiblah degree from API
  const getQiblahDegree = useCallback(async () => {
    let qiblaDegree = await API.kiblat(3.597031,98.678513); //Latitude Longitude Medan
    setQiblaDegree(qiblaDegree);
    console.log(qiblaDegree)
  }, []);

  // calculate to get compass and qiblah direction
  const calculateRotate = magnetometer => {
    let tmp = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;
      let angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      }
      angle = angle - 90 >= 0 ? angle - 90 : angle + 271;

      let start = 0;
      let heading = Math.round(angle);

      let rot = +start;
      let rotM = rot % 360;

      if (rotM < 180 && heading > rotM + 180) rot -= 360;
      if (rotM >= 180 && heading <= rotM - 180) rot += 360;

      tmp += heading - rotM;
    }

    return tmp;
  };

  // run magnetometer
  const startMagnetometer = useCallback((autoStop = true) => {
    Magnetometer.setUpdateInterval(350);

    Magnetometer.addListener(data => {
      console.log(data);
      setRotateDegree(calculateRotate(data));
    });
  }, []);

  useEffect(() => {
    getQiblahDegree();
    startMagnetometer(true);
  }, [getQiblahDegree, startMagnetometer]);

  useEffect(()=>{
    spinAnimation();
  })

  return (
    // <Modal animationType="fade" transparent={true} >
      <View style={CompassModalStyle.modalFrame}>
        <View style={CompassModalStyle.modalView}>
          <View style={CompassModalStyle.titleView}>
            <View style={CompassModalStyle.textFrame}>
              <Text style={{fontWeight:'bold'}}>Mashara Qibla</Text>
            </View>
          </View>

          <View style={CompassModalStyle.compassContentView}>

            <Animated.View style={{ ...CompassModalStyle.compassFrame, transform: [{rotate}]}}>
              <Image source={require('../assets/icons/img_compass.png')} style={CompassModalStyle.compass} />
              <View style={{...CompassModalStyle.compassPinFrame, transform: [{'rotate': `${qiblaDegree}deg`}]}}>
                <Image source={require('../assets/icons/img_compassPin.png')} style={CompassModalStyle.compassPin} />
              </View>
            </Animated.View>

          </View>

          <View style={CompassModalStyle.detailStyle}>
            <Text style={CompassModalStyle.qiblaText}>Arah Kiblat dari medan sebesar {qiblaDegree}°</Text>
            <Text style={{fontWeight:'bold'}}>#HacktoberFest2019</Text>
            <TouchableOpacity>
              <View style={CompassModalStyle.buttonContainer}>
                <Text style={CompassModalStyle.buttonOk}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    // </Modal>
  )
}

const CompassModalStyle = StyleSheet.create({
  modalFrame: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 8,
    flex: 0.7,
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_gray,
    height: 68,
    backgroundColor: Colors.navy,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 22,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: FontSize.title,
    color: Colors.white,
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: 'red',
    height: 22,
    width: 22,
  },
  textFrame: {
    flex: 1
  },
  iconFrame: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  compassContentView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 300,
    maxWidth: 300
  },
  compassFrame: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    aspectRatio: 1,
  },
  compassPinFrame: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  compass: {
    width: '100%',
    height: '100%',
  },
  compassPin: {
    width: '80%',
    height: '80%'
  },
  detailStyle: {
    width: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    backgroundColor: Colors.background_red,
    borderRadius: 22,
    marginVertical: 16
  },
  buttonOk: {
    color: Colors.white,
    fontSize: FontSize.regular,
    fontWeight: 'bold'
  },
  qiblaText: {
    marginTop: 16,
    fontSize: FontSize.regular,
    color: Colors.gray_text,
    lineHeight: 25,
    textAlign: 'center'
  }
})

export default CompassScreen;
