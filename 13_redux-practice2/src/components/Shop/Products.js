import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const itemList = [
    {
        id: "i1",
        title: "test1",
        price: 6,
        description: "This is a first product - amazing!",
    },
    {
        id: "i2",
        title: "test2",
        price: 3,
        description: "test description",
    },
];

const Products = (props) => {
    const ItemListComponent = itemList.map((item) => (
        <ProductItem {...item} key={item.id} />
    ));

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>{ItemListComponent}</ul>
        </section>
    );
};

export default Products;
