import React, { useState, createContext } from 'react'

export const ArticleContext = createContext();

export const ArticleProvider = props => {   

     const [article, setArticle] = useState([
        {
            id: 1,
            src: [
             "https://cdn.shopify.com/s/files/1/2521/4214/products/v-93162148__1545609744_x600.jpg?v=1538666709",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797484c489dcf29967627dd94eb663fe5bda80_thumbnail_900x.webp",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974874779015249ca37ae6e2e516131636781_thumbnail_900x.webp",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797490145edcab6915f60e5d7f150299331fd0_thumbnail_900x.webp"
           ],        
            description: "chemise",
            price: '60€' , 
            soldPrice: "45€",
            pourcentage: "-%20" 
        },
        {
            id: 2,
            src: [
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974963ba47b6d8232077d37f900c66269fefd_thumbnail_900x.webp",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797484c489dcf29967627dd94eb663fe5bda80_thumbnail_900x.webp",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/16087974874779015249ca37ae6e2e516131636781_thumbnail_900x.webp",
             "https://img.ltwebstatic.com/images3_pi/2020/12/24/1608797490145edcab6915f60e5d7f150299331fd0_thumbnail_900x.webp"
           ],       
           description: "Robe swiss",
            price: '30€',
            soldPrice: "27€",
            pourcentage: "-%10"   
        },
        {
            id: 3,
            src: [
             "https://cdn.shopify.com/s/files/1/2521/4214/products/H8432986c3a1a45a0b0e9d7b9dcf0a893i_x600.jpg?v=1574347641",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/H4fb1e43f21a74c7591a52f8215b9777cK_x600.jpg?v=1574347379",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/H29c82ad4304549e0ac0a126ff94d51dcU_x600.jpg?v=1574347597",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/He3001f9a391a4c68942eb547bca77f6ck_x600.jpg?v=1574347384"
           ],          
            description: "Basket",
            price: '120€',
            soldPrice: "95€",
            pourcentage: "-%30"   
        },
        {
            id: 4,
            src: [
             "https://sacha.xcdn.nl/sacha-femmes-cuir-serpent-4.7922_1.jpg?f=large",
             "https://sacha.xcdn.nl/sacha-femmes-cuir-serpent-4.7922_6.jpg?f=large",
             "https://sacha.xcdn.nl/sacha-femmes-cuir-serpent-4.7922_5.jpg?f=large",
             "https://sacha.xcdn.nl/sacha-femmes-cuir-serpent-4.7922_3.jpg?f=large"
           ],         
            description: "Bottine à Imprimé",
            price: '150€',
            soldPrice: "105€",
            pourcentage: "-%30"  
        },
        {
            id: 5,
            src: [
             "https://www.pimkie.be/dw/image/v2/AAYN_PRD/on/demandware.static/-/Sites-pimkie-master-catalog/default/dwee4a0428/images/561626_899E0A_portrait_HD_1.JPG?sw=760&sh=938",
             "https://www.pimkie.be/dw/image/v2/AAYN_PRD/on/demandware.static/-/Sites-pimkie-master-catalog/default/dw95c77439/images/561626_899E0A_portrait_HD_2.JPG?sw=760&sh=938",
             "https://www.pimkie.be/dw/image/v2/AAYN_PRD/on/demandware.static/-/Sites-pimkie-master-catalog/default/dw483826c8/images/561626_899E0A_portrait_HD_3.JPG?sw=760&sh=938",
             "https://www.pimkie.be/dw/image/v2/AAYN_PRD/on/demandware.static/-/Sites-pimkie-master-catalog/default/dw0904a639/images/561626_899E0A_portrait_HD_4.JPG?sw=760&sh=938"
           ],         
            description: "Blouse a imprimé",
            price: '55€',
            soldPrice: "25€",
            pourcentage: "-%40"   
        },
        {
            id: 6,
            src: [
             "https://cdn.shopify.com/s/files/1/0274/5512/7639/products/4017300829-6_1296x.jpg?v=1600091358",
             "https://cdn.shopify.com/s/files/1/0274/5512/7639/products/4017300829-3_23e65448-770e-4d84-bec6-c4379439e03e_1296x.png?v=1596789470",
             "https://cdn.shopify.com/s/files/1/0274/5512/7639/products/4017300829-1_397e6e83-9651-467c-9843-c5cbf913e8e0_1296x.png?v=1596789470",
             ""
           ], 
            description: " Bracelet Améthyste clair & hématite lilas ",
            price: '95€',
            soldPrice: "65€",
            pourcentage: "-%35"   
        },
        {
            id: 7,
            src: [
             "https://cdn.shopify.com/s/files/1/2521/4214/products/product-image-261804706_x600.jpg?v=1525307296",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/product-image-261804710_x600.jpg?v=1525307296",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/product-image-261804700_x600.jpg?v=1525307296",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/product-image-261804708_x600.jpg?v=1525307296"
           ],        
            description: "Pantalon Classique",
            price: '85€',
            soldPrice: "65€",
            pourcentage: "-%20"   
        },
        {
            id: 8,
            src: [
             "https://cdn.shopify.com/s/files/1/2521/4214/products/v-2420694__-1330405732_x600.jpg?v=1530311036",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/2018-mode-manches-courtes-polo-shirt-hommes-v-tements-hommes-slim-fit-plaid-pol-t-shirts_0e23a7e3-b706-4386-a95c-ace507a9b0eb_x600.jpg?v=1530311036",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/2018-mode-manches-courtes-polo-shirt-hommes-v-tements-hommes-slim-fit-plaid-pol-t-shirts_1c6ca2ea-821f-43e8-98c8-4ad8e148c09f_x600.jpg?v=1530311036",
             "https://cdn.shopify.com/s/files/1/2521/4214/products/2018-mode-manches-courtes-polo-shirt-hommes-v-tements-hommes-slim-fit-plaid-pol-t-shirts_x600.jpg?v=1530311036"
           ],         
            description: "Polo",
            price: '50€',
            soldPrice: "25€",
            pourcentage: "-%50"   
        },
        {
            id: 9,
            src: [
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0e39dfa5/images/TwinSet/Images/Catalog/CA8PG1-00006-0S.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8cbefc0c/images/TwinSet/Images/Catalog/CA8PG1-00006-02.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe5265236/images/TwinSet/Images/Catalog/CA8PG1-00006-03.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwed804505/images/TwinSet/Images/Catalog/CA8PG1-00006-04.JPG?sw=650"
           ],  
            description: "Sandales hautes en cuir velours avec nœud",
            price: '150€',
            soldPrice: "100€",
            pourcentage: "-%30"   
        },
        {
            id: 10,
            src: [
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1c819c18/images/TwinSet/Images/Catalog/999TA7233-00436-0S.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc2b38fd4/images/TwinSet/Images/Catalog/999TA7233-00436-03.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd2d09921/images/TwinSet/Images/Catalog/999TA7233-00436-04.JPG?sw=650",
             "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5249cd5f/images/TwinSet/Images/Catalog/999TA7233-00436-05.JPG?sw=650"
           ],  
            description: "Sac",
            price: '150€',
            soldPrice: "125€",
            pourcentage: "-%10"   
        },
        {
            id: 11,
            src: [
             "https://cdn2.tendance-parfums.com/media/catalog/product/cache/e75d3945dbf9e33b053d90ad300b39ce/m/i/miss-dior-eau-de-parfum.jpg",
             "https://cdn2.tendance-parfums.com/media/catalog/product/cache/d7a5ecb6446668759d2bcacfce91c6f4/m/i/miss-dior-ep-composition.jpg",
             "https://cdn2.tendance-parfums.com/media/catalog/product/cache/d7a5ecb6446668759d2bcacfce91c6f4/m/i/miss-dior-ep-description.jpg",
             "https://cdn2.tendance-parfums.com/media/catalog/product/cache/d7a5ecb6446668759d2bcacfce91c6f4/m/d/md-roller-rituel.jpg"
           ],  
            description: "Dior Miss eau du parfum",
            price: '90.99€',
            soldPrice: "65,99€",
            pourcentage: "-%35"   
        },
        {
            id: 12,
            src: [
             "https://outletuur.nl/wp-content/uploads/2019/10/Michael-Kors-mk5955-3.jpg",
             "https://outletuur.nl/wp-content/uploads/2019/10/Michael-Kors-mk5955-1-1024x1024.jpg",
             "https://outletuur.nl/wp-content/uploads/2019/10/Michael-Kors-mk5955-2.jpg",
             "https://outletuur.nl/wp-content/uploads/2019/10/Michael-Kors-mk5955-4.jpg"
           ],        
            description: "Montre Michael Kors",
            price: '125€',
            soldPrice: "65€",
            pourcentage: "-%50"   
        },
        {
            id: 13,
            src: [
             "https://www.espacemode.be/146433-large_default/robe-courte-fleurie-en-voile-avec-col-cache-coeur-rimbo-morgan.jpg",
             "https://www.espacemode.be/146434-large_default/robe-courte-fleurie-en-voile-avec-col-cache-coeur-rimbo-morgan.jpg",
             "https://www.espacemode.be/146435-large_default/robe-courte-fleurie-en-voile-avec-col-cache-coeur-rimbo-morgan.jpg",
             "https://www.espacemode.be/146433-large_default/robe-courte-fleurie-en-voile-avec-col-cache-coeur-rimbo-morgan.jpg"
           ],         
            description: "Robe Vintage a Imprimé Florale",
            price: '85€',
            soldPrice: "65€",
            pourcentage: "-%20" 
        },
        {
            id: 14,
            src: [
             "https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw29f9ef04/images/FQCFJZW403-model0.jpg?sw=1024&sh=1024",
             "https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw998cdcda/images/FQCFJZW403-master.jpg?sw=1024&sh=1024",
             "https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw3c9eaaa0/images/FQCFJZW403-model1.jpg?sw=1024&sh=1024",
             "https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw579e0b59/images/FQCFJZW403-view1.jpg?sw=1024&sh=1024"
           ],          
            description: "Colier plaqué Or",
            price: '35€',
            soldPrice: "15€",
            pourcentage: "-%30"    
        },
        {
            id: 15,
            src: [
             "https://www.espacemode.be/149297-large_default/pull-uni-en-maille-base-plus-longue-au-dos-only-geena.jpg",
             "https://www.espacemode.be/149299-large_default/pull-uni-en-maille-base-plus-longue-au-dos-only-geena.jpg",
             "https://www.espacemode.be/154680-large_default/pull-uni-en-maille-base-plus-longue-au-dos-only-geena.jpg",
             "https://www.espacemode.be/154678-large_default/pull-uni-en-maille-base-plus-longue-au-dos-only-geena.jpg"
           ],          
            description: "Pull uni en maille",
            price: '30€',
            soldPrice: "15€",
            pourcentage: "-%50"  
        },
        {
            id: 16,
            src: [
             "https://www.espacemode.be/153089-large_default/ceinture-avec-logo-metallique-corily-guess.jpg",
             "https://www.espacemode.be/152701-large_default/ceinture-avec-logo-metallique-corily-guess.jpg",
             "https://www.espacemode.be/152701-large_default/ceinture-avec-logo-metallique-corily-guess.jpg",
             "https://www.espacemode.be/153089-large_default/ceinture-avec-logo-metallique-corily-guess.jpg"
           ],          
            description: "Ceinture à deux boucles",
            price: '35€',
            soldPrice: "20€",
            pourcentage: "-%40"   
        },     
     ])
     
    return (
        <ArticleContext.Provider value={[article, setArticle]}>    
            {props.children}
        </ArticleContext.Provider>   
    );
}