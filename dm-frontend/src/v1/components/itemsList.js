// package
import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
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
      let items = this.props.items
      if (items === null || typeof items === 'undefined'){
          return(
           <h1>Loading.</h1>
          )
      }
      items = items.filter(item => item.category === this.props.category)
        return(
            <div className={`${this.props.category}-itemsContainer`} >
                <Card
                bg={'dark'}
                text={'white'}
                style={{ width: '18rem' }}
                >
                    <Card.Header
                    bg={'dark'}
                    >
                        {this.props.category}
                    </Card.Header>
                    <Card.Body>
                        {items.map((item)=>
                            <ListItem
                            key={item.id}
                            item={item}
                            handleView={this.handleView}
                            />)
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default ItemsList