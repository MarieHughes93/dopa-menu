// package
import React, { Component } from 'react'
import {Card,Col} from 'react-bootstrap'
// helpers
import history from '../helpers/history'
// components
import {ListItem} from '../components/ListItem'

class ItemsList  extends Component{
    constructor(props){
        super(props)
        this.handleView = this.handleView.bind(this)
    }
    handleView=(id, itemId)=>{
        history.push(`/dopa-menu/${id}/menuItems/${itemId}`)
    }
    render(){
        const {column, items ,category} = this.props
        if (items === null || typeof items === 'undefined'){
            return(
                <h1>Loading.</h1>
            )
      }
      const cateItems = items.filter(item => item.category === category)
      return(
        <Col className={`${category}-itemsContainer`} xs={{ order: column }}>
            <Card
            className={`${category} listCard`}
            bg={'dark'}
            text={'white'}
            >
                <Card.Header
                className={`${category}`}
                bg={'dark'}
                >
                    {category}
                </Card.Header>
                <Card.Body
                className={`${category}`}
                >
                    {!cateItems.length > 0 ?
                    <Card.Text className="text-muted">
                        This category does not have any options currently.
                    </Card.Text>
                    :
                    cateItems.map((item)=>
                            <ListItem
                            key={item.id}
                            item={item}
                            handleView={this.handleView}
                            />)
                        }
                   
                </Card.Body>
            </Card>
        </Col>
       )
    }
}
export default ItemsList