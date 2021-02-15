import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Label = styled.Text`
  color: #222222;
  opacity: 0.7;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 16,
  },
  txt: {
    fontSize: 18,
  },
  txtBold: {
    fontWeight: 'bold',
  },
  txtInputLabel: {
    color: '#a4a4a4',
    fontWeight: '600',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: -6,
  },
});

export default styles;
