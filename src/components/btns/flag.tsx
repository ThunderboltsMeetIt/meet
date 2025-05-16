import "./btn.css";
import {Flag} from 'lucide-react';

interface Props {
    filled: boolean;
    onClick: () => void;
}



export default function FlagBtn({ filled, onClick }: Props) {
    return (
            <button className="ibtn" onClick={onClick}>
                <Flag
                        color={filled ? '#0A0A0A' : '#C0C0C0'}
                        size={24}
                        fill={filled ? 'red' : 'grey'}
                />
            </button>
    );
}
