import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: '#F5F5F5',
    paddingBottom: 200,
  },
  containerCard: {
    height: 547,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  containerCardTop: {
    flex: 1,
  },
  sectionTop: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  containerCardTopDate: {
    flexDirection: 'row',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDot: {
    marginHorizontal: 5,
  },
  containerImage: {
    borderRadius: 200,
    marginRight: 20,
    height: 64,
    width: 64,
  },
  containerTextTop: {
    justifyContent: 'space-around',
  },
  containerCardContent: {
    flex: 1,
  },
  containerDesc: {
    margin: 24,
  },
  containerImageContent: {
    backgroundColor: 'red',
  },
  imageContent: {
    resizeMode: 'cover',
    aspectRatio: 1 / 1,
  },
  containerCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  containerCardBottomLeft: {
    flexDirection: 'row',
  },
  containerCardBottomRight: {
    flexDirection: 'row',
  },
  iconCardBottom: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 5,
    backgroundColor: '#F5F5F5',
  },
  buttonPost: {
    backgroundColor: '#00ADB5',
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 62,
  },
});

export default styles;
