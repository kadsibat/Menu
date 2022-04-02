import React,{useState} from 'react'
import data from "../helper/data"
import "./Main.css"

const allCategories = ["all", ...new Set(data.map((item)=>item.category))]



const Main = () => {
    // console.log(allCategories);
    const [menuItems, setMenuItems] = useState(data)


    const handleClick = (category) =>{
        console.log(category);
        if(category === "all") return setMenuItems(data);
        const newItems = data.filter((item) =>item.category===category)
        setMenuItems(newItems)
    }

  return (
    <div className="header">
        <h1>OUR MENU</h1>
        <div className="category">
        {allCategories.map((category,i)=>{
            return(
                <button className="filter-btn" key={i} onClick={()=>handleClick(category)} >
                    {category}
                </button>
            )
        })}
        </div>
        <div>
            {menuItems.map((item)=>{
                const {id, title, price, img, text} = item;
                return (
                    <div className="card" key={id}>
                        <img className="img-res" src={img} alt="" />
                        <div className="item-info">
                            <div className="item-header">
                                <h3>{title}  $ {price}</h3>
                                <h3 className="price">
                                    
                                </h3>
                            </div>
                            
                            <p className="text">
                                {text}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Main