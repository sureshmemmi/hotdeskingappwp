import * as React from 'react';
import styles from './HotDeskingApp.module.scss';
import { IHotDeskingAppProps } from './IHotDeskingAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, Panel } from '@fluentui/react';
import {Home} from  './Home'


export default class HotDeskingApp extends React.Component<IHotDeskingAppProps, {}> {

  public render(): React.ReactElement<IHotDeskingAppProps> {
    return (
      <Home></Home>
    );
  }
}
