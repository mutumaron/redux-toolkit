import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
    {
        id:'p1',
        price:6.99,
        title:'Chess Board',
        description:'This is a wooden piece chess board used by chess grand masters'
    },
    {
        id:'p2',
        price:12.99,
        title:'My First Book',
        description:'This is the first book I ever wrote'
    },
    {
        id:'p3',
        price:15.89,
        title:'Shirt',
        description: 'This is a label shirt made by Gucci'
    }
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
            <ProductItem
                key = {product.id}
                id={product.id}
               title={product.title}
               price={product.price}
               description={product.description}
            />
        ))}
     
      </ul>
    </section>
  );
};

export default Products;