import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const List = ({ expenses }) => (
    <div>
        <ListGroup className="text-justify">
            {expenses.map(item => (
                <ListGroupItem key={item.id}>
                    {item.name} - $ {item.amount}
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
)
export default List;