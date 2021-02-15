import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  netWorksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderRadius: 10,
  },
  netWorkItem: {
    width: '33.33%',
    padding: 5,
    marginBottom: 10,
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
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  imgTxt: {
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
