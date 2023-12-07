import React, { useState, useEffect } from 'react';
import { styled }  from '@mui/system';
import { MenuItem, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const useStyles = styled((theme) => ({
 listItemIconRoot: {
    display: 'none',
 },
}));

const CustomMenuItem = (props) => {
 const classes = useStyles();
 const [selected, setSelected] = useState(false);

 useEffect(() => {
    if (props.role === props.newRole) {
      setSelected(true);
    }
 }, [props.role, props.newRole]);

 const handleClick = () => {
    setSelected(!selected);
    props.onChange(props.id, props.newRole);
 };

 return (
    <MenuItem
      selected={selected}
      onClick={handleClick}
      classes={{ listItemIcon: classes.listItemIconRoot }}
    >
      <ListItemIcon>{selected ? <CheckIcon /> : null}</ListItemIcon>
      {props.newRole}
    </MenuItem>
 );
};

export default CustomMenuItem;