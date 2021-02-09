import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';



const products = [
    {
       id: 1,
       image: "https://cdn.shopify.com/s/files/1/2521/4214/products/v-93162148__1545609744_x600.jpg?v=1538666709",
       description: "chemise",
       price: '60€' , 
       soldPrice: "45€",
       pourcentage: "-%20" 
   },
   {
       id: 2,
       image: "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974963ba47b6d8232077d37f900c66269fefd_thumbnail_900x.webp",
       description: "Robe swiss",
       price: '30€',
       soldPrice: "27€",
       pourcentage: "-%10"   
   },
   {
       id: 3,
       image: "https://cdn.shopify.com/s/files/1/2521/4214/products/H8432986c3a1a45a0b0e9d7b9dcf0a893i_x600.jpg?v=1574347641",
       description: "Basket",
       price: '120€',
       soldPrice: "95€",
       pourcentage: "-%30"   
   },
   {
       id: 4,
       image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/1_0481d9da-6337-49c4-b4cd-ace9e18e9655_x600.jpg?v=1569918956",
       description: "Bottine à Imprimé",
       price: '150€',
       soldPrice: "105€",
       pourcentage: "-%30"  
   },
   {
       id: 5,
       image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1053492945_x600.jpg?v=1566381195",
       description: "Blouse a imprimé",
       price: '55€',
       soldPrice: "25€",
       pourcentage: "-%40"   
   },
   {
       id: 6,
       image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/1_40484135-bba7-4150-928e-4d3fb88a9df4_x600.jpg?v=1559674327",
       description: "Bracelet Montre",
       price: '95€',
       soldPrice: "65€",
       pourcentage: "-%35"   
   },
   {
       id: 7,
       image: "https://cdn.shopify.com/s/files/1/2521/4214/products/product-image-261804706_x600.jpg?v=1525307296",
       description: "Pantalon Classique",
       price: '85€',
       soldPrice: "65€",
       pourcentage: "-%20"   
   },
   {
       id: 8,
       image: "https://cdn.shopify.com/s/files/1/2521/4214/products/Screenshot_14_x600.jpg?v=1535926524",
       description: "Polo",
       price: '50€',
       soldPrice: "25€",
       pourcentage: "-%50"   
   },
   {
       id: 9,
       image: "https://ae01.alicdn.com/kf/H12ded5ca221d4ba48dc5e7f9ab4711c8d/Nouvelles-femmes-pompes-femmes-chaussures-papillon-noeud-Sexy-talons-hauts-Stiletto-chaussures-de-f-te-confort.jpg",
       description: "Styletto Noir avec Neoud",
       price: '150€',
       soldPrice: "100€",
       pourcentage: "-%30"   
   },
   {
       id: 10,
       image: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1533575714/547260_DTDIT_5729_001_068_0000_Light-Mini-sac-main-GG-Marmont.jpg",
       description: "Sac",
       price: '150€',
       soldPrice: "125€",
       pourcentage: "-%10"   
   },
   {
       id: 11,
       image: "https://cdn.notinoimg.com/detail_zoom/lancome/3605533286555_02-o/lancome-la-vie-est-belle-eau-de-parfum-pour-femme___24.jpg",
       description: "Parfum",
       price: '90.99€',
       soldPrice: "65,99€",
       pourcentage: "-%35"   
   },
   {
       id: 12,
       image: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_700/5416009_png/crystal-lake-watch--leather-strap--black--rose-gold-tone-pvd-swarovski-5416009.png",
       description: "Montre",
       price: '125€',
       soldPrice: "65€",
       pourcentage: "-%50"   
   },
   {
       id: 13,
       image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1604789612_x600.jpg?v=1604746759",
       description: "Robe Vintage a Imprimé Florale",
       price: '85€',
       soldPrice: "65€",
       pourcentage: "-%20" 
   },
   {
       id: 14,
       image: "https://images.baunat.com/fr/208375_cl-gy-n9-0045r_722x722/0-45-carat-collier-satellite-en-or-jaune-et-diamants.jpg",
       description: "Colier plaqué Or",
       price: '35€',
       soldPrice: "15€",
       pourcentage: "-%30"    
   },
   {
       id: 15,
       image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/33_ed4173a8-f76f-4b2b-940e-bd477404e704_x600.jpg?v=1576155194",
       description: "Pull Feminin",
       price: '30€',
       soldPrice: "15€",
       pourcentage: "-%50"  
   },
   {
       id: 16,
       image: "https://cdn.yoursclothing.com/Images/ProductImages/Big/Black_Textured_PU_Belt_With_Double_Western_Style_Buckles_152314_a29a.jpg",
       description: "Ceinture à deux boucles",
       price: '35€',
       soldPrice: "20€",
       pourcentage: "-%40"   
   },

 ];


 const handleToggle = ( productId) => {
   alert('je mets un produit dans mon panier')
   console.log('je mets un produits dans le panier', productId)
}


//  const handleClick= ( productId) => {
//    alert('je click une image ', productId)
//    console.log('jai ete clické image  avec id', productId)
// }


const ExampleProducts = ({product}) => {
   
   return(
       <main>
          <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >     
                        <Product product={product}  handleToggle={handleToggle}/>              
                   </Grid>
               ))}
          </Grid>
       </main>
   );       
}


export default ExampleProducts;