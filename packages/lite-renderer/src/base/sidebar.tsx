import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

type SingleItemProps = {
    title: string, onClick: VoidFunction, icon: React.ReactElement,
}

export function SidebaSingleItem({ title, onClick, icon }: SingleItemProps) {
    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
}

type ItemWithChildrenProps = {
    title: string, icon: React.ReactElement, children: React.ReactElement[],
}

export function SidebarItemWithChildren({ title, icon, children }: ItemWithChildrenProps) {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    function handleClick() {
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div className={classes.nested}>
                        {children}
                    </div>
                </List>
            </Collapse>
        </React.Fragment>
    )

}

function Sidebar({ children }) {
    const classes = useStyles();
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            {children}
        </List>
    );
}

export default Sidebar;