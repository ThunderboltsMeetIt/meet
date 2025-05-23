import "./btn.css";
import {Heart} from 'lucide-react';

interface Props {
    filled: boolean;
    onClick: () => void;
}

export default function UpvoteBtn({filled, onClick} : Props){
    return (
            <button className="ibtn" onClick={onClick}>
                <Heart
                        color={filled ? '#FF0000' : '#C0C0C0'}
                        size={24}
                        fill={filled ? 'red' : 'grey'}
                />
            </button>
    );
}
