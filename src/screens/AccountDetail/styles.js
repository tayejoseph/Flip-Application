import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const Label = styled.Text`
  color: #222222;
  opacity: 0.7;
  font-size: 16px;
`;

const Styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 200,
    paddingTop: 35,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: -6,
  },
  bankName: {
    borderWidth: 2,
    padding: 20,
    fontSize: 16,
    borderRadius: 5,
    borderColor: colors.inActive,
    marginBottom: 15,
  },
  textInput: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Styles;
