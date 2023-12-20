import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div className='container py-3'>
                <h2 className='text-center py-5'>Add Product</h2>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <form>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter Product Name'
                                    className='form-control'

                                />
                            </div><br />
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter Product Description'
                                    className='form-control'

                                />
                            </div><br />
                            <div>
                                <input
                                    type='Number'
                                    placeholder='Enter Product Price'
                                    className='form-control'

                                />
                            </div><br />
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter Product Category'
                                    className='form-control'

                                />
                            </div><br />
                            <div>
                                <input
                                    type='Number'
                                    placeholder='Enter Product Quantity'
                                    className='form-control'

                                />
                            </div><br />
                            <div>
                                <input
                                    type='file'

                                />
                            </div><br />
                            <button className='btn btn-info btn-block'>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct