import React, { Component } from 'react'
import DetailsThumb from './DetailsThumb';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../styles.css'


export class DetailsProduct extends Component {
  
state = {
  products: [
    {
      "_id": "1",
      "title": "Michael Kors",
      "src": [
          "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974963ba47b6d8232077d37f900c66269fefd_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797484c489dcf29967627dd94eb663fe5bda80_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974874779015249ca37ae6e2e516131636781_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797490145edcab6915f60e5d7f150299331fd0_thumbnail_900x.webp"
        ],
      "description": "Robe swiss",
      "price1": "30",
      "price": "27",
      "count": 1
    },
  ],
  index: 0
};

myRef = React.createRef();

handleTab = index =>{
  this.setState({index: index})
  const images = this.myRef.current.children;
  for(let i=0; i<images.length; i++){
    images[i].className = images[i].className.replace("active", "");
  }
  images[index].className = "active";
};

componentDidMount(){
  const {index} = this.state;
  this.myRef.current.children[index].className = "active";
}


render(){
  const { products, index } = this.state;

  return(
    <div className="detailPrdt">
      {
        products.map(item =>(
          <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="michael kors"/>
              </div>
              <div className="box">
                  <div className="row">
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                        <div className="price">
                          <span className="false">{item.price1} € </span>
                          <span className="true">{item.price} €</span>
                        </div>
                  </div>
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <Link to="/card">
                    <Button
                    variant="contained"
                    color="secondary"
                    className="btnCard"
                    >
                    Ajouter au panier
                    </Button>                          
                </Link>
                
                </div>
          </div>
        ))
      }
    </div>
  );
};
}


export default DetailsProduct
