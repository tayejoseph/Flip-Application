import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getBillCategories } from '../../store/actions/Bill';
import { TopNav } from '../../components';
import { colors } from '../../constants';
import { FlipContainer, FlipContent } from '../../Layout';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import NetWorkLists from './NetWorkLists';
import Styles from './styles';

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.primary }}
    inactiveColor={'black'}
    activeColor={colors.primary}
    style={{ backgroundColor: '#fff', color: colors.primary }}
  />
);
const AirTime = () => {
  const {
    params: { type },
  } = useRoute();
  const { bills } = useSelector(s => s);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'NGN', title: 'Nigeria' },
    { key: 'GH', title: 'Ghana' },
  ]);

  useEffect(() => {
    dispatch(getBillCategories(`airtime-${index === 0 ? 'ng' : 'gh'}`));
  }, [index, dispatch]);

  const FirstRoute = () => (
    <NetWorkLists {...{ networkLists: bills['airtime-ng'], currency: 'NGN' }} />
  );

  const SecondRoute = () => (
    <NetWorkLists {...{ networkLists: bills['airtime-gh'], currency: 'GHS' }} />
  );
  const renderScene = SceneMap({
    NGN: FirstRoute,
    GH: SecondRoute,
  });

  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={`Buy Your ${type}`} />
      <FlipContent style={Styles.contentContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </FlipContent>
    </FlipContainer>
  );
};

export default AirTime;
