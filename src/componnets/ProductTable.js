
import Items from './Items';

const ProductTable=(props)=>{
    return(
        <table className="table table-bordered table-striped border-light rounded table-hover w-auto mx-5 my-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {props.Products.map(e=><Items key={e.id} ProductName={e.productName} ProductPrice={e.price} ProductDescreption={e.description} />)}

          {/* <Items ProductId={props.products[0].id} ProductName={props.products[0].productName} ProductPrice={props.products[0].price} ProductDescreption={props.products[0].description}></Items>
          <Items ProductId={props.products[1].id} ProductName={props.products[1].productName} ProductPrice={props.products[1].price} ProductDescreption={props.products[1].description}></Items>
          <Items ProductId={props.products[2].id} ProductName={props.products[2].productName} ProductPrice={props.products[2].price} ProductDescreption={props.products[2].description}></Items>
          <Items ProductId={props.products[3].id} ProductName={props.products[3].productName} ProductPrice={props.products[3].price} ProductDescreption={props.products[3].description}></Items> */}
          
        </tbody>
      </table>
    )
}

export default ProductTable