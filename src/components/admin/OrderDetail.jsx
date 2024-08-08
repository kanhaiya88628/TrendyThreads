import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteOrder } = context;

    return (
        <div>
            <div className="py-5">
                <h1 className="text-xl text-pink-300 font-bold">All Orders</h1>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <thead>
                        <tr>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Product ID</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Image</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Title</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Category</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Price</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Quantity</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Total</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Status</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Name</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Address</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Pincode</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Mobile</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Email</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Date</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order) =>
                            order.cartItems.map((item, index) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                return (
                                    <tr key={id} className="text-pink-300">
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {index + 1}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {id}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            <img src={productImageUrl} alt={title} className="w-20" />
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {title}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {category}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            ₹{price}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {quantity}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            ₹{price * quantity}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.status}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.addressInfo.name}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.addressInfo.address}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.addressInfo.pincode}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.addressInfo.mobileNumber}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.email}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                            {order.date}
                                        </td>
                                        <td
                                            onClick={() => deleteOrder(order.id)}
                                            className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-red-500 cursor-pointer"
                                        >
                                            Delete
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
