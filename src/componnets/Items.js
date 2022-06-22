const Items = (props) => {
    return (
        <tr>
            <td>{props.key}</td>
            <td>{props.ProductName}</td>
            <td>{props.ProductPrice}</td>
            <td>{props.ProductDescreption}</td>
        </tr>
    );
}
export default Items 