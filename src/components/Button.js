export default function Button({label, onClick}) {
    return (
        <button 
            onClick={onClick}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
            {label}
        </button>
    );
}