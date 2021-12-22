import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "../../../components/headers/GradientHeader";
import PictureModal from "../../../components/modals/profilePictureModal";
import DocumentOptionModal from "../../../components/modals/docOptionModal";

import Ic_Sort from "../../../assets/svg/ic_sort";
import Ic_Dokumen from "../../../assets/svg/ic_documen";
import Ic_Option from "../../../assets/svg/ic_option";

const dimHeight = Dimensions.get("window").height;
const dimWidth = Dimensions.get("window").width;

export default function PenunjangList(props) {

  const [modalAdd, setModalAdd] = useState(false)
  const [modalOption, setModalOption] = useState(false)
  const addDocumentOptions = [
    {
      label: "Kamera",
      url: require("../../../assets/png/ic_kamera.png"),
    },
    {
      label: "Galeri",
      url: require("../../../assets/png/ic_galeri.png"),
    },
  ];

  const documentAction = [
    {
      label: "Detail",
      url: require("../../../assets/png/documentPage/detail.png"),
    },
    {
      label: "Unduh",
      url: require("../../../assets/png/documentPage/unduh.png"),
    },
    {
      label: "Ganti Nama",
      url: require("../../../assets/png/documentPage/rename.png"),
    },
    {
      label: "Hapus",
      url: require("../../../assets/png/documentPage/delete.png"),
    },
  ];

  async function setSelectedValue(label) {
    switch (label) {
      case "Kamera":
        await props.navigation.navigate("ProfilePictureCamera", {
          destination: 'DokumenMedisStack',
        });
        break;

      case "Galeri":
        await props.navigation.navigate("ProfilePictureGallery", {
          destination: 'DokumenMedisStack',
        });
        break;

      default:
        break;
    }
  }

  async function setSelectedAction(label) {
    console.log(label);
  }
  // const data = null
  const data = [
    {
      name: "Rujukan RS Kartika",
    },
    {
      name: "Rujukan RS Umum Bekasi",
    },
  ];
  return (
    <View style={styles.container}>
      <Header title="Rujukan" navigate={props.navigation.navigate} />
      <View style={styles.content}>
        <SafeAreaView style={styles.document}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item, idx) => String(idx)}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.cardDokumen}>
                  <View style={styles.imageDokumen} />
                  <View style={styles.detailCard}>
                    <View style={styles.iconDoc}>
                      <Ic_Dokumen />
                    </View>
                    <View
                      style={{
                        maxWidth: dimWidth * 0.25,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.dokumentName}>{item.name}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setModalOption(true)}
                      style={styles.iconOption}
                    >
                      <Ic_Option />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.textButton}>Minta Rujukan</Text>
        </TouchableOpacity>
      </View>
      <PictureModal
        modal={modalAdd}
        setModal={setModalAdd}
        selection={addDocumentOptions}
        setSelectedValue={setSelectedValue}
      >
      </PictureModal>
      <DocumentOptionModal
        modal={modalOption}
        setModal={setModalOption}
        selection={documentAction}
        setSelectedValue={setSelectedAction}
      >
      </DocumentOptionModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  content: {
    height: dimHeight * 0.88,
    justifyContent: "space-between",
    padding: 20,
  },
  buttonAdd: {
    alignItems: "center",
    alignSelf: "center",
    width: dimWidth * 0.4,
    backgroundColor: "#005EA2",
    borderRadius: 25,
    padding: 10,
  },
  borderImage: {
    height: 55,
    width: 55,
    borderRadius: 55,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#33E204",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  document: {
    width: "100%",
    height: "100%",
    paddingBottom: dimHeight * 0.04,
  },
  cardDokumen: {
    height: dimHeight * 0.2,
    width: dimWidth * 0.48,
  },
  textItem: {
    color: "#B5B5B5",
  },
  dokumentName: {
    color: "#B5B5B5",
    fontSize: 11,
    textAlign: "center",
  },
  detailCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: dimWidth * 0.4,
    paddingVertical: 10,
  },
  imageDokumen: {
    height: dimHeight * 0.12,
    width: dimWidth * 0.4,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
  },
  iconDoc: {
    paddingTop: dimHeight * 0.005,
  },
  iconOption: {
    paddingTop: dimHeight * 0.008,
  },
  textItem: {
    color: "#B5B5B5",
  },
  textButton: {
    color: "#B5B5B5",
    fontSize: 12,
  },
});