import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export const Label = styled.Text`
  color: #222222;
  opacity: 0.7;
  font-size: 16px;
`;

const Styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: -6,
    // flex: 1,
  },
  textInput: {
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 20,
    borderColor: '#757575',
  },
});

export default Styles;
