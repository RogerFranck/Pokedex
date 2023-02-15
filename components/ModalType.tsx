import { Image, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import useGetDamageInfo from '../hooks/useGetDamageInfo';
import { typeDictionary } from '../utils/poke_type_dictionary';
import LoaderView from "./Loader";

interface Props {
  open: boolean,
  handleClose: any,
  title: string,
  id: number | string,
}

const ModalType = ({ open, handleClose, title, id }: Props) => {
  const { damageInfo, loader, error } = useGetDamageInfo(id);
  const errorMessage = "[No se encontró información]";
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={handleClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {
                loader ? (<LoaderView />) : (<>
                  <Text style={styles.modalTitle}>{title}</Text>
                  {/* Tipos de Daño  */}
                  <View style={styles.typesContainer}>
                    {/* Tipos a los que NO le hace daño  */}
                    <Text style={styles.typeTitle}>No hace daño a:</Text>
                    {
                      damageInfo['no_damage_to'].length > 0 ?
                        (
                          <View style={styles.typeRow}>
                            {
                              damageInfo['no_damage_to'].map(({ name }, ix) => {
                                return (
                                  <Image
                                    style={styles.typeIcon}
                                    source={typeDictionary[name as keyof typeof typeDictionary]}
                                    key={`no_damage_to_${ix}`}
                                  />
                                )
                              })
                            }
                          </View>
                        ) : (<Text style={styles.errorText}>{errorMessage}</Text>)
                    }

                    {/* Tipos a los que hace la mitad de daño */}
                    <Text style={styles.typeTitle}>Hace la mitad de daño a:</Text>
                    {
                      damageInfo['half_damage_to'].length > 0 ?
                        (
                          <View style={styles.typeRow}>
                            {
                              damageInfo['half_damage_to'].map(({ name }, ix) => {
                                return (
                                  <Image
                                    style={styles.typeIcon}
                                    source={typeDictionary[name as keyof typeof typeDictionary]}
                                    key={`half_damage_to_${ix}`}
                                  />
                                )
                              })
                            }
                          </View>
                        ) : (<Text style={styles.errorText}>{errorMessage}</Text>)
                    }

                    {/* Tipos a los que les hace el doble de daño */}
                    <Text style={styles.typeTitle}>Hace doble daño a:</Text>
                    {
                      damageInfo['double_damage_to'].length > 0 ?
                        (
                          <View style={styles.typeRow}>
                            {
                              damageInfo['double_damage_to'].map(({ name }, ix) => {
                                return (
                                  <Image
                                    style={styles.typeIcon}
                                    source={typeDictionary[name as keyof typeof typeDictionary]}
                                    key={`double_damage_to_${ix}`}
                                  />
                                )
                              })
                            }
                          </View>
                        ) : (<Text style={styles.errorText}>{errorMessage}</Text>)
                    }

                    {/* Tipos a los que recibe el doble de daño */}
                    <Text style={styles.typeTitle}>Recibe el doble de daño de:</Text>
                    {
                      damageInfo['double_damage_from'].length > 0 ?
                        (
                          <View style={styles.typeRow}>
                            {
                              damageInfo['double_damage_from'].map(({ name }, ix) => {
                                return (
                                  <Image
                                    style={styles.typeIcon}
                                    source={typeDictionary[name as keyof typeof typeDictionary]}
                                    key={`double_damage_from_${ix}`}
                                  />
                                )
                              })
                            }
                          </View>
                        ) : (<Text style={styles.errorText}>{errorMessage}</Text>)
                    }

                  </View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleClose}>
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </Pressable>
                </>)
              }
            </ScrollView>
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
    width: '70%',
    maxHeight: '50%',
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
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  typeIcon: {
    width: 56,
    height: 70,
    margin: 5
  },
  typeTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15
  },
  typesContainer: {
    width: '100%'
  },
  typeRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  errorText: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 2
  }
});

export default ModalType;