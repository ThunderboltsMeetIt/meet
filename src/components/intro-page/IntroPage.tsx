import Analyze from "@/components/analyze/analyze.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dices} from "lucide-react";

export default function IntroPage() {
    return (
            <div className="m-5 flex flex-row">
                <div className="mx-auto w-[600px] flex flex-col">
                    <h2 className="my-5 text-2xl">Hello!</h2>
                    <Button variant="outline" className="py-5 text-lg">
                        <Dices />
                        Select a random quote
                    </Button>
                    <div className="my-5 mt-7 opacity-60">
                        <hr />
                        <p className="text-center mt-[-0.5lh] bg-white w-max ml-auto mr-auto px-5">
                            Or get a more personalised choice
                        </p>
                    </div>
                    <Analyze/>
                </div>
            </div>
    )
}