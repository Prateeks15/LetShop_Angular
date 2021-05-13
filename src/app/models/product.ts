export class Product {
    id:number;
    name: string;
    description:string;
    price:number;
    review:number;
    imageurl:[
        image1:string,
        image2:string,
        image3:string
    ]
    qty:number;
    colorvariants:[
        color1:string,
        color2:string,
        color3:string
    ];
    productReviews:[{
        username:string,
        comment:string,
        ratings:number
    }]

  

    constructor(id:number, name:string, description:string, price:number, review:number, imageurl:[
        image1:string,
        image2:string,
        image3:string
    ], qty:number,
          colorvariants:[
        color1:string,
        color2:string,
        color3:string
    ],
    productReviews:[{
        username:string,
        comment:string,
        ratings:number
    },
   
  
]
)
{
        this.id= id;
        this.name= name;
        this.description=description;
        this.price=price;
        this.imageurl=imageurl;
        this.qty=qty;
        this.colorvariants=colorvariants;
        this.productReviews=productReviews;
        this.review=review;
      
    }
}