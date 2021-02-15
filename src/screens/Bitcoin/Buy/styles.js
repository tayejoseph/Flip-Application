import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Label = styled.Text`
  color: #222222;
  opacity: 0.7;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: -6,
    flex: 1,
  },
  toggleViewBtn: {
    marginTop: 22,
    marginLeft: 15,
    backgroundColor: '#CBDAE5',
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default styles;
