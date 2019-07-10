import React from 'react';
import { scroller } from 'react-scroll';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

     const scrollToElements = (element) => {
         scroller.scrollTo(element, {
             duration: 1500, 
             delay: 100,
             smooth: true,
             offset: -92
         });
         props.onClose(false)
     }
   

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElements('featured')}>
                    Home 
                </ListItem>

                <ListItem button onClick={()=> scrollToElements('vunuenfo')}>
                   Skills
                </ListItem>

                <ListItem button onClick={()=> scrollToElements('highlights')}>
                  About Me
                </ListItem>

                <ListItem button onClick={()=> scrollToElements('pricing')}>
                 Proyects
                </ListItem>

                <ListItem button onClick={()=> scrollToElements('location')}>
                    Contact
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;