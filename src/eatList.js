import React from 'react';
import {Button, Image} from 'react-bootstrap'

export default function EatList(props) {
    const review = props.bd.map((item, index) => 
        <div className='burger__item' key={index}>
            <Image className="burger__item_img" src={item.path} alt={item.path}/>
            <div  className='burger__item_title'>{item.name}</div>                
            <div className='burger__item_description'>{item.description}</div>  
            <div className='burger__items'>
                <div className='burger__item_price'>{item.price} ₽</div>
                <div className='burger__item_button'>
                    <Button 
                        onClick={() => props.addItemToBasket(item)} 
                        variant="danger">
                        Заказать
                    </Button>
                </div>  
            </div>              
        </div>
    )

    return (
        <div>
            <h1 className='section__title'  id={props.name}>
                {props.foodType}
            </h1>
            <div className='burger__preview'>
                {review}
            </div>
        </div>
    )
}