import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Image, KeyboardAvoidingView, Keyboard, ScrollView, TextInput } from 'react-native';

import Colors from './components/Colors'
import FontSize from './components/FontSize'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default function App() {

  const [answerVal, setAnswerVal] = useState("")
  const keyboardDidShowListener = Keyboard
  const keyboardDidHideListener = Keyboard
  const [bottomHeight, setBottomHeight] = useState(0)

  const closeBtnPressed = () => {
    console.log("close pressed")
  }

  const answerTxtChanged = (text) => {
    setAnswerVal(text)
    console.log(answerVal)
  }

  const sendBtnPressed = (text) => {
    console.log("sendBtnPressed")
  }

  useEffect(() => {
    keyboardDidShowListener.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener.addListener('keyboardDidHide', keyboardDidHide)
    return () => {
      keyboardDidShowListener.removeListener()
      keyboardDidHideListener.removeListener()
    }
  }, [keyboardDidShowListener, keyboardDidHideListener])

  const keyboardDidShow = (e) => {
    setBottomHeight(e.endCoordinates.height)
    console.log("keyboard did show")
  }

  const keyboardDidHide = (e) => {
    setBottomHeight(0)
    console.log("keyboard did hide")
  }

  return (
    <View style={styles.container}>
      <Modal animationType="none" visible={true} transparent={false} >
        <View style={styles.modalFrame}>
          <View style={styles.modalContainer}>

            <View style={styles.header}>
              <TouchableOpacity style={styles.closeImgCon} onPress={closeBtnPressed}>
                <Image style={styles.closeImg} source={require('./assets/icons/ic-close-gray.png')} />
              </TouchableOpacity>
              <View style={styles.titleCon}>
                <Text style={styles.titleTxt}>Tambah Jawaban</Text>
              </View>
              <TouchableOpacity style={styles.sendCon} onPress={sendBtnPressed}>
                <Text style={styles.sendTxt}>Kirim</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <View style={styles.questionCon}>
                <View>
                  <Text numberOfLines={2} ellipsizeMode="tail" style={styles.questionTxt}>Ini adalah contoh pertanyaan</Text>
                </View>
              </View>

              <KeyboardAvoidingView behavior={'padding'}>
                <ScrollView style={styles.answerCon} >
                  <TextInput autoFocus={true} textAlignVertical="top" multiline={true} onChangeText={(text) => answerTxtChanged(text)} value={answerVal} placeholder="Tulis Jawabanmu di sini" style={styles.answerInput} />
                </ScrollView>
              </KeyboardAvoidingView>
            </View>

          </View>

          {/* BOTTOM EDITOR */}
          {/* TODO HERE */}
          <View style={{...styles.bottomEditor, bottom: bottomHeight }}>
            <Text style={{color: Colors.white, fontWeight: 'bold'}}>TODO HERE</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalFrame: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT - 20,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  header: {
    borderBottomColor: Colors.border_gray,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  closeImgCon: {
    width: 28,
    height: 28,
    marginLeft: 16
  },
  closeImg: {
    width: '100%',
    height: '100%'
  },
  titleCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTxt: {
    fontSize: FontSize.regular,
    color: Colors.black_text
  },
  sendCon: {
    marginRight: 16,
    justifyContent: 'center'
  },
  sendTxt: {
    fontSize: FontSize.regular,
    color: Colors.red_text
  },
  content: {
    marginTop: 16
  },
  questionCon: {
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 3
    },
    // shadowRadius: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  questionTxt: {
    padding: 8,
    backgroundColor: Colors.white,
    fontSize: FontSize.meta,
    color: Colors.gray_text
  },
  answerCon: {
    marginHorizontal: 16,
  },
  answerInput: {
    fontSize: 16,
    color: Colors.black_text,
    height: '100%'
  },
  bottomEditor: {
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
