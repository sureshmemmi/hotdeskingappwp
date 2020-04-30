import * as React from 'react';
import styles from './HotDeskingApp.module.scss';
import { IHotDeskingAppProps } from './IHotDeskingAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from '@fluentui/react';

export default class HotDeskingApp extends React.Component<IHotDeskingAppProps, {}> {
  public render(): React.ReactElement<IHotDeskingAppProps> {
    return (
      <div className={ styles.hotDeskingApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Hot desk booking</span>
              <div>My bookings</div>
              <div><PrimaryButton text="Book desk" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
