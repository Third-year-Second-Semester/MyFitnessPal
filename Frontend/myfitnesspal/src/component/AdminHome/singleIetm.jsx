
import React from 'react'

import Img1 from '../../images/item1.png'
import Img2 from '../../images/item2.jpg'
import Img3 from '../../images/item3.png'
import Img4 from '../../images/item4.png'
import Img5 from '../../images/item5.png'
import Img6 from '../../images/item6.png'
import Img7 from '../../images/item7.png'
import Img8 from '../../images/item8.png'
import Img9 from '../../images/item9.png'


const AllImages ={
    Img1 : Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9
}

const getByKey= (key)=>{
    return AllImages[key]

}

export default  function SinglItem(props){

    return(
        <div className="adminDashboardSingleItem">
        <p>
            <img src={getByKey(props.img)} alt="" className="adminDashboardSingleItemImg" />
        </p>
        <button className="adminDashButton" ><span className="buttonName">{props.name}</span></button>
    </div>
    )

}