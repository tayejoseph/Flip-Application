import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const Label = styled.Text`
  color: #222222;
  opacity: 0.7;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: -6,
  },
  sectionLabel: {
    fontSize: 15,
    marginTop: 15,
    color: colors.primary,
  },
});

export default styles;
