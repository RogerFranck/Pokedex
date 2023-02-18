import { Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';

interface Props {
    open: boolean,
    handleClose: any,
    title: string,
    moves: Array<string>
}

const ModalMoves = ({ open, handleClose, title, moves } : Props) => {
    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={ handleClose }>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={styles.modalScrollView}>
                <Text style={styles.modalText}>{title}</Text>
                <View style={styles.twoColums}>
                  {moves.map((move, i) => <Text key={i} style={styles.modalMovesColums}> {move} </Text>)}
                </View>
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={ handleClose }>
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
    margin: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    padding: 20,
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
  },
  twoColums: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
  },
  modalMovesColums: {
    width: '50%',
    marginTop: 10
  },
  modalScrollView: {
    width: '100%'
  }
});

export default ModalMoves;