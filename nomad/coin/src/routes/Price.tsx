import { PriceData } from "./Coin";

const Price = ({ price }: { price: PriceData | undefined }) => {
    console.log(price?.rank);
    return (
        <div>
            <p>beta value: {price?.beta_value || "not found"}</p>
        </div>
    );
};

export default Price;
