import React from 'react';
import { List, ListItem, ListItemText, Card, CardContent, CardActions } from '@material-ui/core';

export default function Item({ items }) {
    return (
        <List>
            {
                items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText>
                            <Card>
                                <CardContent>
                                    {item.name}
                                </CardContent>
                                <CardActions>
                                    {item.id}
                                </CardActions>
                            </Card>
                        </ListItemText>
                    </ListItem>
                ))
            }
        </List>
    )
}