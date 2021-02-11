import React ,  {useContext} from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import {ArticleContext} from './ArticleContext'


 const handleToggle = ( productId) => {
   alert('je mets un produit dans mon panier')
   console.log('je mets un produits dans le panier', productId)
}

//  const handleClick= ( productId) => {
//    alert('je click une image ', productId)
//    console.log('jai ete clické image  avec id', productId)
// }


const ExampleProducts = () => {
  const [article, setArticle] = useContext(ArticleContext)
   
   return(
       <main>
          <Grid container justify="center" spacing={4} >
              {article.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >     
                        <Product product={product}  handleToggle={handleToggle}/>              
                   </Grid>
               ))}
          </Grid>
       </main>
   );       
}


export default ExampleProducts;