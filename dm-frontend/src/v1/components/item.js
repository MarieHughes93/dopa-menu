// package
import React  from 'react'
import {Button, Card} from 'react-bootstrap'

export const Item=({item,toggleItemEdit,deleteMenuItem,backButton})=>{
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
                    onClick={toggleItemEdit}
                    className="btn btn-toogleEdit"
                    type='button'
                    variant="outline-info"
                    >
                        Edit
                    </Button>
                    <Button
                    onClick={()=>deleteMenuItem(item)}
                    className="btn btn-deleteMenuItem"
                    type='button'
                    variant="outline-info"
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
            <Button
            onClick={()=>backButton()}
            className="btn btn-handleBack"
            type='button'
            variant="outline-info"
            >
                Back
            </Button>
        </div>
    )
}