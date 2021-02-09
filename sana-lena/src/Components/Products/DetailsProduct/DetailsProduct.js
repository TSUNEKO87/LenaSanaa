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
          "https://cdn-1.debijenkorf.be/web_detail_2x/michael-kors-jade-crossbodytas-met-leren-details/?reference=096/350/13_0963504007732090_pro_flt_frt_01_1108_1528_4674172.jpg",
          "https://cdn-1.debijenkorf.be/web_detail_2x/michael-kors-jade-crossbodytas-met-leren-details/?reference=096/350/13_0963504007732090_pro_flt_det_01_1108_1528_4674169.jpg",
          "https://cdn-1.debijenkorf.be/web_detail_2x/michael-kors-jade-crossbodytas-met-leren-details/?reference=096/350/13_0963504007732090_pro_flt_det_02_1108_1528_4674170.jpg",
          "https://cdn-1.debijenkorf.be/web_detail_2x/michael-kors-jade-crossbodytas-met-leren-details/?reference=096/350/13_0963504007732090_pro_flt_det_09_1108_1528_4674171.jpg"
        ],
      "description": "Sac bandoulière Jade avec détails en cuir",
      "price1": "319,99",
      "price": "287,99",
      "count": 1
    }
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
