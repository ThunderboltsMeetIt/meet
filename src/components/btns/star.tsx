import './btn.css'

interface Props {
    filled: boolean;
    onClick: () => void;
}


export default function StarBtn({filled, onClick} : Props){
    return (
        <>
            <span className={filled ? "btn-starOn" : "btn-starOff"} onClick={onClick}></span>
        </>);
}
