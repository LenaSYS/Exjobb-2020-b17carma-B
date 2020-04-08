import React from 'react';
import moment from 'moment';
import {View} from 'react-native';
import ScanOverviewListSubItems from './ScanOverviewListSubItems';
import Collapsible from 'react-native-collapsible';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ScanOverviewListItem(props) {
  const [open, setOpen] = React.useState(
    props.node.equipment.progress !== 100 &&
      moment(props.date).isSame(moment(), 'day'),
  );

  const handlePress = () => {
    setOpen(!open);
  };

  const equipment = props.node.equipment;
  const components = props.node.components;

  const ListIcon = function() {
    if (equipment.progress === 0) {
      return <MaterialCommunityIcons name="alert-circle-outline" size={22} />;
    } else if (equipment.progress === 100) {
      return <MaterialCommunityIcons name="check" color="#4CAF50" size={22} />;
    } else {
      return null; //TODO
    }
  };

  const RightIcon = function() {
    return (
      <MaterialCommunityIcons
        name={open ? 'chevron-down' : 'chevron-up'}
        color="#000000"
        size={22}
      />
    );
  };

  return (
    <View>
      <ListItem
        onPress={handlePress}
        leftIcon={<ListIcon progress={equipment.progress} />}
        rightIcon={<RightIcon />}
        title={equipment.identifier}
      />
      <Collapsible collapsed={open}>
        <ScanOverviewListSubItems
          components={components}
          location={props.location}
        />
      </Collapsible>
    </View>
  );
}
