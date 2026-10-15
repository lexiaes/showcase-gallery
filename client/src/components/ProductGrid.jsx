import ProductCard  from "./ProductCard";

function ProductGrid({products, showActions= false, onEdit, onDelete}){
    if (products.length === 0){
        return (
            <div className="rounded-2xl border-02 border-dashed border-slate-300 py-20 text-center text-slate-400"> 
                No products yet.
            </div>
        );
    }

    return(
        <div>
            {products.map((product) => (
                <ProductCard
                key={product._id}
                product={product}
                showActions={showActions}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ProductGrid;