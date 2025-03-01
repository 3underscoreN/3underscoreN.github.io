import React from "react";
import Link from "next/link";
import FuzzyText from "@/components/notfoundstylized/fuzzy404";

const NotFoundPage = () => {
    return (
        <>
            <div className="w-full h-screen absolute top-0 flex flex-col justify-center place-items-center -z-10">
                <FuzzyText 
                    fontFamily="inherit" 
                    color="#ff3eb7"
                    fontWeight={700}
                    baseIntensity={0.1}
                    hoverIntensity={0.3}
                >
                    404
                </FuzzyText>
                <div className="my-5"/>
                <div>Welcome to the limbo!</div>
                <div>Perhaps you want to go back to the <Link href="/" className="underline underline-offset-2">landing page</Link>?</div>
            </div>
        </>
    );
}

export default NotFoundPage;