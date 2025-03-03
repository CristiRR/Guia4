export const AmountDisplay = ({label, amount}) =>{
    return(
        <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">${amount}</p>
            <p className="text-gray-500">{label}</p>
        </div>
    );
};