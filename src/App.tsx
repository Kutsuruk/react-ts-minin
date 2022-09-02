import Product from './components/Product';
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {useContext} from "react";
import {IProduct} from "./models";
import {ModalContext} from "./context/ModalContext";

function App() {
    const {products, error, loading, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
      <div className='container mx-auto max-w-2xl pt-5'>
          { loading && <Loader /> }
          { error && <ErrorMessage error={error} /> }
          { products.map(product => <Product key={product.id} product={product} />) }

          {
              modal &&
              <Modal onClose={() => close()} title='Create new product'>
                  <CreateProduct onCreate={createHandler}/>
              </Modal>
          }

          <button
              className='absolute bottom-5 right-5 rounded-full bg-yellow-500 text-white text-2xl px-3 py-1'
              onClick={() => open()}
          >
              +
          </button>
      </div>
    );
}

export default App;
