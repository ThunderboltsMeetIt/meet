import "./btn.css";
import {Star} from 'lucide-react';

interface Props {
    filled: boolean;
    onClick: () => void;
}



export default function StarBtn({ filled, onClick }: Props) {
    return (
            <button className="ibtn" onClick={onClick}>
                <Star
                        color={filled ? '#FFD700' : '#C0C0C0'}
                        size={24}
                        fill={filled ? 'yellow' : 'grey'}
                />
            </button>
    );
}
