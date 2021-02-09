import React from 'react';
 import { Grid } from '@material-ui/core';

 import Product from '../Product';
 
 const products = [
     {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-864581438_x600.jpg?v=1567029774",
        description: "Veste mi saison",
        price: '100€' ,
        soldPrice: "75€",
        pourcentage: "-%30"
    },
    {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1604789612_x600.jpg?v=1604746759",
        description: "Robe Vintage a Imprimé Florale",
        price: '85€',
        soldPrice: "65€",
        pourcentage: "-%20" 
    },  
    {
        id: 3,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1215539728_x600.jpg?v=1578102963",
        description: "Robe Sequins",
        price: '120€',
        soldPrice: "95€",
        pourcentage: "-%25"  
    },
    {
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/33_ed4173a8-f76f-4b2b-940e-bd477404e704_x600.jpg?v=1576155194",
        description: "Pull Feminin",
        price: '22€',
        soldPrice: "15€",
        pourcentage: "-%30"  
    },
    {
        id: 5,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-714373572_x600.jpg?v=1578927122",
        description: "Jupe Crayon",
        price: '50€',
        soldPrice: "35€",
        pourcentage: "-%40"  
    },
    
    {
        id: 6,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1276394941_x600.jpg?v=1583245991",
        description: "Blouse a imprimé",
        price: '65€',
        soldPrice: "45€"   
    },
    
    {
        id: 7,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1631464387_x600.jpg?v=1606999259",
        description: "Survetement a imprimé capuche",
        price: '55€',
        soldPrice: "45€"   
    },
    
    {
        id: 8,
        image: "https://ae01.alicdn.com/kf/H12ded5ca221d4ba48dc5e7f9ab4711c8d/Nouvelles-femmes-pompes-femmes-chaussures-papillon-noeud-Sexy-talons-hauts-Stiletto-chaussures-de-f-te-confort.jpg",
        description: "Styletto Noir avec Neouds",
        price: '150€',
        soldPrice: "105€"   
    },
    {
        id: 9,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1229674792_x600.jpg?v=1581445969",
        description: "Snake imprimé",
        price: '50€',
        soldPrice: "35€" 

    },
    {
        id: 10,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/1_078dc4bf-03e3-4ef9-8a6b-6ec93b227498_x600.jpg?v=1560790342",
        description: "Sandales Coloré a talons",
        price: '80€',
        soldPrice: "70€"   
    },
    {
        id: 11,
        image: "https://www.julesjenn.com/wordpress/wp-content/uploads/2017/10/bottines-talon-cuir-marron-clair-1.jpg",
        description: "Bottine en cuir",
        price: '130€',
        soldPrice: "110€" 

    },

    {
        id: 12,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/1_0481d9da-6337-49c4-b4cd-ace9e18e9655_x600.jpg?v=1569918956",
        description: "Bottine",
        price: '85€',
        soldPrice: "65€"   
    },
    {
        id: 13,
        image: "https://img01.ztat.net/article/spp-media-p1/f1c4339457724a52a8f3e0ad8986a1a8/ffd873557ff740488004c0f43233a222.jpg?imwidth=1800",
        description: "Palladium Rose",
        price: '105€',
        soldPrice: "85€"   
    },


    
    {
        id: 14,
        image: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1533575714/547260_DTDIT_5729_001_068_0000_Light-Mini-sac-main-GG-Marmont.jpg",
        description: "Sac",
        price: '65€',
        soldPrice: "45€" 

    },
    {
        id: 15,
        image: "https://www.parfumdo.com/35401-thickbox_default/miss-dior-eau-de-toilette-vaporisateur.jpg",
        description: "Parfum",
        price: '85€',
        soldPrice: "75€"   
    },
    {
        id: 16,
        image: "https://img01.ztat.net/article/spp-media-p1/12009b17057b3d9fa72c61d162a0b8e2/d838067d975b4c13af170d25186420d6.jpg?imwidth=1800&filter=packshot",
        description: "Montre Bracelet en Metal",
        price: '120€',
        soldPrice: "75€"   
    },
    {
        id: 17,
        image: "https://images.baunat.com/fr/239430_el-gy-e4_722x722/2-15-carat-creoles-boucles-d-oreilles-en-or-jaune-et-diamants.jpg",
        description: "Boucle d'oreilles",
        price: '40€',
        soldPrice: "25€"   
    },
    {
        id: 18,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/product-image-1434128130_x600.jpg?v=1591893958",
        description: "Maillot de Bain a impirmé",
        price: '35€',
        soldPrice: "20€"   
    },
    {
        id: 19,
        image: "https://cdn.shopify.com/s/files/1/0086/5717/4592/products/1_40484135-bba7-4150-928e-4d3fb88a9df4_x600.jpg?v=1559674327",
        description: "Bracelet Montre",
        price: '85€',
        soldPrice: "65€"  
    },
    {
        id: 20,
        image: "https://cdn.yoursclothing.com/Images/ProductImages/Big/Black_Textured_PU_Belt_With_Double_Western_Style_Buckles_152314_a29a.jpg",
        description: "Ceinture à deux boucles",
        price: '35€',
        soldPrice: "20€"   
    },
    {
        id: 21,
        image: "https://images.baunat.com/fr/208375_cl-gy-n9-0045r_722x722/0-45-carat-collier-satellite-en-or-jaune-et-diamants.jpg",
        description: "Colier plaqué Or",
        price: '35€',
        soldPrice: "15€"   
    },
  ];


  const handleToggle = ( productId) => {
    alert('je mets dans mon panier')
    console.log('je mets un produits dans le panier', productId)
}





  const handleClick= ( productId) => {
    alert('je click une image ', productId)
    console.log('jai ete clické image avec Id', productId)
}


const ExampleClothes = ({product}) => {
    
    return(
        <main>
           <Grid container justify="center" spacing={3}>
               {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} handleClick={handleClick} handleToggle={handleToggle} />

                    </Grid>
                ))}
           </Grid>
        </main>
    );       
}


export default ExampleClothes;