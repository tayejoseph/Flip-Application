import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  textInput: {
    marginBottom: 20,
  },
  netWorksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  netWorkItem: {
    width: '33.33%',
    paddingRight: 10,
    marginBottom: 25,
  },
  imgContainer: {
    height: 100,
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: '#ECECEC',
    marginBottom: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imgTitle: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default Styles;
