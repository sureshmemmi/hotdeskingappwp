import * as React from 'react';
import styles from './HotDeskingApp.module.scss';
import { PrimaryButton, 
            Panel, 
            DatePicker, 
            ChoiceGroup, 
            IChoiceGroupOption,
            DetailsList,
            IColumn
         } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { useConstCallback } from '@uifabric/react-hooks';
import { TeamMembersList } from '../../../models/mockTeamList';
import { BookingList } from '../../../models/mockBookingList';

export function Home(props){
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    const openPanel = useConstCallback(() => setIsOpen(true));
    const dismissPanel = useConstCallback(() => setIsOpen(false));

    const locationOptions: IChoiceGroupOption[] = [
        { key: 'wingA', text: 'Wing A', iconProps: { iconName: 'MapPin12'} },
        { key: 'wingB', text: 'Wing B', iconProps: { iconName: 'MapPin12'} },
        { key: 'wingC', text: 'Wing C', iconProps: { iconName: 'MapPin12'} }
    ]

    const deskOptions: IChoiceGroupOption[] = [
        { key: '1', text: 'Sitting desk', iconProps: { iconName: 'MapPin12'} },
        { key: '2', text: 'Standing desk', iconProps: { iconName: 'MapPin12'} },
    ]

    const columns: IColumn[] = [
        { key: 'column1', name: 'ID', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Team member', fieldName: 'teamMember', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Week Commencing', fieldName: 'weekCommencing', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Monday', fieldName: 'monday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Tuesday', fieldName: 'tuesday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Wednesday', fieldName: 'wednesday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Thursday', fieldName: 'thursday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Friday', fieldName: 'friday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Saturday', fieldName: 'saturday', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Sunday', fieldName: 'sunday', minWidth: 100, maxWidth: 200, isResizable: true },
      ];

    useEffect(() => {
        setItems(BookingList),
        console.log(BookingList)
    })
    
    return (
        <div className={ styles.hotDeskingApp }>
        <div className={ styles.container }>
        <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>Hot desk booking</span>
            <div>My bookings</div>
            <div>
                <DetailsList 
                    items={items}
                    columns={columns} />
                    
                <PrimaryButton text="Book a desk" onClick={openPanel} />

                <Panel
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    headerText="Book a desk"
                >
                    
                    <DatePicker></DatePicker>
                    <ChoiceGroup label="Select a location" defaultSelectedKey="wingA" options={locationOptions}></ChoiceGroup>
                    <ChoiceGroup label="Select a desk" defaultSelectedKey="1" options={deskOptions}></ChoiceGroup>

                </Panel>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

