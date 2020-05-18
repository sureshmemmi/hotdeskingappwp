import * as React from 'react';
import styles from './HotDeskingApp.module.scss';
import { PrimaryButton, 
            Panel, 
            DatePicker, 
            ChoiceGroup, 
            IChoiceGroupOption,
            DetailsList
         } from '@fluentui/react';
import { useState } from 'react';
import { useConstCallback } from '@uifabric/react-hooks';
import { TeamMembersList } from '../../../models/mockTeamList';

export function Home(props){
    const [isOpen, setIsOpen] = useState(false);

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

    const columns = [
        { key: 'column1', name: 'Full name', fieldName: 'fullname', minWidth: 100, maxWidth: 200, isResizable: true }
      ];
    
    return (
        <div className={ styles.hotDeskingApp }>
        <div className={ styles.container }>
        <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>Hot desk booking</span>
            <div>My bookings</div>
            <div>
                <DetailsList 
                    items={TeamMembersList}
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

