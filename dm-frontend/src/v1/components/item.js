// package
import React  from 'react'
import {Button, Card} from 'react-bootstrap'

export const Item=({item,toggleItemEdit,deleteMenuItem,backButton})=>{
    return(
        <div className="itemShowComponent" key={item.id}>
            <Card
            className={`${item.id} showCard`}
            bg={'dark'}
            text={'white'}
            >
                <Card.Header className={item.id}>
                    {item.category}
                </Card.Header>
                <Card.Body className={item.id}>
                    <Card.Title className={item.id}>
                        {item.title}
                    </Card.Title>
                    <Card.Text className={item.id}>
                        {item.description}
                    </Card.Text>
                    <Button
                    onClick={toggleItemEdit}
                    className={`btn ${item.id} btn-toogleItemEdit`}
                    type='button'
                    variant="outline-info"
                    >
                        Edit
                    </Button>
                    <Button
                    onClick={()=>deleteMenuItem(item)}
                    className={`btn ${item.id} btn-deleteMenuItem`}
                    type='button'
                    variant="outline-info"
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
            <Button
            onClick={()=>backButton()}
            className={`btn ${item.id} btn-handleItemShowBack`}
            type='button'
            variant="outline-info"
            >
                Back
            </Button>
        </div>
    )
}