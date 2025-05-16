import './btn.css'

interface Props {
    filled: boolean;
    onClick: () => void;
}

export default function UpvoteBtn({filled, onClick} : Props){
    return (
            <>
                <button className={filled ? "btn-upvoteOn" : "btn-upvoteOff"} onClick={onClick}></button>
            </>);
}
