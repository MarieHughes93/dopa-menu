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
    handleView=(id, category,itemId)=>{
        history.push(`/dopa-menu/${id}/${category}/${itemId}`)
    }
    handleCate=(id, category)=>{
        history.push(`/dopa-menu/${id}/${category}/`)
    }
    render(){
        const {column, items ,category} = this.props
        if (items === null || typeof items === 'undefined'){
            return(
                <h1>Loading.</h1>
            )
      }
      const cateItems = items.filter(item => item.category === category)
      const cateSize = 5;
      const cateMenu = cateItems.slice(0, cateSize)
      return(
        <Col className={`${category} --itemsContainer`} xs={{ order: column }}>
            <Card
            className={`${category} --listCard`}
            bg={'dark'}
            text={'white'}
            >
                <Card.Header
                className={`${category} --header`}
                bg={'dark'}
                >
                    {category}
                </Card.Header>
                <Card.Body
                className={`${category} --body`}
                >
                    {!cateItems.length > 0 ?
                    <Card.Text className="text-muted">
                        This category does not have any options currently.
                    </Card.Text>
                    :
                        cateMenu.map((item)=>
                            <ListItem
                            key={item.id}
                            item={item}
                            handleView={this.handleView}
                            />)
                    }
                    <Card.Link className={`${category} listCate`}
                        href="#"
                        onClick={()=>this.handleCate(`${category.user_id}, ${category}`)}
                        >{category}
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
       )
    }
}
export default ItemsList