import { Image, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import useGetDescription from '../hooks/useGetDescription';
import * as Speech from 'expo-speech';

interface Props {
  open: boolean,
  handleClose: any,
  title: string,
  id: number | string,
}

const speakDescription = (thingToSay: string, open: boolean) => {
  if (open) {
    Speech.speak(thingToSay, {
      language: 'es-MX',
      pitch: 0.4,
      rate: 1.1
    });
  }
};

const ModalDescription = ({ open, handleClose, title, id }: Props) => {
  const { description, evolution, loader, error } = useGetDescription(id);
  console.log('Evo', evolution)
  speakDescription(description, open)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={handleClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>{title}</Text>
              <Text>{description}</Text>

              <Text style={styles.evolutionTitle}>Evolution:</Text>
              {
                evolution?.map(({ order, name, url }, ix) => (
                  <>
                    <View style={styles.evolutionNode} key={ix}>
                      <Text>Evolución: {order} </Text>
                      <Text>- {name}</Text>
                    </View>
                    <Image
                      style={styles.typeIcon}
                      source={{
                        uri: url,
                      }}
                      key={`no_damage_to_${ix}`}
                    />
                  </>
                ))
              }
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleClose}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "70%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  evolutionTitle: {
    marginBottom: 15,
    marginTop: 20,
    fontWeight: 'bold'
  },
  evolutionNode: {
    display: 'flex',
    flexDirection: 'row'
  },
  typeIcon: {
    width: 56,
    height: 70,
    margin: 5,
    alignSelf: 'center'
  },
});

export default ModalDescription;