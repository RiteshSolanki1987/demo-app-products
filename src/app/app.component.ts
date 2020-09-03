import { Component, OnInit } from '@angular/core';
import { ProductUseCase } from './modules/home/repository/product.usecase';
import { Product } from './modules/home/entities/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public arrProduct: Array<Product> = [];

  constructor(private productUseCase: ProductUseCase) {
    //TODO:
  }

  /**
   * Initilization Component
   */
  ngOnInit(): void {
    this.setProducts();
  }

  /**
   * Function to store products in localStorage when app load
   */
  setProducts = () => {
    this.productUseCase.getAll().then((res: Array<Product>) => {
      if ((res && res.length < 10) || !res) {
        this.arrProduct = [
          {
            id : 1,
            title: 'Adidas',
            price: `$ 100`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid4.jpg',
            description: 'Adidas is another great name in the shoe industry. It was founded in 1924 by a German guy named Adolf Dassler. Adidas is the second biggest company to manufacture sportswear worldwide. This company has many big names linked to it like Lionel Messi, Zinedine Zidane, Gareth Bale, Xavi, Kaka, and more. The first and final choice of many sportsmen and sportswomen as well. Adidas shoes are comfortable, pretty, and long-lasting. Their appealing design and style are harder to resist and therefore, Adidas is on our list of the best shoe brands in the world.',
            isDisplay: true,
          },
          {
            id : 2,
            title: 'Nike',
            price: `$ 105`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid6.jpg',
            description: 'Nike is one of the best company to manufacture the best quality shoes worldwide. When we talk about the best shoe brands, Nike is the name that strikes our mind before anything. It is a multinational American company who has been designing and manufacturing shoes since 1964. Today, this shoe brand needs no introduction and is the ultimate choice for many athletes and sportspersons. The shoe range is pretty vast, attractive, and durable. The shoes are slightly expensive but worth it. Nike is the brand that not just us but everyone with a little know-how of shoes will recommend you without any second thought.',
            isDisplay: true,
          },
          {
            id : 3,
            title: 'Puma',
            price: `$ 99`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid8.jpg',
            description: 'Founded in 1948 by Rudolf Dassler, Puma is another best shoe brand with German roots. Puma designs casual wear as well as athletic shoes. The quality of shoes is unparalleled, however, the prices are a bit high. Even when the shoes manufactured by Puma are expensive, it is named among the highest shoe seller company. That is itself a proof of its popularity and quality. The Puma shoes are super comfy, reliable, and alluring.',
            isDisplay: true,
          },
          {
            id : 4,
            title: 'Gucci',
            price: `$ 120`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid8.jpg',
            description: 'Gucci needs no introduction, the name itself is enough to define the caliber and awesomeness of this brand. It is an Italian company who manufactures many different leather products including shoes. Gucci was founded by Guccio Gucci and is named after its founder. It is one of the most expensive yet incredibly huge selling shoe brand in the world. The most liked and praised by people, Gucci’s shoes are classy, durable, epic, and costly. The utmost choice of most of the models around the globe, Gucci is another best shoe brand that deserves to be listed in the top ten.',
            isDisplay: true,
          },
          {
            id : 5,
            title: 'Reebok',
            price: `$ 100`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid8.jpg',
            description: 'Reebok is the next popular shoe brand that we would love to add to our list. Adidas was established by Joe & Jeff Foster in 1958 in the USA. It is a subsidiary of famous Adidas, acquired in 2005, who manufactures sports footwear and casual shoes worldwide. Reebok shoes are the choice of a million of people around the world including athletes and celebrities. Reebok shoes are cozy, hardwearing, and fascinating to wear.',
            isDisplay: true,
          },
          {
            id : 6,
            title: 'Air Jordan',
            price: `$ 80`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid8.jpg',
            description: 'Air Jordan was established by famous Michael Jordan in 1984, released to the public in 1985 and later acquired by Nike. It manufactures athletes footwear and is a choice of many famous athletes. The shoes are inviting, congenial, and modern.',
            isDisplay: true,
          },
          {
            id : 7,
            title: 'Vans',
            price: `$ 110`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid4.jpg',
            description: 'Vans is an American shoe company founded in 1966 by Paul Van Doren, James Van Doren, Asiah Brewster, Serge D’Elia, and Gordon C. Lee. Vans produces a number of products including footwear, accessories, and clothing. These shoes are the final choice of many high school and college students. Vans shoes are luxurious and expensive but they are definitely worth the money.',
            isDisplay: true,
          },
          {
            id : 8,
            title: 'Under Armour',
            price: `$ 111`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid4.jpg',
            description: 'Under Armour is the youngest company on the list yet one of the best shoe brands. The brand Under Armour was established in 1996 by Kevin Plank in Baltimore, USA. The design of the shoes is such alluring that its consumers rank it on the top of the most stylish footwear. Under Armour shoes are the true representation of vogue, class, and modernism. They are super comfortable, nice-looking, and substantial.',
            isDisplay: true,
          },
          {
            id : 9,
            title: 'New Balance',
            price: `$ 150`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid4.jpg',
            description: 'New Balance was founded in 1906 that makes it the oldest shoe manufacturing company on the list. It was established by William J.Riley in the United States. It is the largest shoe manufacturing company in the world who produces sportswear, casual wear, and many different kinds of shoes. The shoes are costly, snuggly, pretty, and modern day. The quality of shoes is uncanny and they are praised for their reliability and durability.',
            isDisplay: true,
          },
          {
            id : 10,
            title: 'Converse',
            price: `$ 120`,
            url: 'https://raw.githubusercontent.com/leon-anavi/simple-product-catalog/master/images/grid4.jpg',
            description: 'Converse was founded in 1908 by Marquis Mills in Boston, United States. It is popular as the most iconic American shoes manufacturing company. It manufactures all the different kind of shoes including sportswear, casual, skating shoes, and many more. Prepossessing, snuggly, and endurable, are some of the attributes that define “Converse”.',
            isDisplay: true,
          },
        ];
        localStorage.setItem('products', JSON.stringify(this.arrProduct));
      }
    }).catch(error => {
      console.error('error', error);
    });
  }

}
