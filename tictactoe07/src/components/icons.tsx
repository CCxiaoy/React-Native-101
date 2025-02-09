import type {PropsWithChildren} from 'react';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
  size: number;
  color: string;
}>;

const icons = ({name}: IconProps) => {
  switch (name) {
    case 'Circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
    case 'Cross':
      return <Icon name="times" size={38} color="#38CC77" />;
    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};

export default icons;
