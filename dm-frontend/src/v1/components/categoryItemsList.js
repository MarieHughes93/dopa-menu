// package
import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

class CategoryItemsList  extends Component{
    render(){
        const {userId,category, key,title,description,handleView} = this.props
        return(
            <Card className={`${title} listItemComponent`} key={key}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Link className={`${key} categoryListItem`}
                href="#"
                onClick={()=>handleView(userId, category, key)}
                >
                    View
                </Card.Link>
                </Card.Footer>
            </Card>
        )
    }
}
export default CategoryItemsList