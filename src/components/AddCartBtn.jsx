import './AddCartBtn.css';

const AddCartBtn = ({name, newPrice}) => {
  return (
    <button onClick={()=>{alert('Has comprado ' + name + ' un valor de $ ' + newPrice)}}>Comprar</button>
  )
}

export {AddCartBtn}