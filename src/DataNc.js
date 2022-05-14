function DataNangCao(DataName){
    switch(DataName){
        case "products":
            const products = [
                {
                name:'Hồ Thị Vư',
                img:'https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg',
                detail:'DIGITAL CAMERA NEW',
                IdCategories: 1
                },
                
                    {
                        name:"LUMIA 1",
                        img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
                        detail:"NEW",
                        IdCategories: 1
                    },
                    {
                        name:"LUMIA 2",
                        img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
                        detail:" NEW",
                        IdCategories: 2
                    },
                    {
                        name:"LUMIA 3",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTdGeT4bKXMN08IR-XQoimtiGUO69JZ9Oy3OSxmBA0IdH8hvOLt1xqUGFVZQ8e-k6ApY&usqp=CAU",
                        detail:"NEW",
                        IdCategories: 3
                    },
                    {
                        name:"LUMIA 4",
                        img: "https://wwd.com/wp-content/uploads/2018/02/af1i5237.jpg?w=910&h=511&crop=1",
                        detail:"NEW",
                        IdCategories: 2
                    },
                    {
                        name:"LUMIA 5",
                        img: "https://www.savethestudent.org/uploads/Online-fashion-retailers.jpg",
                        detail:"NEW",
                        IdCategories: 3
                    }             
            ];
            return products;
        case "categories":
            const categories = [
              
                    {
                        name:"LUMIA1",
                        id: 1
                    },
                    {
                        name:"LUMIA2",
                        id: 2
                    },
                    {
                        name:"LUMIA3",
                        id: 3
                    },
                             
            ];
                return categories;

            default: return[]
          
        
    }
   
 
   
}

export default DataNangCao;

// function arr(){
//     var arr = 
//     [
//         {
//             "products":[
               
                                    
//                                         {
//                                             name:"LUMIA 1",
//                                             img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
//                                             detail:"NEW",
//                                             id: '1'
//                                         },
//                                         {
//                                             name:"LUMIA 2",
//                                             img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
//                                             detail:" NEW",
//                                             id: '2'
//                                         },
//                                         {
//                                             name:"LUMIA 3",
//                                             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTdGeT4bKXMN08IR-XQoimtiGUO69JZ9Oy3OSxmBA0IdH8hvOLt1xqUGFVZQ8e-k6ApY&usqp=CAU",
//                                             detail:"NEW",
//                                             id: '3'
//                                         },
//                                         {
//                                             name:"LUMIA 4",
//                                             img: "https://wwd.com/wp-content/uploads/2018/02/af1i5237.jpg?w=910&h=511&crop=1",
//                                             detail:"NEW",
//                                             id: '4'
//                                         },{
//                                             name:"LUMIA 5",
//                                             img: "https://www.savethestudent.org/uploads/Online-fashion-retailers.jpg",
//                                             detail:"NEW",
//                                             id: '5'
//                                         }   
//             ]
           
//         },
//         {
//             "categories": [
//                 {
//                     name:'Hồ Thị Vư',
//                     img:'https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg',
//                     detail:'DIGITAL CAMERA NEW',
//                     id: '0'
//                     },
                    
//                         {
//                             name:"LUMIA 1",
//                             img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
//                             detail:"NEW",
//                             id: '1'
//                         },
//                         {
//                             name:"LUMIA 2",
//                             img: "https://www.thefactshop.com/wp-content/uploads/2018/01/fashion-facts.jpg",
//                             detail:" NEW",
//                             id: '2'
//                         },
//                         {
//                             name:"LUMIA 3",
//                             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTdGeT4bKXMN08IR-XQoimtiGUO69JZ9Oy3OSxmBA0IdH8hvOLt1xqUGFVZQ8e-k6ApY&usqp=CAU",
//                             detail:"NEW",
//                             id: '3'
//                         },
//                         {
//                             name:"LUMIA 4",
//                             img: "https://wwd.com/wp-content/uploads/2018/02/af1i5237.jpg?w=910&h=511&crop=1",
//                             detail:"NEW",
//                             id: '4'
//                         },{
//                             name:"LUMIA 5",
//                             img: "https://www.savethestudent.org/uploads/Online-fashion-retailers.jpg",
//                             detail:"NEW",
//                             id: '5'
//                         } 
//             ]
//         }
//     ]
//     return arr
// }
