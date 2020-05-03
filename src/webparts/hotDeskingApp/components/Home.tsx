import * as React from 'react';
import styles from './HotDeskingApp.module.scss';
import { PrimaryButton, Panel, DatePicker } from '@fluentui/react';
import { useState } from 'react';
import { useConstCallback } from '@uifabric/react-hooks';

export function Home(props){
    const [isOpen, setIsOpen] = useState(false);

    const openPanel = useConstCallback(() => setIsOpen(true));
    const dismissPanel = useConstCallback(() => setIsOpen(false));
    
    return (
        <div className={ styles.hotDeskingApp }>
        <div className={ styles.container }>
        <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>Hot desk booking</span>
            <div>My bookings</div>
            <div>
                <PrimaryButton text="Book a desk" onClick={openPanel} />

                <Panel
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    headerText="Book a desk"
                >
                    
                    <DatePicker></DatePicker>
                </Panel>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

