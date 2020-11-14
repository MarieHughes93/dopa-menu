// package
import React  from 'react'
import {Button, Card} from 'react-bootstrap'

export const Item=({item,toggleItemEdit,deleteItemButton,backButton})=>{
    return(
        <div className="itemComponent" key={item.id}>
            <Card
            bg={'dark'}
            text={'white'}
            >
                <Card.Header>
                    {item.category}
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {item.title}
                    </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button
                    variant="outline-info"
                    type='button'
                    onClick={toggleItemEdit}
                    className="btn btn-toogleEdit"
                    >
                        Edit
                    </Button>
                    <Button
                    variant="outline-info"
                    type='button'
                    onClick={()=>deleteItemButton(item)}
                    className="btn btn-deleteMenuItem"
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
            <Button
            variant="outline-info"
            type='button'
            onClick={()=>backButton()}
            className="btn btn-handleBack"
            >
                Back
            </Button>
        </div>
    )
}